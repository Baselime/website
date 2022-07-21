<template>
  <div class="pt-6 bg-white">
    <div>
      <nav
        class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div class="flex items-center flex-1">
          <div class="flex items-center justify-between w-full md:w-auto">
            <router-link to="/">
              <span class="sr-only">Baselime</span>
              <img
                class="h-6 w-auto sm:h-8"
                src="@/assets/images/logo-wide.svg"
                alt=""
              />
            </router-link>
            <div class="-mr-2 flex items-center md:hidden">
              <button
                @click="openNavbar = true"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-baseGreen base-transition"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="hidden md:block md:ml-10 md:space-x-12">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              exact-active-class="opacity-100"
              class="font-semibold text-base text-darkBlue opacity-50 hover:opacity-100 roboto base-transition"
              >{{ item.name }}</router-link
            >
          </div>
        </div>
        <div class="hidden md:block text-right">
          <span class="inline-flex">
            <button
              @click="joinBeta"
              class="inline-flex items-center px-4 py-2 text-base rounded-xl text-white bg-baseGreen hover:-translate-y-0.5 base-transition"
              style="filter: drop-shadow(4px 4px 14px rgba(50, 162, 100, 0.47))"
            >
              Join Beta
            </button>
          </span>
        </div>
      </nav>

      <transition
        enter-active-class="duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="openNavbar"
          focus
          class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div
            class="rounded-xl shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <router-link to="/">
                <img class="h-8 w-auto" src="@/assets/images/logo.svg" alt="" />
              </router-link>
              <div class="-mr-2">
                <button
                  @click="openNavbar = !openNavbar"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-baseGreen base-transition"
                >
                  <span class="sr-only">Close main menu</span>
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3 space-y-1">
              <button
                v-for="item in navigation"
                :key="item.name"
                @click="goTo(item.to)"
                class="block px-3 py-2 rounded-md text-base font-medium text-darkBlue opacity-50 hover:opacity-100 base-transition"
              >
                {{ item.name }}
              </button>
              <button
                @click="joinBeta"
                class="inline-flex items-center px-4 py-2 text-base rounded-lg text-white bg-baseGreen w-full"
              >
                <span class="mx-auto">Join Beta</span>
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { EventBus } from '../event-bus'

export default Vue.extend({
  data() {
    return {
      navigation: [
        { name: 'Docs', to: '/docs' },
        { name: 'About', to: '/about' },
        { name: 'Blog', to: '/blog' },
        { name: 'Pricing', to: '/pricing' },
      ],
      openNavbar: false,
    }
  },
  methods: {
    joinBeta: function () {
      EventBus.$emit('display-join-beta-modal')
    },
    // @ts-ignore
    goTo: function (link) {
      return this.$router.push({ path: link })
    },
  },
})
</script>
