<template>
  <div>
    <!-- Pricing -->
    <div
      class="py-6 pb-40 bg-gradient-to-b from-white via-[#F7F6F3] to-[#F7F6F3]"
    >
      <div class="mx-auto px-6 max-w-7xl sm:px-6 lg:px-8">
        <div class="space-y-12">
          <div
            class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none text-center mx-auto"
          >
            <h1
              class="text-3xl font-extrabold tracking-wide sm:text-6xl mb-8 urbanist"
            >
              Plans that suit your scale
            </h1>
            <p
              class="text-xl text-darkBlue opacity-50 max-w-xl mx-auto mb-12 roboto"
            >
              Pay for the number of events your systems handle. We give you a
              straightforward pricing, with no hidden fees.
            </p>
          </div>
          <div
            class="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8"
          >
            <div
              :class="tier.background === 'white' ? 'bg-white' : 'bg-darkBlue'"
              class="p-8 rounded-3xl shadow-sm flex flex-col"
              v-for="tier in tiers"
              :key="tier.name"
            >
              <div class="flex-1">
                <h3
                  :class="
                    tier.text === 'white' ? 'text-white' : 'text-darkBlue'
                  "
                  class="text-2xl font-semibold urbanist tracking-wide"
                >
                  {{ tier.name }}
                </h3>
                <p
                  :class="
                    tier.text === 'white' ? 'text-white' : 'text-darkBlue'
                  "
                  class="mt-2 opacity-50 text-base"
                >
                  {{ tier.description }}
                </p>

                <p class="mt-8 mb-4 flex items-baseline">
                  <span
                    :class="
                      tier.text === 'white' ? 'text-white' : 'text-darkBlue'
                    "
                    class="text-4xl font-extrabold tracking-wide urbanist"
                    ><span v-if="tier.price !== 'Let\'s Talk'">$</span
                    >{{ tier.price }}</span
                  >
                  <span
                    v-if="tier.price !== 'Let\'s Talk'"
                    :class="
                      tier.text === 'white' ? 'text-white' : 'text-darkBlue'
                    "
                    class="ml-2 text-sm font-semibold opacity-50"
                    >/month</span
                  >
                </p>

                <div class="mb-12 flex space-x-3">
                  <CustomerIcon
                    v-if="tier.icon === 'customer'"
                    color="#0BB859"
                  />
                  <CustomersIcon
                    v-if="tier.icon === 'customers'"
                    :color="tier.name === 'Team' ? '#317EF1' : '#0BB859'"
                  />
                  <p
                    :class="
                      tier.text === 'white' ? 'text-white' : 'text-darkBlue'
                    "
                    class="text-base"
                  >
                    {{ tier.seats }}
                  </p>
                </div>

                <button
                  @click="joinBeta"
                  :class="
                    tier.text === 'white'
                      ? 'text-white bg-baseBlue border-baseBlue'
                      : 'bg-white text-darkBlue border-darkBlue'
                  "
                  :style="
                    tier.text === 'white'
                      ? 'filter: drop-shadow(4px 4px 14px rgba(4, 104, 255, 0.47));'
                      : ''
                  "
                  class="px-6 py-4 text-base font-medium rounded-2xl border-2 shadow-sm w-full md:w-32 hover:-translate-y-0.5 base-transition"
                >
                  Join Beta
                </button>

                <p
                  :class="
                    tier.text === 'white' ? 'text-white' : 'text-darkBlue'
                  "
                  class="font-bold mt-16"
                >
                  {{ tier.header }}
                </p>

                <!-- Feature list -->
                <ul role="list" class="space-y-6 mt-6">
                  <li
                    class="flex text-center"
                    v-for="feature in tier.features"
                    :key="feature.name"
                  >
                    <div>
                      <svg
                        class="h-5 w-5 text-baseGreen mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span
                      :class="
                        tier.text === 'white' ? 'text-white' : 'text-darkBlue'
                      "
                      class="ml-3 text-left"
                      >{{ feature }}</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="px-6 mt-16">
      <div
        class="rounded-[31px] shadow-xl max-w-4xl mx-auto p-6 bg-white z-20 -mt-40 mb-20"
      >
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none text-left"
        >
          <div class="flex flex-wrap md:flex-nowrap">
            <div class="w-full md:w-1/3">
              <img
                src="@/assets/images/seatfrog-cto.png"
                class="w-96 md:h-64 md:w-64"
              />
            </div>
            <div class="w-full md:w-2/3 px-6">
              <p class="text-darkBlue text-xl mt-4">
                "Baselime is a lifesaver in this space, things are cleaner,
                cheaper and mean time to recover from bugs is down. The time we
                would normally spend on making sure observability is working now
                goes into building features."
              </p>
              <p class="text-darkBlue opacity-50 mt-4 text-lg">Dirk Stewart</p>
              <p class="text-darkBlue opacity-50 mt-2 text-lg">CTO, Seatfrog</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <PricingTable />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EventBus } from '../event-bus'

import PricingTable from '../components/pricing/PricingTable.vue'
import CustomerIcon from '../components/icons/customerIcon.vue'
import CustomersIcon from '../components/icons/customersIcon.vue'

export default Vue.extend({
  data() {
    return {
      tiers: [
        {
          name: 'Free',
          description:
            'Made for solo developers who need an observability solution for their projects.',
          background: 'white',
          text: 'darkBlue',
          price: '0',
          icon: 'customer',
          seats: '3 seats',
          header: 'Free features',
          features: [
            'Unlimited services',
            'Up to 100,000 observability events/month',
            '3-days data retention',
            'Alerts via Email',
          ],
        },
        {
          name: 'Team',
          description:
            'Teams with production workloads, doing less than 100 million events per month',
          background: 'darkBlue',
          text: 'white',
          price: '80',
          icon: 'customers',
          seats: 'Unlimited seats',
          header: 'All Free features, plus',
          features: [
            'Unlimited services',
            '20 million observability events/month',
            '30-days data retention',
            'Alerts via Slack, email, webhook, Lambda SNS',
            'Support response within 24 hours',
          ],
        },
        {
          name: 'Enterprise',
          description:
            'Custom pricing for organisations with more than 100 million events per month.',
          background: 'white',
          text: 'darkBlue',
          price: "Let's Talk",
          icon: 'customers',
          seats: 'Unlimited seats',
          header: 'All Team features, plus',
          features: [
            'Unlimited services',
            'Unlimited observability events/month',
            'Customer data retention',
            'Custom integration for alerts',
            'Support response within 1 hour',
          ],
        },
      ],
    }
  },
  components: {
    PricingTable,
    CustomerIcon,
    CustomersIcon,
  },
  methods: {
    joinBeta: function () {
      EventBus.$emit('display-join-beta-modal')
    },
  },
})
</script>
