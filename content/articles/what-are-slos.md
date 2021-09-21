---
title: What are SLAs, SLOs and SLIs?
description: Over the past few years, software organisations have been embracing DevOps and SRE practices, including working with Service Level Agreements, Objectives and Indicators. What are those and how can you leverage their benefits in your organisation?
cover: what-are-slos.jpg
alt: What are SLAs, SLOs and SLIs?
featured: true
date: 2021-09-16
published: true
author:
  id: boris-tane
  name: Boris Tane
tags: 
  - observability
---

When providing software services, we and our users need to agree on performance benchmarks to be assessed against, whether it's an internal API or a public user-facing product. It becomes critical for us to gain a deep understanding of the expected behaviour of a service and how it impacts users.

In recent years, software organisations have been increasingly adopting Service Level Indicators (SLIs), Objectives (SLOs) and Agreemtents (SLAs) to define which metrics matter to their users, the bounds those metrics should fall within, and the consequences of breaching those bounds. Best practices around modelling, selecting, and analysing service metrics have been pioneered by Google - and detailed in the [Google SRE Book](https://sre.google/sre-book/service-level-objectives/).

It is important to agree on terminology when adopting DevOps or SRE practices. A lot of terms have been muddied in marketing materials and tend to mean different things when speaking to different people.

In this post, I will go through the key terminology and explore considerations when working with error budgets.

## Service Level Indicator

A Service Level Indicator (SLI) is a quantitative measure of a specific aspect of the level of service of a service. It allows teams to reliably and uniformly measure how a specific aspect of a service is performing against user expectations.

An example of SLI applicable to the majority of web-services is request latency. Reliably and consistenly measuring how long it takes a service to return a response to a client following a request is key to understanding how the service performs against user expectations. These measurements are generally aggregated and displayed in dashboards as rate of change, average, or percentile.

<info-box>
  <template #info-box>
    It is highly recommendeded to work with percentiles rather than averages. Averages hide outliers and long-tail data points, which are often critical to a service perceived performance. 
  </template>
</info-box>

It is important to clearly specify how SLIs are defined in your team or organisation. From where are the metrics measured, how are they aggregated, how often are they measured, accross which regions, etc... A request latency SLI can be defined as:

```txt
The time to last byte
following an HTTP GET request to `/`
measured through our monitoring system
at the server
averaged over 1 minute
across all regions
```

SLIs should measure as close as possible the levels of service. However, sometimes getting a direct measure of a level of service is prohibitively hard or impossible. We then resort to proxies. For example, measuring the end-to-end latency of a web application can be hard, as we need to measure both client and server side latencies. Measuring server-side latency can be straightforward, and for client-side latency we can measure the bunddle size of the page the client receives.

## Service Level Objectives

A Service Level Objective (SLO) is a target value or a range of values for a specific aspect of the level of service measured by an SLI. SLOs are typically expressed as percentages over time. For example, our target for request latency can be upper-bounded at 80ms (`request latency <= 80ms`). We want to achieve this target for 99% of requests within every week. The SLO will be defined as:

```txt
99% of HTTP GET request to `/`
received over 7 days
will complete in less than 100 ms.
```

Crafting the appropriate SLOs for your service requires a thorough understanding of how your users experience your service. It is important to start with what users value from your service, instead of what you can easily measure. Defining user expectations and working towards the appropriate SLI and targets lead to better SLOs than starting with what can be measured.

Your SLOs will be a major factor in how your engineering team works. Poorly defined or overly aggressive SLOs can reduce your team velocity, require overly complex solutions, or create an culture where there's a fear of deployment (No Deploy Friday). On the flip side, SLOs which are too relaxed will lead to bad product and poor user experience.

It is best practice to keep iterating on SLOs over the lifecycle of a service. Systems behaviours and user expectations change as a service matures. Moreover, we recommend setting alerts on your SLOs, which will let your engineering team know when there are problems which have an impact on user expectations. 

## Service Level Agreements

Service Level Agreements (SLAs) are implicit or explicit contractual agreements that outline the level of service users can expect from a service, and the consequence of failing to meet the outlines levels.

SLAs are generally closely aligned with product, legal and business decisions. However, engineering should be involved in the SLA decision process, as we can inform other parties on how difficult it will be to meet the required SLOs.

<!-- <article-image  src="blog/what-are-slos/image.png"  alt="tl;dr" title="tl;dr" source="">
</article-image> -->

## Error Budgets

Error budgets are the acceptable levels of unreliability for a service before it breaks its SLOs. Given an SLO that requires request latency to be less than 100ms for 99% of requests within every week, the error budget is 1% of request within a week can exceed 100ms in request latency.

<info-box>
  <template #info-box>
    An error budget can be seen as an SLO for meeting another SLO.
  </template>
</info-box>

Engineering teams can use their error budgets to roll out new features, redisingning system architectures or addressing tech debt. They give teams a buffer before user SLOs are violated.

It is important to not over-complicate SLOs. A few SLIs and associated SLOs are generally sufficient to accurately represent the performance of a service against user expectations. SLOs, alerts and error budgets should be restricted to aspects of the level of service which are critical to the user experience. Unnecessarily complex or overabundant SLOs lead to alert fatigue and make it harder for engineering teams to cut through the noise and focus on signal.

We'd love to hear your thougts on SLAs, SLOs and SLIs, and if you're interested in applying those principles to serverless architectures, we'd love to have you [try our beta](https://baselime.io).

Photo by <a href="https://unsplash.com/@maxostwalt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Max Ostwalt</a> on <a href="https://unsplash.com/s/photos/lighthouse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
