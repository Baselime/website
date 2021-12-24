<template>
  <main class="pricing">
    <section class="heading">
      <div class="inner">
        <h1>Plans that suit your scale</h1>
        <p>
          No per service, per account or per seat pricing. Pay for the number of
          transactions your systems handle.
        </p>
        <p>
          Your cloud bill is already complex enough, you don't need more
          accounting nightmares. We give you a straightforward pricing, with no
          hidden fees. We're commited to transparency in pricing.
        </p>
      </div>
    </section>

    <section class="pricing-table">
      <PricingTable :plans="plans" style="margin: auto" />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import PricingTable from '@/components/PricingTable.vue'
export default Vue.extend({
  data() {
    return {
      plans: [
        {
          name: 'Free',
          tier: 0,
          for: 'Made for solo developers who need an observability solution for their projects.',
          price: 0,
        },
        {
          name: 'Team',
          tier: 1,
          for: 'Ideal for teams with production workloads, doing less than 10 million transactions per month.',
          price: 80,
          popular: true,
          isStartsAt: true,
        },
        {
          name: 'Enterprise',
          tier: 2,
          for: 'Custom pricing for organisations w/ more than 10 million transactions per month.',
          price: 'Contact Sales',
        },
      ],
    }
  },
  components: {
    PricingTable,
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.pricing {
  background: $mainBackground;
  padding: 60px 0;
  section {
    .inner {
      padding: 120px 30px;
      width: 100%;
      max-width: 1272px;
      margin: auto;
      text-align: center;
    }

    &.heading {
      .inner {
        padding: 60px 180px;
        @media screen and (max-width: 890px) {
          padding: 60px 30px;
        }
      }
    }

    &.steps {
      background: $lightBlue;
      .inner {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .item {
          width: 350px;
          margin: 15px;
        }
      }
    }

    &.pricing-table {
      padding: 120px 0;
    }
  }
}
</style>