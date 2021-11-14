---
title: From logs to structured events
description: 
cover: what-are-slos.jpg
alt: From logs to structured events
featured: true
date: 2021-09-27
published: false
author:
  id: boris-tane
  name: Boris Tane
tags: 
  - observability
---

Logging is probably the first thing you did in your software engineering journey. It definitely was mine.

```c
#include <stdio.h>

int main() {
   printf("Hello, World!\n");
   return 0;
}
```

Logging is a core element of our toolset to gaining insights into problems, from typos in dev environments to the most intricate defects in production. It doesn't matter if it's a desktop application, a CLI or a highly distributed backend system, we log everywhere and have been for decades.

Yet, despite the pace at which software practices have evolved over the past few years, logging has remained pretty much the same: write a string describing the current state of the system to a file on disk and/or to the console. The more forward-looking organisations stream their logs to a log aggregation system either maintained in-house or by a SaaS vendor.

But is this really the best we can do?

## Why do we log?

We write log lines as they usually provide our first, and hopefully last clues on any defect in our systems. It's usually impossible to run a debugger in production, logs should guide us to where any defect occured, such that we can replicate it locally and ultimately fix it.

I wish things were this easy.

In our world of highly distributed services and serverless architectures, a log line is simply the beginning of what is nothing shy of a murder investigation. When processes hop over multiple services, multiple serverless functions, multiple data storages and asynchronous message brokers, defects can arise without leaving a clear `ERROR:` log. We're left trying to manually find patterns between logs across multiple services, metrics dashboards, deployment timestamps, etc...

And regular expressions. There's a [saying](https://blog.codinghorror.com/regular-expressions-now-you-have-two-problems/):


<quote>
  <template #quote>
    Some people, when confronted with a problem, think "I know, I'll use regular expressions." Now they have two problems.
  </template>
</quote>

There must be a better way to finding the root cause of production problems than crafting complex regular expressions. 





  
