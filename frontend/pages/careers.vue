<template>
  <main class="careers">
    <section class="heading bg-[#F7F6F3]">
      <div class="inner">
        <div
            class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none text-center mx-auto"
          >
            <h1
              class="text-3xl font-extrabold tracking-normal sm:text-5xl mb-8 urbanist"
            >
              This is Baselime
            </h1>
            <p
              class="text-xl text-darkBlue opacity-50 max-w-xl mx-auto mb-12 roboto"
            >
               We're redefining the future of observability for serverless applications 
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
          <div class="mt-8 text-xl text-darkBlue font-normal leading-8 mr-4">
            View all
            <a
              href="https://baselime.notion.site/Baselime-Careers-c83ec59a57114a98bee1ae927afad421"
              target="_blank"
              class="text-green-500 hover:cursor-pointer base-transition"
              >open roles</a
            >
          </div>
        </div>
        <div class="mt-8 text-darkBlue font-normal leading-8 mr-4">
          No positions available that suit you? Send your expression of interest
          in joining us to
          <a class="text-green-500 hover:cursor-pointer base-transition" href="mailto:careers@baselime.io">careers@baselime.io</a>.
          High-performing teams are made up of people with different
          experiences, characteristics and traits. We welcome everyone to apply.
        </div>
      </div>
    </section>
    <section class="values">
      <h2 class="text-4xl">Our Values</h2>
      <div class="items mt-16">
        <CareersValue
          v-for="(value, index) in values"
          :key="index"
          :value="value"
          class="item"
        >
          {{ value.emoji }}
        </CareersValue>
      </div>
      <div class="mt-8 text-xl text-darkBlue font-normal leading-8 mr-4">
            Ream more about
            <a
              href="https://baselime.notion.site/Our-values-bf1a950edea24c429d95cf633051d4f2"
              target="_blank"
              class="text-green-500 hover:cursor-pointer base-transition"
              >our values</a
            >
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
          emoji: '☄️',
          title: `Be legendary`,
          description: `Differentiate yourself and do something out of the ordinary, unconventional and innovative; Express your personality and do things in such a way that only you can do. Leave a sense of amazement in the people you interact with. Be passionate about your work and strive for greatness (not perfection) every day. Legendary status is attained only when we work, learn and play as a team.`,
        },
        {
          emoji: '💯',
          title: 'Do a few things well',
          description: `Focus on a small number of things at once and deliver them exceptionally well. Consistently strive to exceed expectations and look for ways to improve. Identify the areas that will have the highest impact on our users and customers and focus on those. Trust your teammates to make the right decisions, as they are doing their “few things” extremely well too.`,
        },
        {
          emoji: '🛹',
          title: 'Ship skateboards',
          description: `Ship the minimal lovable version of everything, both within our product and our internal processes. Iterate quickly. Communicate thoroughly when things change, both to our users and internally.`,
        },
        {
          emoji: '🧪',
          title: 'Take initiative',
          description: `Do things without being told or having a clear path to success. Figure things out independently, and push forward when things get tough to achieve our common goals. Spot opportunities where others don't and make them a reality before the rest of the world realises.`,
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
          remuneration: '£60k-£100k + equity',
          url: 'https://baselime.notion.site/Software-Engineer-Full-stack-c6b937dad7594059a7662dbc45e0f88f',
        },
        {
          title: 'Software Engineer (Front-end)',
          location: 'Remote, within the UK',
          remuneration: '£60k-£100k + equity',
          url: 'https://baselime.notion.site/Software-Engineer-Front-end-7bce84e54e30428dacfad803c2932eec',
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
        .image-container {
          width: 100%;
          max-width: 990px;
          margin: 45px auto;

          img {
            border-radius: 0.75rem;
            border-width: 2px;
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }

    &.values {
      padding: 90px 0;

        max-width: 1330px;
        margin: auto;
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
