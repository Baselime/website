export function applicationObservabilityAsCode(): Record<string, any> {
  const obj = {
    version: '0.0.4',
    application: "API",
    description: "The back end API",
    queries: {
      "lambda-cold-start-duration": {
        name: "Duration of Lambda cold-starts",
        description: "How long do cold starts take?",
        parameters: {
          dataset: "logs",
          namespaces: ["prod-api"],
          namespaceCombination: "STARTS_WITH",
          calculations: [
            "MAX(@initDuration)",
            "MIN(@initDuration)",
            "AVG(@initDuration)",
            "P99(@initDuration)",
            "COUNT",
          ],
          filters: ["@type := REPORT", "@memorySize :> 256"],
          filterCombination: "AND",
          groupBy: {
            type: "number",
            value: "@memorySize"
          }
        },
      },
    },
    alerts: {
      "critical-cold-start-duration": {
        name: "Lambda cold starts take more than 2 seconds on the API",
        parameters: {
          query: "lambda-cold-start-durations",
          frequency: 30,
          duration: 30,
          threshold: "> 2000",
        },
        channels: ["developers"],
      },
    },
    channels: {
      developers: {
        type: "email",
        targets: ["developers@baselime.io"],
      },
    },
  };
  return obj;
}
