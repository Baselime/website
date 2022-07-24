---
title: Why Observability as Code?
description: Modern software architectures introduce the need for observability, the ability to reliably know how systems and code behave in production. Teams adopting observability should be able to store and control their observability configurations in code.
cover: why-observability-as-code.jpg
alt: Why Observability as Code
featured: true
date: 2021-09-15
published: true
author:
  id: boris-tane
  name: Boris Tane
tags: 
  - observability
  - as code
---

Organisations that adopt micro-services architectures and serverless generally benefit from improved team productivity, higher services scalability, and more resilient systems. However, these benefits come at a cost: there is an explosion of operational complexity. Application monitoring practices of the previous decade are simply not adapted for highly distributed architectures. The key questions for all teams have shifted from "Do we have enough memory on this machine?" to "Do we know that our systems are working as we think they are?". Observability practices are the answer to these questions.

## Observability
According to [Wikipedia](https://en.wikipedia.org/wiki/Observability), Observability is "a measure of how well internal states of a system can be inferred from knowledge of its external outputs.". In the case of software architectures, observability means having the ability to understand how your systems and code behave, to identify bottlenecks and defects, and to understand why it's happening; all without adding anything to the systems. This is generally achieved with the help of structured events, logs, metrics and distributed traces. 

Consequently, it is extremely important to reliably be able to visualise the system outputs, and to be alerted when unexpected behaviour emerges. Configuring visualisation dashboards and alerts has traditionally been done through Graphical User Interfaces (ClickOps). As a result:

- configurations are not repeatable across environments;
- it is impossible to reliably test observability configurations;
- lack of consistency across teams;
- mistakes are near-impossible to spot;
- observability is not part of the integration and deployment (CI/CD) process;

These pitfalls are solved by treating observability configurations as code.


## Observability as Code

Observability as Code adapts the principles of Infrastructure as Code to observability configurations. Dashboards and alerts are configured and automated through Continuous Deployment pipelines, are source-controlled, and are repeatable across teams and environments.

With Observability as Code, teams can adopt the best practices from software engineering to collaborate and iterate on observability configurations.

We'd love to hear your thoughts on Observability as Code, and if you're interested in applying those principles to serverless architectures, we'd love to have you [try our beta](https://baselime.io).

Photo by <a href="https://unsplash.com/@thisisengineering?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ThisisEngineering RAEng</a> on <a href="https://unsplash.com/s/photos/software-engineer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  