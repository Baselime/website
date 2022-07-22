<template>
  <form class="mt-4 sm:flex sm:max-w-md" @submit.prevent="subscribe">
    <label for="email-address" class="sr-only">Email address</label>
    <input
      type="email"
      name="email-address"
      id="email-address"
      autocomplete="email"
      required
      v-model="email"
      class="block w-full shadow-sm sm:text-sm bg-white bg-opacity-10 rounded-2xl py-4 px-4 border-none placeholder-white"
      placeholder="Email"
    />
    <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
      <button
        type="submit"
        class="w-full bg-baseGreen border border-transparent rounded-xl py-3 md:py-2 px-6 h-full flex items-center justify-center text-base font-medium text-white hover:-translate-y-0.5 base-transition"
        style="filter: drop-shadow(4px 4px 14px rgba(50, 161, 100, 0.47))"
      >
        <div class="flex justify-center items-center whitespace-nowrap">
          <Spinner class="w-4 h-4 text-white mr-2" v-if="loading" />
          Subscribe
        </div>
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  data() {
    return {
      email: '',
      loading: false,
    }
  },
  methods: {
    subscribe: async function () {
      if (this.loading) return
      try {
        this.loading = true
        await axios.post('https://api.baselime.io/website/newsletter', {
          email: this.email,
        })
        this.loading = false
        // return toast.success('Thanks for subscribing to our newsletter.')
      } catch (e) {
        this.loading = false
        // return toast.error(
        //   'Whoops there was an error creating your subscription. Please retry.'
        // )
      }
    },
  },
})
</script>
