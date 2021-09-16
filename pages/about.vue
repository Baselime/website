<template>
  <main>
    <section class="heading">
      <div class="inner">
        <div class="details">
          <h1>We help your team succeed with serverless</h1>
          <div class="sub-header">
            <p>
              Serverless adoption is growing at an exponential rate, yet the
              tooling around serverless architectures is not evolving as fast.
              It takes hours to resolve incidents or identify issues. Getting a
              deep understanding of production systems in highly distributed,
              event-driven architectures should not be this hard.
            </p>
            <p>
              This is why we build Baselime. Our mission is to help your team
              adopt serverless with the confidence to troubleshoot defects in
              minutes, not hours, through the power of Observability as Code.
            </p>
          </div>
        </div>
        <div class="image-container">
          <img src="@/assets/images/about.jpg" alt="" />
        </div>
      </div>
    </section>

    <section class="team">
      <div class="inner">
        <h2>Our Team</h2>
        <h3>
          We are a team of engineers passionate about making it easier to deeply
          understand serverless architures
        </h3>
        <div class="container">
          <TeamMember
            v-for="(member, i) in members"
            :key="i"
            :member="member"
            class="item"
          />
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
    }

    .image-container {
      max-width: 602px;
      width: 100%;
      img {
        border-radius: 15px;
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
    }
    h3 {
      font-weight: normal;
      font-size: 1.4rem;
    }
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 60px auto 0 auto;
      flex-wrap: wrap;
      .item {
        width: 350px;
        margin: 15px;
        @media screen and (max-width: 550px) {
          width: 100%;
          margin: 15px 0 15px 0;
        }
      }
    }
  }
}
</style>
