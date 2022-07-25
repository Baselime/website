<template>
  <div class="">
    <div class="max-w-7xl mx-auto py-16 sm:py-24 sm:px-6 lg:px-8">
      <div class="md:block">
        <table class="w-full h-px table-fixed">
          <caption class="sr-only">
            Pricing plan comparison
          </caption>
          <thead>
            <tr>
              <th class="px-6 text-sm font-medium text-gray-900 text-left hidden md:block" scope="col">
                <span class="sr-only">Feature by</span>
              </th>
              <th class="w-1/4 px-6 text-xl md:text-3xl leading-6 font-bold text-darkBlue text-center urbanist"
                scope="col">
                <div class="text-darkBlue mb-2 opacity-50 text-sm hidden md:block">
                  $0/mo
                </div>
                <div>
                  Free
                </div>
              </th>
              <th class="w-1/4 px-6 text-xl md:text-3xl leading-6 font-bold text-darkBlue text-center urbanist"
                scope="col">
                <div class="text-darkBlue mb-2 opacity-50 text-sm hidden md:block">
                  Starting at $80/mo
                </div>
                <div>
                  Team
                </div>
              </th>
              <th class="w-1/4 px-6 text-xl md:text-3xl leading-6 font-bold text-darkBlue text-center urbanist"
                scope="col">
                <div class="text-darkBlue mb-2 opacity-50 text-sm hidden md:block">
                  Custom Pricing
                </div>
                <div>
                  Enterprise
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="">
            <tr class="bg-white">
              <th class="px-6 text-sm font-medium text-gray-900 text-left align-top hidden md:block" scope="row"></th>
              <td class="h-full px-6 align-top">
                <div class="relative h-full table mx-auto">
                  <button @click="joinBeta"
                    class="my-6 md:px-6 py-3 text-sm md:text-base whitespace-nowrap font-medium rounded-2xl text-darkBlue bg-white border-2 border-darkBlue shadow-sm w-24 sm:w-32 lg:w-48 hover:-translate-y-0.5 base-transition">
                    Join Beta
                  </button>
                </div>
              </td>
              <td class="h-full px-6 align-top">
                <div class="relative h-full table mx-auto">
                  <button @click="joinBeta" style="
                  filter: drop-shadow(4px 4px 14px rgba(50, 162, 100, 0.47));
                " class="my-6 md:px-6 py-3 text-sm md:text-base whitespace-nowrap font-medium rounded-2xl text-white bg-baseGreen border-2 border-baseGreen shadow-sm w-24 sm:w-32 lg:w-48 hover:-translate-y-0.5 base-transition">
                    Join Beta
                  </button>
                </div>
              </td>
              <td class="h-full px-6 align-top">
                <div class="relative h-full table mx-auto">
                  <button @click="joinBeta"
                    class="my-6 md:px-6 py-3 text-sm md:text-base whitespace-nowrap font-medium rounded-2xl text-darkBlue bg-white border-2 border-darkBlue shadow-sm w-24 sm:w-32 lg:w-48 hover:-translate-y-0.5 base-transition">
                    Contact Us
                  </button>
                </div>
              </td>
            </tr>
            <template v-for="section in sections">
              <tr class="">
                <th class="bg-white pl-6 text-xl md:text-3xl text-darkBlue text-left pt-4 pb-8 urbanist font-bold"
                  colspan="4" scope="colgroup">
                  {{ section.name }}
                </th>
              </tr>
              <tr v-for="feature in section.features" :key="feature.name" class="odd:bg-[#F7F6F3] text-center">
                <th class="py-5 px-6 text-sm md:text-base font-semibold leading-6 text-darkBlue text-left rounded-l-lg"
                  scope="row">
                  {{ feature.name }}
                </th>
                <td v-for="tier in tiers" :key="tier.name" class="py-5 px-6">
                  <span v-if="typeof feature.tiers[tier.name] === 'string'"
                    class="block text-sm text-darkBlue opacity-80">{{ feature.tiers[tier.name] }}</span>
                  <div>
                    <svg v-if="feature.tiers[tier.name] === true" class="h-5 w-5 text-baseGreen mx-auto" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <svg v-if="feature.tiers[tier.name] === false" class="h-5 w-5 text-darkBlue opacity-30 mx-auto"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                      </path>
                    </svg>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EventBus } from '../../event-bus'

export default Vue.extend({
  data() {
    return {
      tiers: [
        { name: 'Free' },
        {
          name: 'Team',
        },
        {
          name: 'Enterprise',
        },
      ],
      sections: [
        {
          name: 'Features',
          features: [
            {
              name: 'Team Members',
              tiers: { Free: '3', Team: 'Unlimited', Enterprise: 'Unlimited' },
            },
            {
              name: 'Number of services',
              tiers: {
                Free: 'Unlimited',
                Team: 'Unlimited',
                Enterprise: 'Unlimited',
              },
            },
            {
              name: 'Observability events (monthly)',
              tiers: {
                Free: '100,000',
                Team: '20 million',
                Enterprise: 'Unlimited',
              },
            },
            {
              name: 'Additional observability events',
              tiers: {
                Free: false,
                Team: '$8/million/month',
                Enterprise: 'Contact Us',
              },
            },
            {
              name: 'Data Retention',
              tiers: {
                Free: '3 Days',
                Team: '30 Days',
                Enterprise: 'Contact Us',
              },
            },
            {
              name: 'Service Level Objectives',
              tiers: {
                Free: false,
                Team: false,
                Enterprise: true,
              },
            },
            {
              name: 'Alerts Destinations',
              tiers: {
                Free: 'Email',
                Team: 'Slack, email, webhook, Lambda, SNS',
                Enterprise: 'All',
              },
            },
            {
              name: 'Single sign-on (SSO)',
              tiers: {
                Free: false,
                Team: false,
                Enterprise: true,
              },
            },
          ],
        },
        {
          name: 'Support',
          features: [
            {
              name: 'Technical support',
              tiers: {
                Free: 'Slack community',
                Team: 'Chat and Email',
                Enterprise:
                  'Priority chat and email support, private organisation Slack channel',
              },
            },
            {
              name: 'Support response time',
              tiers: {
                Free: false,
                Team: 'Within 24 hours',
                Enterprise: 'Within 1 hour',
              },
            },
            {
              name: 'Dedicated success manager',
              tiers: { Free: false, Team: false, Enterprise: true },
            },
          ],
        },
      ],
    }
  },
  methods: {
    joinBeta: function () {
      EventBus.$emit('display-join-beta-modal')
    },
  },
})
</script>
