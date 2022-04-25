<template>
  <main>
    <section class="heading">
      <div class="inner">
        <div class="details">
          <h1>About us</h1>
          <div class="sub-header">
            <p></p>
            <p>
              Serverless adoption is growing at an exponential rate, yet the
              tooling around serverless is not evolving as fast.
              The software we rely on everyday is getting more complex, more
              fragile and less understandable, even by the brilliant developers
              who built it.
            </p>
            <p>
              We at Baselime are re-imagining how developers build and maintain
              their serverless applications. We believe in empowering every
              software engineering team to gain a deeper understanding of their
              systems such that they can troubleshoot and resolve defects in
              minutes, not hours.
            </p>
          </div>
          <div class="hiring">We're remote first, and <a
              href="https://baselime.notion.site/Baselime-Careers-c83ec59a57114a98bee1ae927afad421">we are hiring!</a>
          </div>
        </div>
        <div class="image-container">
          <img src="@/assets/images/about.jpg" alt="" />
        </div>
      </div>
    </section>

    <section class="team">
      <div class="inner">
        <h2>Meet the Team</h2>
        <h3>
          We are a team of engineers passionate about making it easier to deeply
          understand serverless architures
        </h3>
        <div class="container">
          <TeamMember v-for="(member, i) in members" :key="i" :member="member" class="item" />
        </div>
        <div class="hiring">
          <NuxtLink to="/careers" class="item"> Join the Baselime Team </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import TeamMember from '@/components/TeamMember.vue'
import getSiteMetadata from '~/utils/getSiteMetadata'
export default Vue.extend({
  components: {
    TeamMember,
  },
  data() {
    return {
      members: [
        {
          name: 'Boris Tane',
          position: 'Founder and CEO',
          image: '/images/boris.jpg',
          linkedin: 'https://www.linkedin.com/in/boristane/',
          twitter: 'https://twitter.com/BorisTane',
        },
        {
          name: 'Max Diamond',
          position: 'Software Engineer',
          image: '/images/max.jpeg',
          linkedin: 'https://www.linkedin.com/in/max-diamond-09ba9719a/',
          twitter: 'https://twitter.com/Dmdboi',
        },
      ],
    }
  },
  head() {
    const metaData = {
      title: `Baselime - About`,
      description: `About Baselime`,
      url: `https://baselime.io/about/`,
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

section {
  .inner {
    width: 100%;
    max-width: 1272px;
    margin: auto;
    padding: 120px 30px;
    display: flex;

    @media screen and (max-width: 890px) {
      flex-direction: column;
    }

    p {
      margin: 30px 0 5px 0;
    }

    .details {
      max-width: 550px;
      margin: 0 60px 0 0;

      @media screen and (max-width: 890px) {
        max-width: unset;
        margin: 0 0 30px 0;
      }

      .hiring {
        margin-top: 30px;
        font-weight: bold;

        a {
          color: $green;
          border-bottom: 2px solid transparent;
          transition: all 0.15s;

          &:hover {
            border-bottom: 2px solid $green;
          }
        }
      }
    }

    .image-container {
      max-width: 602px;
      width: 100%;

      img {
        border-radius: 4px;
        position: relative;
        height: 550px;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}

.heading {
  background: $mainBackground;
}

.team {
  background: $white;

  .inner {
    text-align: center;
    display: block;

    h2 {
      margin: 0 0 15px 0;
      line-height: 2.4rem;
    }

    h3 {
      font-weight: normal;
      font-size: 1.4rem;
      line-height: 1.8rem;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 60px auto 0 auto;
      flex-wrap: wrap;

      .item {
        width: 192px;
        margin: 15px;

        @media screen and (max-width: 550px) {
          width: 100%;
          margin: 15px 0 15px 0;
        }
      }
    }

    .hiring {
      margin-top: 30px;

      .item {
        color: $green;
        border-bottom: 2px solid transparent;
        transition: 0.15s;
        font-weight: bold;
        font-size: 1.2rem;

        &:hover {
          border-bottom: 2px solid $green;
        }
      }
    }
  }
}
</style>
