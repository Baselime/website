<template>
  <footer class="bg-[#040906]" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="col-span-2 md:col-span-1">
            <img src="@/assets/images/logo-wide-2.svg" class="w-48" />
            <a
              href="https://github.com/Baselime/cli"
              target="_blank"
              class="mt-4 w-48 border-2 border-white rounded-xl py-2 px-2 flex items-center justify-center text-base font-medium text-white hover:-translate-y-0.5 base-transition"
            >
              <img src="@/assets/images/github.png" class="w-6 mr-2" />
              Star us on Github
            </a>
          </div>
          <div class="">
            <div>
              <h3 class="text-lg font-bold leading-7 text-white">
                Overview
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.overview" :key="item.name">
                  <NuxtLink
                    :to="item.to"
                    class="text-base text-white opacity-50 hover:opacity-100 hover:cursor-pointer base-transition"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mt-12">
              <h3 class="text-lg font-bold leading-7 text-white">
                Company
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <NuxtLink
                    :to="item.to"
                    class="text-base text-white opacity-50 hover:opacity-100 hover:cursor-pointer base-transition"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-8 xl:mt-0">
          <h3 class="text-lg font-bold leading-7 text-white">
            Join our monthly newsletter
          </h3>
          <newsletter-form />
        </div>
      </div>
      <div class="mt-8 pt-8 md:flex md:items-center md:justify-between">
        <div class="flex space-x-6 md:order-2">
          <a
            v-for="item in navigation.social"
            :key="item.name"
            :href="item.href"
            class="text-white opacity-50 hover:opacity-100 base-transition"
          >
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <div class="md:order-1 inline-flex">
          <p class="mt-8 text-sm text-white opacity-50 md:mt-0">
            &copy; {{ year }} Baselime. All rights reserved.
          </p>
          <div
            class="mt-8 md:mt-0 md:ml-16 flex whitespace-nowrap md:inline-flex"
          >
            <span class="visible md:invisible mr-4">|</span>
            <a
              href=""
              class="text-sm mr-4 text-white opacity-50 hover:opacity-100 base-transition"
              >Privacy Policy</a
            >
            <span class="">|</span>
            <a
              href=""
              class="text-sm ml-4 text-white opacity-50 hover:opacity-100 base-transition"
              >Terms of Service</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import NewsletterForm from '@/components/NewsletterForm.vue'

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
        ],
        social: [
          //   {
          //     name: "LinkedIn",
          //     href: "https://www.linkedin.com/company/baselime",
          //     icon: defineComponent({
          //       render: () =>
          //         h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          //           h("path", {
          //             "fill-rule": "evenodd",
          //             d: "M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z",
          //             "clip-rule": "evenodd",
          //           }),
          //         ]),
          //     }),
          //   },
          //   {
          //     name: "Twitter",
          //     href: "https://twitter.com/baselimeHQ",
          //     icon: defineComponent({
          //       render: () =>
          //         h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          //           h("path", {
          //             d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
          //           }),
          //         ]),
          //     }),
          //   },
          //   {
          //     name: "GitHub",
          //     href: "https://github.com/baselime",
          //     icon: defineComponent({
          //       render: () =>
          //         h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          //           h("path", {
          //             "fill-rule": "evenodd",
          //             d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
          //             "clip-rule": "evenodd",
          //           }),
          //         ]),
          //     }),
          //   },
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
})
</script>
