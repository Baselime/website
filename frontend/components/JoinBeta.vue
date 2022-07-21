<template>
  <form class="grid grid-cols-6 gap-6 px-10" @submit.prevent="joinBeta">
    <div class="col-span-6 sm:col-span-3">
      <input
        type="text"
        name="first-name"
        id="first-name"
        autocomplete="given-name"
        placeholder="First name"
        v-model="forename"
        class="mt-1 block w-full shadow-sm sm:text-sm bg-white bg-opacity-10 rounded-xl py-4 px-4 border-none placeholder-white"
      />
    </div>

    <div class="col-span-6 sm:col-span-3">
      <input
        type="text"
        name="last-name"
        id="last-name"
        autocomplete="family-name"
        placeholder="Last name"
        v-model="surname"
        class="mt-1 block w-full shadow-sm sm:text-sm bg-white bg-opacity-10 rounded-xl py-4 px-4 border-none placeholder-white"
      />
    </div>

    <div class="col-span-6">
      <input
        type="text"
        name="company"
        id="company"
        placeholder="Company Name"
        v-model="company"
        class="mt-1 block w-full shadow-sm sm:text-sm bg-white bg-opacity-10 rounded-xl py-4 px-4 border-none placeholder-white"
      />
    </div>

    <div class="col-span-6">
      <input
        type="text"
        name="email-address"
        id="email-address"
        autocomplete="email"
        placeholder="Email"
        v-model="email"
        class="mt-1 block w-full shadow-sm sm:text-sm bg-white bg-opacity-10 rounded-xl py-4 px-4 border-none placeholder-white"
      />
    </div>
    <div class="col-span-6">
      <button
        type="submit"
        class="px-6 py-3 border-2 border-baseGreen text-base font-medium rounded-xl text-white bg-baseGreen shadow-md w-full shadow-green-700 hover:-translate-y-0.5 base-transition"
      >
        <div class="relative items-center text-center">
          <Spinner
            class="absolute top-0 mt-0.5 w-6 h-6 text-white mr-2"
            v-if="loading"
          />
          <span class="text-center">Join Private Beta</span>
        </div>
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { EventBus } from '../event-bus'

export default Vue.extend({
  data() {
    return {
      forename: '',
      surname: '',
      company: '',
      email: '',
      loading: false,
    }
  },
  methods: {
    joinBeta: async function () {
      if (this.loading) return
      try {
        const body = {
          forename: this.forename,
          surname: this.surname,
          company: this.company,
          email: this.email,
        }
        this.loading = true
        await axios.post('https://api.baselime.io/website/signup', body)
        this.loading = false

        EventBus.$emit('dialog', {
          id: 'join-beta-error',
          title: 'Success',
          message:
            "Thanks for joining our private beta. We will be in touch shortly to introduce you to what we've been working on.",
        })
      } catch (e) {
        this.loading = false

        EventBus.$emit('dialog', {
          id: 'join-beta-error',
          title: 'Error',
          message:
            'Whoops there was an error signing you up for our private beta. Please retry.',
        })
      }
    },
  },
})
</script>
