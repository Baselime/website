<template>
  <footer class="bg-[#040906]" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-2 xl:gap-8">
        <div class="col-span-2 md:col-span-1">
          <img src="@/assets/images/logo-wide-2.svg" class="w-48" />
          <a href="https://github.com/Baselime/cli" target="_blank"
            class="mt-4 w-48 border-2 border-white rounded-xl py-2 px-2 flex items-center justify-center text-base font-medium text-white hover:-translate-y-0.5 base-transition">
            <img src="@/assets/images/github.png" class="w-6 mr-2" />
            Star us on Github
          </a>
        </div>

        <div class="mt-8 xl:mt-0">
          <h3 class="text-lg font-bold leading-7 text-white">
            We ship a lot, don't miss a thing.
          </h3>
          <newsletter-form />
        </div>


      </div>
      <div class="mt-8 xl:mt-16">
        <div class="block grid-cols-4 gap-8 xl:col-span-2 md:grid">
          <div>
            <h3 class="text-lg font-bold leading-7 text-white">Overview</h3>
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="item in navigation.overview" :key="item.name">
                <NuxtLink :to="item.to"
                  class="text-base text-white opacity-50 hover:opacity-100 hover:cursor-pointer base-transition">
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-bold leading-7 text-white mt-8 md:mt-0">
              Company
            </h3>
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="item in navigation.company" :key="item.name">
                <NuxtLink :to="item.to"
                  class="text-base text-white opacity-50 hover:opacity-100 hover:cursor-pointer base-transition">
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-bold leading-7 text-white mt-8 md:mt-0">
              Developers
            </h3>
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="item in navigation.developers" :key="item.name">
                <a :href="item.to" v-if="item.absolute"
                  class="text-base text-white opacity-50 hover:opacity-100 hover:cursor-pointer base-transition">
                  {{ item.name }}
                </a>
                <NuxtLink :to="item.to" v-else
                  class="text-base text-white opacity-50 hover:opacity-100 hover:cursor-pointer base-transition">
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 md:flex md:items-center md:justify-between">
        <div class="flex space-x-6 md:order-2">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href"
            class="text-white opacity-50 hover:opacity-100 base-transition">
            <span class="sr-only">{{ item.name }}</span>
            <img :src="imgSrc(item.icon)" class="w-6" />
          </a>
        </div>
        <div class="md:order-1 inline-flex">
          <p class="mt-8 text-sm text-white opacity-50 md:mt-0">
            &copy; {{ year }} Baselime. All rights reserved.
          </p>
          <div class="mt-8 md:mt-0 md:ml-16 flex whitespace-nowrap md:inline-flex">
            <span class="visible md:invisible mr-4">|</span>
            <NuxtLink to="/privacy" class="text-sm mr-4 text-white opacity-50 hover:opacity-100 base-transition">Privacy
              Policy</NuxtLink>
            <span class="">|</span>
            <NuxtLink to="/terms" class="text-sm ml-4 text-white opacity-50 hover:opacity-100 base-transition">Terms of
              Service</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import NewsletterForm from '../components/NewsletterForm.vue'

export default Vue.extend({
  data() {
    return {
      navigation: {
        overview: [
          {
            name: 'Why Observability as Code?',
            to: '/blog/why-observability-as-code',
          },
        ],
        company: [
          { name: 'About', to: '/about' },
          { name: 'Blog', to: '/blog' },
          { name: 'Careers', to: '/careers' },
          { name: 'Pricing', to: '/pricing' },
        ],
        developers: [
          {
            name: 'Documentation',
            to: 'https://docs.baselime.io',
            absolute: true,
          },
        ],
        social: [
          {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/baselime',
            icon: 'linkedIn.png',
          },
          {
            name: 'Twitter',
            href: 'https://twitter.com/baselimeHQ',
            icon: 'twitter.png',
          },
          {
            name: 'GitHub',
            href: 'https://github.com/baselime',
            icon: 'github.png',
          },
        ],
      },
    }
  },
  components: {
    NewsletterForm,
  },
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
  methods: {
    imgSrc(src: string): string | null {
      try {
        console.log()
        // @ts-ignore
        return require(`@/assets/images/${src}`)
      } catch (error) {
        console.log(error)
        return null
      }
    },
  },
})
</script>
