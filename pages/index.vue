<template>
  <div>
    <section class="heading">
      <div class="inner">
        <div class="details">
          <div>
            <h1>Developer-first observability for serverless</h1>
            <p class="sub-header">
              Adopt Observability as Code to eliminate chaos from your
              serverless applications. Baselime makes it easy for your team to
              identify and troubleshoot defects in your serverless
              applications.
            </p>
          </div>
          <div class="buttons-container">
            <div>
              <primary-button
                :text="'Join Private Beta'"
                @action="displayJoinBetaModal()"
                :event="'open-join-beta-modal'"
                :eventProperties="{ origin: 'home-page' }"
              />
            </div>
            <div>
              <primary-button
                :text="'Book a Demo'"
                :secondary="true"
                :inline="true"
                :url="'https://calendly.com/boristane/30min'"
                :event="'book-demo'"
                :eventProperties="{ origin: 'home-page' }"
              />
            </div>
          </div>
        </div>
        <div class="image-container">
          <img src="@/assets/images/header.svg" alt="" />
        </div>
      </div>
    </section>

    <section class="observability">
      <div class="inner">
        <div class="details">
          <div>
            <h2>Adopt Observability as Code</h2>
            <p class="sub-header">
              Ensure your observability configurations are repeatable and
              consistent across environments. Integrate your observability in
              your Continuous Deployment pipelines, documents your dashboard and
              alerts, and increase your team velocity.
            </p>
          </div>
          <div class="buttons-container">
            <div>
              <primary-button
                :text="'Why Observability as Code?'"
                :inline="true"
                :url="'/blog/why-observability-as-code'"
                :event="'visit-why-observability-as-code'"
                :eventProperties="{ origin: 'home-page' }"
              />
            </div>
          </div>
        </div>
        <div class="image-container">
          <img src="@/assets/images/observability-as-code.svg" alt="" />
        </div>
      </div>
    </section>

    <section class="achivements">
      <h2>Improve your serverless development workflows</h2>
      <h3>
        Embrace observability driven development and tame your serverless
        operational complexity
      </h3>

      <div class="inner">
        <Achievement
          v-for="(achievement, i) in achievements"
          :key="i"
          :achievement="achievement"
          class="item"
          :style="{ background: achievement.color }"
        />
      </div>
    </section>

    <section class="observability-2 reverse">
      <div class="inner">
        <div class="details">
          <div>
            <h2>Understand your serverless stack</h2>
            <div class="sub-header">
              <p>
                Identifying bottlenecks and resolving incidents in your
                serverless applications should not be a pain. Stop aimlessly
                firefighting when there's an outage. Spot the affected services
                and identify the root cause in minutes, not hours.
              </p>
              <p>
                Baselime gives you the right tools to reliably observe your
                serverless stack.
              </p>
            </div>
          </div>
        </div>
        <div class="image-container">
          <img src="@/assets/images/stack.svg" alt="" />
        </div>
      </div>
    </section>

    <section class="observability-3">
      <div class="inner">
        <div class="details">
          <div>
            <h2>Collaborate with your team</h2>
            <div class="sub-header">
              <p>
                Identifying and fixing issues in modern software infrastructure
                is a team sport. We share stack traces, copy/paste logs, reference docs,
                etc... all in chat tools. We can do better.
              </p>
              <p>
                Baselime is the collaboration platform where your team can debug
                serverless applications.
              </p>
            </div>
          </div>
        </div>
        <div class="image-container">
          <img src="@/assets/images/collaboration.png" alt="" />
        </div>
      </div>
    </section>

    <section class="steps">
      <h2>Observability for serverless applications made simple</h2>
      <h3>Boost your team productivity</h3>

      <div class="inner">
        <Step v-for="(step, i) in steps" :key="i" :step="step" class="item" />
      </div>
    </section>

    <!-- <section class="integrations">
      <h2>Integrate with your everyday tools</h2>
      <div class="inner">
        <img src="@/assets/images/integrations.png" alt="" />
      </div>
    </section> -->

    <section class="observability-4 reverse">
      <div class="inner">
        <div class="details">
          <div>
            <h2>Get alert fatigue under control</h2>
            <p class="sub-header">
              Your team doesn't have to be alerted multiple times a day for
              defects which do not impact your user experience. Adopt Service
              Level Objectives (SLOs) and only set up alerts which are relevant
              to your users and your business.
            </p>
          </div>
          <div class="buttons-container">
            <div>
              <primary-button
                :text="'What are SLOs?'"
                :inline="true"
                :url="'/blog/what-are-slos'"
                :event="'visit-what-are-slos'"
                :eventProperties="{ origin: 'home-page' }"
              />
            </div>
          </div>
        </div>
        <div class="image-container">
          <img src="@/assets/images/alert-fatigue.svg" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Achievement from '@/components/Achievement.vue'
import Step from '@/components/Step.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import { EventBus } from '~/event-bus'

export default Vue.extend({
  components: { PrimaryButton, Achievement, Step },
  data() {
    return {
      achievements: [
        {
          value: '4x',
          title: 'Improved configuration consistency',
          description:
            'Standardise the setup of your alerts and dashboard with Observability as Code.',
          color: '#1A6AE3',
        },
        {
          value: '60%',
          title: 'Reduced Mean Time To Recovery',
          description:
            'Recover from incidents faster. Use wide structured events to find issues deep in your serverless applications.',
          color: '#F94E1E',
        },
        {
          value: '2x',
          title: 'Higher deployment frequency',
          description:
            'Deploy with more confidence in your code. Ship more features, more often, with fewer defects.',
          color: '#009242',
        },
        {
          value: '80%',
          title: 'Reduced alert fatigue',
          description:
            'Work with Service Level Objectives and set up alerts only for issues impacting your core user experience.',
          color: '#ffc71e',
        },
      ],
      steps: [
        {
          value: 1,
          title: 'Get started in minutes',
          description:
            'Instrumenting your serverless stack for observability is easy. Baselime integrates with your systems using CloudFormation and OpenTelemetry.',
        },
        {
          value: 2,
          title: 'Always bet on code',
          description:
            "You have already adopted Infrastructure as Code, but your observability configurations are all done clicking around dashboards. It's time to transition to Observability as Code, make observability a first class citizen of your development life cycle.",
        },
        {
          value: 3,
          title: 'Structured events, metrics and much more',
          description:
            'Baselime gathers your raw data and aggregates it in the shape you need when you need it. We collect structured events and metrics, and we let you slice and dice your data at will.',
        },
        {
          value: 4,
          title: 'Observability is multiplayer',
          description:
            'Fixing production defects and outages require a lot of collaboration, knowledge sharing and cooperation. Stop pasting logs in Slack collaborate from within your observability platform, Baselime.',
        },
      ],
    }
  },
  methods: {
    displayJoinBetaModal() {
      EventBus.$emit('display-join-beta-modal')
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
section {
  padding: 120px 60px;

  @media screen and (max-width: 890px) {
    padding: 60px 30px;
  }

  .inner {
    max-width: 1212px;
    margin: auto;
    display: flex;
    align-items: center;

    justify-content: space-between;
    min-height: 65vh;

    @media screen and (max-width: 890px) {
      flex-direction: column;
      height: unset;
    }
    .details {
      margin: 0 30px 60px 0;
      max-width: 560px;
      @media screen and (max-width: 890px) {
        max-width: 100%;
        margin: 0 0 60px 0;
      }
      .sub-header {
        margin: 30px 0;
        font-weight: bold;
        opacity: 0.75;
      }
      .buttons-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0 0 0 -5px;
        div {
          margin: 5px 30px 5px 0;
          @media screen and (max-width: 890px) {
            margin: 15px 5px;

            width: 100%;
          }
        }
      }
    }

    .image-container {
      max-width: 550px;
      border-radius: 5px;
    }
  }

  &.reverse {
    .inner {
      flex-direction: row-reverse;
      @media screen and (max-width: 890px) {
        flex-direction: column;
      }
      .details {
        text-align: right;
        margin: 0 0 60px 30px;
        @media screen and (max-width: 890px) {
          margin: 0 0 60px 0;
        }
        .buttons-container {
          justify-content: flex-end;
        }
      }
      .image-container {
        right: unset;
        left: 0;
      }
    }
  }
}

.heading {
  background: $mainBackground;
  padding-top: 120px;
  padding-bottom: 120px;
  .inner {
    height: inherit;
    align-items: flex-start;
    min-height: unset;

    .details {
      max-width: 640px;
      h1 {
        font-size: 4.2rem;
        @media screen and (max-width: 550px) {
          font-size: 3.2rem;
        }
      }
    }

    .image-container {
      max-width: 550px;
      border-radius: 5px;
      @media screen and (max-width: 890px) {
        position: inherit;
        max-width: unset;
      }
    }
  }
}

.steps,
.achivements,
.integrations {
  background: $mainBackground;
  text-align: center;
  h2 {
    margin: 0 0 15px 0;
    line-height: 2.4rem;
  }
  h3 {
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
  .inner {
    max-width: 1212px;
    flex-wrap: wrap;
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    min-height: unset;
    margin: 60px auto 0 auto;

    .item {
      margin: 15px;
      @media screen and (max-width: 890px) {
        margin: 15px auto !important;
      }
    }
  }
}

.steps {
  .item {
    max-width: 550px;
  }
}

.achivements {
  .item {
    max-width: 550px;
  }
}

.integrations {
  background: $darkBlue;
  color: $white;
  img {
    width: 100%;
  }
}

.observability {
  background: $white;
  .inner {
    .image-container {
      padding: 0 0 0 60px;
      background: $yellow;
      position: absolute;
      z-index: 0;
      right: 0px;
      max-width: 50%;
      @media screen and (max-width: 1212px) {
        position: inherit;
        max-width: unset;
        padding: 0 0 0 15px;
      }
    }
  }
}

.observability-2 {
  background: $darkBlue;
  color: $white;
  .inner {
    .image-container {
      padding: 0 60px 0 0;
      background: $lightBlue;
      position: absolute;
      z-index: 0;
      left: 0px;
      max-width: 50%;

      @media screen and (max-width: 1212px) {
        position: inherit;
        max-width: unset;
        padding: 0 15px 0 0;
      }
    }
  }
}

.observability-3 {
  background: $white;
  .inner {
    .image-container {
      padding: 0 0 0 60px;
      background: $green;
      position: absolute;
      z-index: 0;
      right: 0px;
      max-width: 50%;

      @media screen and (max-width: 1212px) {
        position: inherit;
        max-width: unset;
        padding: 0 0 0 15px;
      }
    }
  }
}

.observability-4 {
  background: $mainBackground;
  .inner {
    .image-container {
      padding: 0 60px 0 0;
      background: $yellow;
      position: absolute;
      z-index: 0;
      left: 0px;
      max-width: 50%;

      @media screen and (max-width: 1212px) {
        position: inherit;
        max-width: unset;
        padding: 0 15px 0 0;
      }
    }
  }
}
</style>
