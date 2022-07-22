<template>
  <main class="careers">
    <section class="heading">
      <div class="inner">
        <div class="details">
          <h1>This is Baselime</h1>
          <p class="sub-header">
            We're redefining the future of observability for serverless
            applications
          </p>
        </div>
        <div class="image-container">
          <img src="@/assets/images/careers.png" alt="" />
        </div>
      </div>
    </section>
    <section class="perks">
      <div class="inner">
        <h2 class="text-4xl">Why Baselime?</h2>
        <div class="items">
          <CareersBenefit
            v-for="(perk, index) in perks"
            :key="index"
            :benefit="perk"
            class="item"
            >{{ perk.emoji }}
          </CareersBenefit>
        </div>
        <div class="handbook">
          <div class="pb-4">
            To give you a feel of what it's like to work at Baselime, we've
            open-source our company handbook.
          </div>
          <div class="button-container">
            <button
              @click="
                openUrl(
                  'https://baselime.notion.site/Baselime-Handbook-66d1511e134e4523b3a192fc2b4a6169'
                )
              "
              type="submit"
              class="px-6 py-3 border-2 border-baseGreen text-base font-medium rounded-xl text-white bg-baseGreen shadow-md w-full shadow-green-700 hover:-translate-y-0.5 base-transition"
            >
              Read the handbook
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="positions">
      <div class="inner">
        <h2 class="text-4xl">Our open roles</h2>
        <div class="items">
          <CareersPosition
            v-for="(position, index) in positions"
            :key="index"
            :position="position"
            class="item"
          />
          <div class="all mt-8">
            View all
            <a
              href="https://baselime.notion.site/Baselime-Careers-c83ec59a57114a98bee1ae927afad421"
              target="_blank"
              >open roles</a
            >
          </div>
        </div>
        <div class="details">
          No positions available that suit you? Send your expression of interest
          in joining us to
          <a href="mailto:careers@baselime.io">careers@baselime.io</a>.
          High-performing teams are made up of people with different
          experiences, characteristics and traits. We welcome everyone to apply.
        </div>
      </div>
    </section>
    <section class="values">
      <h2 class="text-4xl">Our Values</h2>
      <div class="items">
        <CareersValue
          v-for="(value, index) in values"
          :key="index"
          :value="value"
          class="item"
        >
          {{ value.emoji }}
        </CareersValue>
      </div>
    </section>
    <section class="stack">
      <div class="inner">
        <h2 class="text-4xl">Our Tech Stack</h2>
        <div class="items">
          <img
            class="item"
            src="@/assets/images/stack/ts.png"
            alt="TypeScript"
          />
          <img class="item" src="@/assets/images/stack/aws.png" alt="AWS" />
          <img
            class="item"
            src="@/assets/images/stack/docker.png"
            alt="Docker"
          />
          <img class="item" src="@/assets/images/stack/vue.png" alt="Vue" />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import CareersValue from '../components/CareersValue.vue'
import CareersBenefit from '../components/CareersBenefit.vue'
import CareersPosition from '../components/CareersPosition.vue'
import getSiteMetadata from '../utils/getSiteMetadata'

export default Vue.extend({
  data() {
    return {
      values: [
        {
          emoji: '💡',
          title: `We're Curious`,
          description: `We are always learning and exploring, asking questions and diving deep to understand things beyond the surface level. We're curious about new possibilities, both in our respective areas of expertise and outside of them.`,
        },
        {
          emoji: '🎯',
          title: 'Customers are the focus',
          description: `They are the only ones who know anything about what we are doing. We are helping them solve problems they live through every day. Everything we do should ultimately have a positive impact on our customers.`,
        },
        {
          emoji: '💨',
          title: 'Speed wins',
          description: `No matter what we do, we do it fast. Making decisions, responding to customers, building our product, shipping features, etc... And we are always looking at ways to do things even faster.`,
        },
        {
          emoji: '💯',
          title: 'Iteration wins',
          description: `Good now is always better than great or perfect tomorrow. When faced with a challenge, we ideate, build and ship a good solution first, get feedback then iterate over time to improve upon it.`,
        },
        {
          emoji: '💬',
          title: 'No bullshit',
          description: `We speak our minds in the most straightforward way possible. We avoid assumptions, speculations and exaggerations which make it harder for everyone to understand anything and to collaborate.`,
        },
        {
          emoji: '🚧',
          title: `In progress doesn't exist`,
          description: `It's either done or not done. Once it's done, it should be in the hands of customers. We have the least amount of "work in progress". We split our work into small items and whenever we reach a satisfactory state on an item, it's completed.`,
        },
        {
          emoji: '🎉',
          title: 'We play together',
          description: `We are innovators, we must be having fun in the process. We are serious without taking ourselves too seriously. We have interests outside of work that we share and are proud of.`,
        },
        {
          emoji: '💾',
          title: 'We disagree and commit',
          description: `We all have strong opinions. Each and every one of us can and should be challenged. We have difficult conversations often, and we do not compromise for social cohesion. However, once a decision is made, we all commit and align behind it.`,
        },
      ],
      perks: [
        {
          emoji: '💻',
          title: `Work on a game-changing problem`,
          description: `We're solving one of the most exciting problems in cloud computing`,
          url: 'https://baselime.notion.site/Our-mission-fdc43b709676412084f3958765bde4e6',
          cta: 'More on our mission',
        },
        {
          emoji: '🏀',
          title: `Join a pro sports team`,
          description: `Be part of our ambitious and high-performing team`,
          url: 'https://baselime.notion.site/We-re-a-pro-sports-team-ade532e1988c46fc925f5849d0e85283',
          cta: 'More on our culture',
        },
        {
          emoji: '🏖️',
          title: `Get unlimited paid time-off`,
          description: `Take as much time off as you need, yes you read that right`,
          url: 'https://baselime.notion.site/Time-off-f7cc2a249ef84499abe3c2971cf2be49',
          cta: 'More on time-off',
        },
        {
          emoji: '🌍',
          title: `Work from wherever`,
          description: `Work from wherever you want, at the times you're most productive`,
          url: 'https://baselime.notion.site/Remote-culture-96702000ae7d43c3b487d2648e72d82f',
          cta: 'More on remote work',
        },
        {
          emoji: '🌍',
          title: `Join the async revolution`,
          description: `You own your calendar, we work asynchronously by default`,
          url: 'https://baselime.notion.site/Async-culture-0e8613f45bbe45db9899a419e2ee2df9',
          cta: 'More on async',
        },
        {
          emoji: '🌱',
          title: `Keep on growing`,
          description: `You're free to do your best work and learn on the job`,
          url: 'https://baselime.notion.site/Freedom-and-accountability-2949f2374a1b44169369fa47d89132e5',
          cta: 'More on freedom and accuntability',
        },
      ],
      positions: [
        {
          title: 'Software Engineer (Full-stack)',
          location: 'Remote, within the UK',
          remuneration: '£60k-£80k + equity',
          url: 'https://baselime.notion.site/Software-Engineer-Full-stack-c6b937dad7594059a7662dbc45e0f88f',
        },
        {
          title: 'Software Engineer (Front-end)',
          location: 'Remote, within the UK',
          remuneration: '£60k-£80k + equity',
          url: 'https://baselime.notion.site/Software-Engineer-Front-end-7bce84e54e30428dacfad803c2932eec',
        },
        {
          title: 'Product Designer',
          location: 'Remote, within the UK',
          remuneration: '£40k-£50k + equity',
          url: 'https://baselime.notion.site/Product-Designer-728ad45f0cef4c5c9e5aade0d12abed9',
        },
        {
          title: 'Product Manager',
          location: 'Remote, within the UK',
          remuneration: '£60k-£70k + equity',
          url: 'https://baselime.notion.site/Product-Manager-bd4b519e15384f93857e950a6c5e200b',
        },
      ],
    }
  },
  components: {
    CareersValue,
    CareersBenefit,
    CareersPosition,
  },
  head() {
    const metaData = {
      title: `Join the team - Baselime`,
      description: `Careers at Baselime`,
      url: `https://baselime.io/careers/`,
    }
    const meta = getSiteMetadata(metaData)
    return {
      title: metaData.title,
      meta: [...meta],
    }
  },
  methods: {
    openUrl(url: string) {
      window.open(url)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.careers {
  background: white;

  section {
    text-align: center;

    .inner {
      padding: 120px 30px;
      width: 100%;
      max-width: 1272px;
      margin: auto;
      text-align: center;

      @media screen and (max-width: 890px) {
        padding: 120px 30px;
      }
    }

    &.heading {
      .inner {
        padding-bottom: 90px;

        .details {
          max-width: 640px;
          margin: auto;

          h1 {
            font-size: 4.2rem;

            @media screen and (max-width: 550px) {
              font-size: 3.2rem;
            }
          }

          .sub-header {
            margin: 30px 0;
            font-weight: bold;
            opacity: 0.75;
          }
        }

        .image-container {
          width: 100%;
          max-width: 990px;
          margin: 45px auto;

          img {
            border-radius: 4px;
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }

    &.values {
      padding: 90px 0;

      .items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 1330px;
        margin: auto;

        .item {
          width: 400px;
          margin: 15px;
        }
      }
    }

    &.perks {
      background: $darkBlue;
      color: $white;

      .items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: auto;

        .item {
          width: 500px;
          margin: 15px;
        }
      }

      .handbook {
        max-width: 600px;
        margin: 60px auto 0px auto;

        div {
          margin: 15px 0;
        }

        .button-container {
          width: 300px;
          margin: auto;
        }
      }
    }

    &.positions {
      background: $paper;

      .inner {
        .items {
          margin-top: 30px;

          .item {
            margin: 15px 0;
          }
        }

        .all {
          a {
            color: $green;
            border-bottom: 2px solid transparent;
            transition: all 0.15s;

            &:hover {
              border-bottom: 2px $green solid;
            }
          }
        }

        .details {
          margin: 30px 0 0 0;

          a {
            color: $green;
            border-bottom: 2px solid transparent;
            transition: 0.15s;

            &:hover {
              border-bottom: 2px solid $green;
            }
          }
        }
      }
    }

    &.stack {
      .items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: auto;
        margin-top: 60px;

        .item {
          display: block;
          max-width: 230px;
          max-height: 60px;
          width: auto;
          height: auto;
          margin: 30px 30px;
        }
      }
    }
  }
}
</style>
