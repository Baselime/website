<template>
  <main class="careers">
    <section class="heading">
      <div class="inner">
        <h1>Join the team</h1>
        <p>
          We're defining the future of observability for serverless
          architectures
        </p>
        <div class="image-container">
          <img src="@/assets/images/careers.png" alt="" />
        </div>
      </div>
    </section>
    <section class="values">
      <h2>Our Values</h2>
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
    <section class="perks">
      <div class="inner">
        <h2>Benefits and Perks</h2>
        <div class="items">
          <CareersBenefit
            v-for="(perk, index) in perks"
            :key="index"
            :benefit="perk"
            class="item"
            >{{ perk.emoji }}
          </CareersBenefit>
        </div>
      </div>
    </section>
    <section class="positions">
      <div class="inner">
        <h2>Open Positions</h2>
        <div class="items">
          <CareersPosition
            v-for="(position, index) in positions"
            :key="index"
            :position="position"
            class="item"
          />
        </div>
        <div class="details">
          No positions available that suit you? Send your expression of interest
          in joining us to
          <a href="mailto:careers@baselime.io">careers@baselime.io</a> Great
          teams are made up of people with different experiences,
          characteristics and traits. We welcome everyone to apply.
        </div>
      </div>
    </section>
    <section class="stack">
      <div class="inner">
        <h2>Our Tech Stack</h2>
        <div class="items">
          <img
            class="item"
            src="@/assets/images/stack/ts.png"
            alt="TypeScript"
          />
          <img
            class="item"
            src="@/assets/images/stack/golang.png"
            alt="Golang"
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
import CareersValue from '@/components/CareersValue.vue'
import CareersBenefit from '@/components/CareersBenefit.vue'
import CareersPosition from '@/components/CareersPosition.vue'
import getSiteMetadata from '~/utils/getSiteMetadata'

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
          emoji: '🌍',
          title: `Remote and Flexible working hours`,
          description: `Work from wherever you want, at the times you're most productive. (Must have a permanent UK address)`,
        },
        {
          emoji: '🏖️',
          title: `Unlimited paid time-off`,
          description: `Take as much time off as you need.`,
        },
        {
          emoji: '🎓',
          title: `Learning & development opportunities`,
          description: `High-performing teams make great products. We make sure you have the support you need to stay passionate, healthy, and constantly grow.`,
        },
        {
          emoji: '💻',
          title: `The right tools for the job`,
          description: `You can't do the very best work without the right kit, so you get the latest gear to do what you're awesome at.`,
        },
      ],
      positions: [
        {
          title: 'Software Engineer',
          location: 'Remote within the UK',
          remuneration: '£50k-£60k + equity',
          url: 'https://theorg.com/org/baselime/jobs/software-engineer-46feda10',
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
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.careers {
  background: $mainBackground;
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
    }

    &.positions {
      background: $paper;
      .inner {
        max-width: 900px;
        .items {
          margin-top: 30px;
          .item {
            margin: 15px 0;
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
          max-height: 95px;
          width: auto;
          height: auto;
          margin: 30px 30px;
        }
      }
    }
  }
}
</style>