<template>
  <div id="terms">
    <section id="heading">
      <h1>Baselime Refund Policy</h1>
      <p class="sub-header">Effective date: July 28, 2022</p>
    </section>

    <section>
      <h2>Refund Policy</h2>
      <p>
        Baselime offers its service to customers under a 14-day money-back guarantee. Our 14-day money-back guarantee
        begins immediately upon account activation. The 14-day money-back guarantee only applies to new customers and
        does not apply to existing customers that have a subscription plan.
      </p>
    </section>

    <section>
      <p>
        You can cancel your subscription at any time by contacting us at <a
          href="mailto:refunds@baselime.io">refunds@baselime.io</a>. You won’t be charged again,
        but you will still have access to your account until the end of that billing period.
      </p>
    </section>

    <section>
      <p>
        And if, for any reason, you're unhappy with Baselime, please let us know at <a
          href="mailto:support@baselime.io">support@baselime.io</a> - we'd love to hear
        your feedback, and will be happy to work with you to create the best experience possible.
      </p>
    </section>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import getSiteMetadata from '~/utils/getSiteMetadata'

export default Vue.extend({
  components: {},
  data() {
    return {}
  },
  head() {
    const metaData = {
      title: `Baselime - Refund Policy`,
      description: `Refund Policy Baselime`,
      url: `https://baselime.io/refunds/`,
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

#terms {
  margin-top: 180px;

  section {
    max-width: 1212px;
    margin: 0 auto;
    padding: 15px 60px;

    @media screen and (max-width: 550px) {
      padding: 5px 15px;
    }
  }

  h1 {
    text-align: center;
  }

  h2 {
    margin: 30px 0;
  }

  h3 {
    margin: 15px 0;
  }

  .sub-header {
    font-size: 1.2em;
    margin: 30px auto 60px auto;
    padding: 0 30px;
    text-align: center;

    @media screen and (max-width: 742px) {
      font-size: 1.3em;
      margin: 30px auto 30px auto;
    }

    @media screen and (max-width: 550px) {
      font-size: 1.1em;
    }
  }
}
</style>