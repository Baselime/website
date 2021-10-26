---
title: The Essential Guide to Amazon SQS
description: This guide covers the essentials of Amazon SQS, the fully managed message queueing service provided by AWS. We will outline its benefits and limitations, its pricing in human terms, and compare it with other managed messaging services available on AWS.
cover: sqs-guide.jpg
alt: The Essential Guide to Amazon SQS
featured: true
date: 2021-10-25
published: true
author:
  id: boris-tane
  name: Boris Tane
tags: 
  - messaging
  - guide
  - aws
  - amazon
---

Amazon SQS (Simple Queue Service) is one of my favourite services on Amazon Web Services. It is a fully managed and serverless queueing service: you do not need to provision and maintain your own servers for a highly available and scalable message queueing systerm.

SQS queues are distributed across multiple availability zones within the same AWS region to ensure high availability. They work well for exchanging messages between applications in cloud architectures thanks to HTTP API SQS exposes, over which applications can send and read messages.

## Sending and reading messages

There are two types of queues in SQS:

- **Standard**: your standard queues, which cover the vast majority of use-cases
- **FIFO**: First In First Out queues, which guarantee that messages are processed exactly once, in the exact order they are sent

FIFO queues also handle [automatic deduplication of messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html). Simply submit a message deduplication ID, and if a message with a message deduplication ID is sent successfully, any subsquent messages sent with the same deduplication ID are accepted but are not delivered during a 5-minute deduplication interval. This helps developers protect downstream services from processing the same message multiple times. 

<article-image  src="blog/sqs-guide/sqs-fifo.png"  alt="Illustration of Amazon SQS FIFO" title="Amazon SQS FIFO" source="">
</article-image>
  
You can create queues through the AWS console, the SQS HTTP API (using the [CLI](https://aws.amazon.com/cli/) or the [SDK](https://aws.amazon.com/tools/)) or with your favourite Infrastructure as Code solution.

Once a queue is created, SQS returns a queue URL in the format `https://sqs.<REGION>.amazonaws.com/<AWS_ACCOUNT>/<QUEUE_NAME>`.

The queue URL is necessary to send messages to, and to receive messages from the queue. The same HTTP API is used to interface with both standard and FIFO queues. A single queue can have multiple producers and multiple consumers, and each message will be processed **at least once** for Standard queues, and **exactly once** for FIFO queues. 

Contrary to common belief, SQS consumers follow a `pull` delivery system, rather than a `push` delivery system. Consumers have to poll messages from SQS. When a message is succesfully processed by a consumer, the consumer must delete it from the queue. 

Also, the same message cannot be received by multiple consumers simultaneously. SQS sets a visibility timeout on a message once received by a consumer, a period of time during which other consumers cannot receive and process the same message.

<article-image  src="blog/sqs-guide/sqs-visibility-timeout-diagram.png"  alt="SQS Visibility Timeout" title="SQS Visibility Timeout" source="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">
</article-image>


A common trick for near-real time applications is to enable long polling on SQS queues and process messages in batches. Long polling sets SQS to wait a user-defined period of time before messages sent to a queue become available to consumers. Messages received within this timeframe can be processed in batches, up to 10 message per batch. 

Additionally, a producer can send messages with associated metadata attributes which are a set of key-value pairs which can be used by consumers to handle the message in a particular way without having to process the message body first.


## Integrating with SQS

SQS fits in within the wider [AWS Serverless Ecosystem](https://aws.amazon.com/serverless/), as the preferred queuing service. A very common use-case is to trigger a [Lambda function](https://aws.amazon.com/lambda/) when a message is sent to a queue. But SQS integrations are not limited to Lambda functions:

- **[SNS to SQS](https://docs.aws.amazon.com/sns/latest/dg/sns-sqs-as-subscriber.html)**: A SQS queue can subscribe to an [Amazon SNS](https://aws.amazon.com/sns/) topic, such that every message sent to the topic will be automatically sent to the SQS queue. 

<article-image  src="blog/sqs-guide/sns-to-sqs.png"  alt="SNS to SQS Integration" title="SNS to SQS Integration" source="">
</article-image>

- **EventBridge to SQS**: If you're using [EventBridge](https://aws.amazon.com/eventbridge/), it's pretty common to set an EventBridge rule to push a message to a SQS queue.

- **API Gateway to SQS**: One of the more interesting SQS integrations is with [API Gateway](https://aws.amazon.com/api-gateway/). You can introduce a SQS queue between your API Gateway and your consumers to balance the load on your consumers. Every request to the API Gateway creates a message in the queue which can be processed by the consumer. This creates a buffer between your API Gateway and your consumers.

- **Step Functions to SQS**: [AWS Step Functions](https://aws.amazon.com/step-functions/) can send messages to a SQS queue directly from the Amazon Step Language, and act as producer for the given queue.

- **SQS to AWS Lambda**: A SQS queue can be set as trigger for a Lambda function. Messages received by the queue are sent to the Lambda function for processing. It should be noted that in this integration, the lambda doesn't do the polling. This is handled by the Lambda service, free of charge. However, you lose control over the long polling time.

- **KMS and SQS**: [AWS Key Management Service](https://aws.amazon.com/kms/) can be used to perform server-side encryption (SSE) on messages exchanged through SQS.

And the teams at AWS are continiously adding new integrations.

Additionally, SQS supports dead-letter qsueues out of the box. [Dead-letter queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html) are queues where messages from a primary queue which cannot be processed successfully by a consumer are redirected. Each queue / dead-letter queue pair has a redrive policy, which sets how many times the consumer can attempt to process a message and fail before it is sent to the dead-letter queue. Dead-letter queues let you isolate messages which resulted in errors such that you can review them and potentially re-process them at a later stage.

Access to a SQS queue is granted via [AWS IAM](https://aws.amazon.com/iam/). Unauthorized producers and consumers cannot access the queue or its content.

Thanks to these native integrations, SQS is one of the cornerstones of serverless and event-driven architectures on AWS. It helps in the effort to connect together multiple various services to achieve a business need with very minimal application code.

Outside of the above integrations, any service, whether in AWS or not, can send and/or receive messages from SQS through its HTTP API.

<!-- <article-image  src="blog/sqs-guide/eventbridge-to-sqs.png"  alt="EventBridge to SQS Integration" title="EventBridge to SQS Integration" source="">
</article-image> -->

## The Curious Case of the SQS <-> Lambda Integration

When using a SQS queue as a trigger for a Lambda function, the Lambda service takes care of the polling for you. As such, to the Lambda consumer, the queue behaves more like a [pub/sub](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) delivery system. To a developer, it might seem like the queue is pushing messages to the Lambda function.

However the Lambda service handles the polling in a very specific way which developers should know in order to avoid bugs.

For standard queues, Lambda starts long polling with five parallel connections. When messages become available, each polling connections grabs a batch of messages from the SQS queue and passes it to one lambda function instance, or a maximum of 5 concurent invocations. If there are still messages in the queue, Lambda increases the number of polling processes by up to 60 more instances every minute. Also, Lambda is limited by the maximum number of simulatneous batches that can be processed from an [event source mapping](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html).

For FIFO queues, Lambda ensures that messages are sent to your function in the same order as it receives them. The messages are sorted in groups and sent only one batch at a time for a group. If there an error occurs in the processing by your function, all retries are attempted on the affected messages before Lambda receives additional messages from the same group.

<article-image  src="blog/sqs-guide/sqs-lambda.png"  alt="SQS to Lambda polling layer" title="SQS to Lambda polling layer" source="">
</article-image>

### The problems

First of all, you cannot control the polling time to regulate the pressure on your downstream services. Yes, Lambda can scale pretty well, but your function might be interfacing with other downstream services which do not scale as well.

Secondly, the auto-scaling of Lambda instances is not correlated with your function concurency. If your function keeps receiving messages when it has reached its concurency limit, new messages will be throttled. These messages will back in the queue at the end of their visibility timeout, but if this happens multiple time and exceed the queue redrive policy, they might never be successfully processed and be dropped, or sent to the dead-letter queue.

The [official recommendation](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html) from AWS are:

- Set the visibility timeout of the queue to at least 6 times the timeout of the Lambda function. The extra will allow the function to retry processing the message multiple time before it potentially gets sent to the dead-letter queue.
- Configure a dead-letter queue on your queue to receive any message which still fails to be successfully processed.
- Edit the queue redrive policy and increase the number of times a message can be unsuccessfully processed before being sent to the dead-letter queue (`maxReceiveCount`) to at least 5. 




## Limitation

As with almost everything in the cloud, Amazon SQS comes with a lot of "gotchas".

Messages can be sent, received or deleted in batches of up to 10 messages. It is not possible to process batches exceeding 10 messages. However, when using a SQS queue as a trigger for a Lambda function, events can be processed in batches of up to [10,000 messages per batch](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html) for standard queues, but only 10 for FIFO queues.

SQS message payloads are limited to 256KB. If sending messages in batch, the total size of the whole batch should not exceed 256KB. To send messages larger than 256KB, JAVA developers can use the [Amazon SQS Extended Client Library for Java](https://github.com/awslabs/amazon-sqs-java-extended-client-lib) which stores the payload in [Amazon S3](https://aws.amazon.com/s3/) and sends a reference to the S3 object through SQS. For other programming languages, users can write custom code achieving a similar functionality. However, if you're using a queue as a trigger for a Lambda function, the total size of a batch can exceed the 256KB, but must be within the 6MB [payload limit](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html) for synchronous Lambda invocations.

Additionally, each message sent to a queue can have a maximum of 10 metadata attributes, sent alongside the message. The metadata attributes count towards the size limits per message and batch of messages.

SQS queues can contain an unlimited number of messages, but there is a limit to the number of inflight messgaes. A message is considered inflight when it's been received by a consumer for processing but has not been deleted from the queue yet; There can be a maximum of 120,000 inflight messages for a standard SQS queue, whereas for a FIFO queue there can be a maximum of 20,000 inflight messages. [These quotas can be increased](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html#inflight-messages) by submitting a quota increase request to AWS.

Standard queues support a near unlimited number of transactions per seconds, but FIFO queues by default support a maximum of 300 messages per second (3000 per second if batching messages in batches of 10).

You can configure your queue visibility timeout, either at the queue level, or at a more granular message level as well. The default visibility timeout is 30 seconds, and it can be set to a minimum of 0 seconds and a maximum of 12 hours.

Long polling time can be increased to a maximum of 20 seconds, and the rentention period for messages in queues must be between 60 seconds 14 days.

For some applications, it is necessary to introduce a delay between when a message is produced and the moment it becomes visible to consumers. SQS provides a queue delay, which can be set to postpone the delivery of message to consumers after they are sent to a queue. The default and minimum queue delay is 0 seconds, and can be increased to up to 15 minutes.

<article-image  src="blog/sqs-guide/sqs-message-delay.png"  alt="SQS message delay" title="SQS message delay" source="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-delay-queues.html">
</article-image>

It should also be noted that when implementing dead-letter queues, the primary queue and it's associated dead-letter queue should be of the same type (Standard or FIFO).

## Pricing in human terms

Amazon SQS is part of the [AWS Free Tier](https://aws.amazon.com/free/). All AWS accounts get 1 million SQS request per month for free, even when the account is older than 12 months.

When an account has exhausted its free tier, you pay only for what you use with no minimum fee.

An SQS request is any action with a payload of at most 64KB. An action is any operation completed with the SQS HTTP API; sending, receiving or deleting a message each count as one action. As such sending a message with the maximum payload size of 256KB constitutes 4 requests (each request accounting for 64KB).

If you exclusively process messages smaller than 64KB, each succesful message will incur charges for a minimum of 3 requests (sending, receiving and deleting).

The following table outlines pricing for accounts sending between 1 million and 100 billion requests per months in `eu-west-1`. Please refer to the [official documentation](https://aws.amazon.com/sqs/pricing/) for higher quotas and different regions.

|                |     Pricing     |                                                                                        Details                                                                                        |
| -------------- | :-------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Srandard queue | $0.40/M request |                                                            Each request can contain up to 10 messages, and a maximum 64KB                                                             |
| FIFO queue     | $0.50/M request | This pricing is for actions for sending, receiving, deleting, and changing visibility of messages with the FIFO queue. All other API requests are charged at the standard queue rates |

Moreover, Amazon SQS charges for data transfers in and out of SQS. Data transfers between SQS and [Amazon EC2](https://aws.amazon.com/ec2) and AWS Lambda within the same region are free. The same transfers across regions are charged at the rate for transfers across the public internet.

The following table outlines pricing for the first 9.999TB of data transfered within `eu-west-1`. Please refer to the [official documentation](https://aws.amazon.com/sqs/pricing/) for higher quotas and different regions.

|                                                          | Pricing  |
| -------------------------------------------------------- | :------: |
| Data transfer with EC2 and Lambda within the same region |   Free   |
| Data transfer across the public internet                 | $0.09/GB |

### Pricing Example

Let's say your application is made of two modules (a producer and a consumer), which communicate through SQS. Everyday, the producer sends 10,000,000 messages to the consumer throughout the day and at regular intervals. We assume that you are not batching messages and that every poll to SQS returns a single message.

Additionally, Each message is between 65KB and 127KB. Let's assume you're using a standard queue, and both the producer and the consumer are EC2 instances within the same region as your SQS queue. Also, we assume that all messages are processed succesfully on the first attempt and that your account has already exceeded its free tier limits.

In this scenario, for each message, your application is performing 3 actions to SQS:

- Producer: send the message
- Consumer: read the message and delete it from the queue after processing

Since each message is between 65KB and 127KB, you're performing 2 requests per action.

That's a total of 6 requests per message, thus 60,000,000 requests per day.

The total charged per month is therefore: `60,000,000 * $0.4 * 30`, or  $720 per month.

### Cost Optimisation

In order to optimise your SQS bill, you should aim at working withtin the same region and reducing the number of requests sent to SQS. There are multiple ways to achieve the latter, whilst keeping your functionality unchanged:

- **Long polling**: If the data you process from a queue is generally infrequent and doesn't require near real time processing, increasing your long polling time will reduce the total number of requests sent to SQS, thus reducing your SQS bill.

- **Poll less often**: If you're receiving data from a queue very sparsely, it will be beneficial to poll your queue at larger intervals, making sure that you set the queue retention period to be greater than your polling interval.

- **Batching messages**: Batching messages means more messages can be read in a single poll, and associated with long polling and polling less often, you can retrieve a large number of messages from SQS every time your application polls SQS.

- **Lambda as consumer**: Use AWS Lambda as consumer of your SQS queues. Lambda provides the polling layer for SQS free of charge. You will however lose some of the control over the polling.


## SQS Alternatives

There are multiple managed messaging services within AWS and they all fit a specific set of use-cases.

- **[Amazon MQ](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/welcome.html)**: Amazon MQ is a managed queueing service based on [Apache ActiveMQ](http://activemq.apache.org/) AWS offers to its customers. Its main purpose is to help organisations working with ActiveMQ to transition to a cloud based solution. Since it's based on ActiveMQ, it natively supports ActiveMQ and RabbitMQ engine types, and any application written based on any of those can be ported to Amazon MQ without any code change. However, Amazon MQ lacks in the flexibility and integrations SQS offers. If you're porting an application from ActiveMQ to the cloud, it's an appropriate alternative to SQS. However, if you're building a brand new application, SQS is the way to go.

- **[Amazon SNS](https://aws.amazon.com/sns)**: SNS is a fully managed and serverless messaging service working on a push delivery system. It is well suited for broadcasting a message from a producer to multiple consumers. Messages are not persisted to SNS. Messages sent to an SNS topic are immediately broadcasted to all the listeners. SNS is mainly used to facilitate the processing of the same message by multiple modules, whereas SQS most common use-case is to decouple processes and parallelise asynchronous processing of messages.

- **[Amazon Kinesis Data Streams](https://aws.amazon.com/kinesis/data-streams/)**: Kinesis Data Streams is a managed AWS service built for collecting, processing, and analysing real-time streaming data. It can scale to gigabites of data processed per second, and is highly relevant for analytics data, social media feeds or financial transcations. However, Kinesis Data Streams is not serverless and can be quite complex to set-up for exchanging a few thousand or million messages per day between applications. If you choose Kinesis Data Streams, it's on you to allocate shards to cope with the potentially fluctuating load on your application.

- **[Amazon EventBridge](https://aws.amazon.com/eventbridge/)**: EventBridge is a fully managed and serverless event bus on AWS. It helps connect applications within AWS and also to supported Software-As-A-Service vendors outside of AWS. EventBridge can stream data from supported external vendors to AWS Lambda without any additional code. It is also very powerful as an event bus within your AWS infrastructure, transmitting messages from one point to the other. It adds a lot of functionality such as schema validation, an archive, the option to replay events, and a rule based delivery of messages. It is common to use SQS and EventBridge in tandem in event-driven architectures. Producers will send events to EventBridge. EventBridge will then check the event against pre-defined rules and route events to the appropriate SQS queue for consumption by Lambda functions or any other consumer.


## Conclusion

Amazon SQS is a critical piece of event-driven and serverless architectures within the AWS ecosystem. Despite having "Simple" in its name, it takes a bit of learning to grasp all the nuances of SQS.

If you are adopting serverless and you're facing problems understanding how all the moving parts of your architecture work together, we'd love to have you [try our beta](https://baselime.io). 

Cover Photo by <a href="https://unsplash.com/@bundo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bundo Kim</a> on <a href="https://unsplash.com/s/photos/letter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>.
  






