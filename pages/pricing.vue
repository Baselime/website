<template>
  <main class="pricing">
    <section class="heading">
      <div class="inner">
        <h1>Simple pricing that scales with your serverless architecure</h1>
      </div>
    </section>
    <section class="steps">
      <div class="inner">
        <Step v-for="(step, i) in steps" :key="i" :step="step" class="item" />
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
      steps: [
        {
          value: 1,
          title: 'No BS pricing limits',
          description:
            'No per service, per account or per seat pricing. Pay for the number of transactions your systems handle.',
        },
        {
          value: 2,
          title: 'No hidden fees',
          description:
            "Your cloud bill is already complex enough, you don't need more accounting nightmares. We give you a straightforward pricing, with no hidden fees. We're commited to transparency in pricing.",
        },
        {
          value: 3,
          title: 'Scale with your architecture',
          description:
            'Start for free when you have less than 100,000 transactions per month, and linearly grow as your architecture and userbase grows.',
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
    }

    &.heading {
      .inner {
        padding: 60px 30px 120px 30px;
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