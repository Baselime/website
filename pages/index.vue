<template>
  <div>
    <section class="heading">
      <div class="inner">
        <div class="details">
          <div>
            <h1>Developer-first observability for serverless</h1>
            <p class="sub-header">
              Baselime is an Observability as Code platform based on
              OpenTelemetry that makes it easy for your team to resolve
              incidents and performance bottlenecks in your serverless
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

    <section class="teaser">
      <div class="image-container" @click="displayVideoModal()">
        <img src="@/assets/images/teaser.png" alt="" />
        <div class="play-btn"></div>
      </div>
    </section>

    <section class="observability">
      <div class="inner">
        <div class="details">
          <div>
            <h2>Adopt Observability as Code</h2>
            <p class="sub-header">
              Adopt Observability as Code to eliminate chaos from your
              serverless applications. Integrate observability in your
              Continuous Deployment pipelines, documents your dashboard and
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
                is a team sport. We share stack traces, copy/paste logs,
                reference docs, etc... all in chat tools. We can do better.
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
            'Standardise the setup of your queries, alerts and dashboards with Observability as Code.',
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
    displayVideoModal() {
      EventBus.$emit('display-video-modal')
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

.teaser {
  background: $darkBlue;
  margin-top: 120px;
  .image-container {
    max-width: 1400px;
    margin: auto;
    margin-top: -250px;
    position: relative;
    cursor: pointer;
    &:hover {
      img {
        filter: drop-shadow(0 0 0.85rem $green);
      }
    }
    img {
      filter: drop-shadow(0 0 0.75rem rgb(131, 130, 130)) grayscale(50%);
      transition: 0.15s;
    }

    .play-btn {
      width: 100px;
      height: 100px;
      background: radial-gradient($green 60%, rgba(255, 255, 255, 1) 62%);
      border-radius: 50%;
      position: absolute;
      display: block;
      top: 50%;
      left: 50%;
      z-index: 10;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      box-shadow: 0px 0px 25px 3px $green;
    }

    /* triangle */
    .play-btn::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translateX(-40%) translateY(-50%);
      transform: translateX(-40%) translateY(-50%);
      transform-origin: center center;
      width: 0;
      height: 0;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-left: 25px solid #fff;
      z-index: 100;
      -webkit-transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
      transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    /* pulse wave */
    .play-btn:before {
      content: '';
      position: absolute;
      width: 150%;
      height: 150%;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
      -webkit-animation: pulsate1 2s;
      animation: pulsate1 2s;
      -webkit-animation-direction: forwards;
      animation-direction: forwards;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-timing-function: steps;
      animation-timing-function: steps;
      opacity: 1;
      border-radius: 50%;
      border: 5px solid rgba(255, 255, 255, 0.75);
      top: -25%;
      left: -25%;
      background: rgba(198, 16, 0, 0);
    }

    @-webkit-keyframes pulsate1 {
      0% {
        -webkit-transform: scale(0.6);
        transform: scale(0.6);
        opacity: 1;
        box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75),
          0px 0px 25px 10px rgba(255, 255, 255, 0.75);
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0;
        box-shadow: none;
      }
    }

    @keyframes pulsate1 {
      0% {
        -webkit-transform: scale(0.6);
        transform: scale(0.6);
        opacity: 1;
        box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75),
          0px 0px 25px 10px rgba(255, 255, 255, 0.75);
      }
      100% {
        -webkit-transform: scale(1, 1);
        transform: scale(1);
        opacity: 0;
        box-shadow: none;
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
