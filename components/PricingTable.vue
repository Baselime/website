<template>
  <div class="prcing-table">
    <div class="row">
      <div class="name cell top"></div>
      <div class="cell header" v-for="(plan, i) in plans" :key="i">
        <p v-if="plan.popular">
          <span class="most-popular-tag">MOST POPULAR</span>
        </p>
        <p v-else style="padding: 17px"></p>

        <p class="plan-name">{{ plan.name }}</p>
        <div>
          <div>
            <div class="price">
              <div>
                <div class="starts-at" v-if="plan.isStartsAt">Starts at</div>
                <div class="starts-at" style="height: 1px" v-else></div>
              </div>
              <div v-if="typeof plan.price === 'number'">
                ${{ plan.price }} <span class="per-month">/month</span>
              </div>
              <div v-else class="sales">{{ plan.price }}</div>
            </div>
          </div>
          <div>
            <div class="for">
              {{ plan.for }}
            </div>
          </div>
        </div>
        <primary-button
          :text="'Join Private Beta'"
          @action="displayJoinBetaModal(plan.tier)"
          :event="'open-join-beta-modal'"
          :eventProperties="{ origin: 'pricing-page', tier: plan.tier }"
        />
      </div>
    </div>
    <div class="row desktop-only">
      <div class="name cell divider" style="padding: 0"></div>
      <div
        class="cell divider"
        v-for="(plan, i) in plans"
        :key="i"
        style="padding: 0"
      ></div>
    </div>
    <div v-for="(category, categoryIndex) in planItems" :key="categoryIndex">
      <div class="row">
        <div class="name cell category">{{ category.category }}</div>
        <div
          class="cell divider"
          v-for="(plan, i) in plans"
          :key="i"
          style="padding: 0"
        ></div>
      </div>
      <div
        class="row"
        v-for="(item, index) in planItems[categoryIndex].items"
        :key="index"
      >
        <div class="name cell">
          <span>{{ item.name }}</span>
        </div>
        <div class="value cell" v-for="(plan, i) in plans" :key="i">
          <span class="mobile-plan-name">{{ plan.name }} - </span>
          <div>
            {{ planItems[categoryIndex].items[index].plans[plan.tier] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import planItems from '@/assets/data/plan-items.json'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import { EventBus } from '~/event-bus'

export default Vue.extend({
  components: {
    PrimaryButton,
  },
  props: {
    plans: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      planItems,
    }
  },
  methods: {
    displayJoinBetaModal(tier: number) {
      EventBus.$emit('display-join-beta-modal', { tier })
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.prcing-table {
  width: fit-content;
  block-size: fit-content;
  .row {
    display: flex;

    .cell {
      min-width: 300px;
      border-bottom: 1px solid $e4;
      padding: 10px;

      .most-popular-tag {
        padding: 2px 8px;
        color: $white;
        font-size: 0.6em;
        background-color: $red;
        border-radius: 50px;
        font-weight: bold;
      }
      &.name {
        min-width: 380px;
        opacity: 0.75;
        font-weight: bold;

        span {
          display: inline-block;
          font-size: 1em;
          padding-top: 5px;
        }
        &.category {
          font-size: 1em;
          color: $darkBlue;
          font-weight: bold;
          background: $e4;
          opacity: 2;
        }
      }
      &.value {
        max-width: 300px;
      }
      &.divider {
        padding: 2px 0;
        width: 100%;
        background: $e4 !important;
      }
      .mobile-plan-name {
        display: none;
      }

      &.header {
        color: $darkBlue;
        font-size: 1.2em;
        padding: 15px 15px 45px 15px;
        .plan-name {
          font-size: 1.5em;
          font-weight: bold;
        }
        .price {
          font-size: 2.5em;
          color: $green;
          font-weight: bold;
          .starts-at {
            font-size: 1rem;
            color: $grey;
            height: 0;
            margin-bottom: 15px;
          }
          .per-month {
            font-size: 1.5rem;
            color: $grey;
            display: inline-block;
            margin-left: -10px;
          }
          .sales {
            font-size: 2rem;
            margin: 25px 0 14px 0;
          }
        }

        .for {
          max-width: 250px;
          font-size: 0.8em;
          padding: 10px 0 0 5px;
          margin: 0 0 30px 0;
          opacity: 0.75;
        }
      }
    }
  }

  @media screen and (max-width: 1212px) {
    .row {
      display: block;
      .cell {
        .mobile-plan-name {
          display: inline;
          color: $grey;
        }
      }
    }
  }

  .desktop-only {
    @media screen and (max-width: 1212px) {
      display: none;
    }
  }
}
</style>