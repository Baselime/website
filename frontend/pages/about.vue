<template>
  <div>
    <!-- Header -->
    <main class="mx-auto max-w-7xl px-4 mb-16 sm:px-6 pt-24 pb-16">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div
          class="text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
        >
          <h1>
            <span
              class="mt-1 block text-3xl tracking-normal sm:text-5xl urbanist"
            >
              <span class="block text-darkBlue font-extrabold">About us</span>
            </span>
          </h1>
          <p
            class="mt-6 text-base text-darkBlue opacity-50 sm:text-xl lg:text-md mr-4"
          >
            We at Baselime are re-imagining how developers build and maintain
            their serverless applications. We believe in empowering every
            software engineering team to gain a deeper understanding of their
            systems such that they can troubleshoot and resolve defects in
            minutes, not hours.
          </p>
          <p
            class="mt-6 text-base text-darkBlue opacity-50 sm:text-xl lg:text-md"
          ></p>
          <div class="mt-8 sm:text-center lg:text-left md:space-x-4">
            <a
              href="https://baselime.notion.site/baselime/Baselime-Careers-c83ec59a57114a98bee1ae927afad421"
              style="filter: drop-shadow(4px 4px 14px rgba(50, 162, 100, 0.47))"
              type="submit"
              class="mt-3 px-6 py-3 border-2 border-baseGreen text-base font-medium rounded-xl text-white bg-baseGreen shadow-sm w-full text-center md:w-auto hover:-translate-y-0.5 base-transition"
            >
              See all open positions
            </a>
          </div>
        </div>
        <div
          class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
        >
          <img class="w-full" src="@/assets/images/lime.png" alt="" />
        </div>
      </div>
    </main>

    <!-- Team -->
    <div class="bg-[#F7F6F3] pt-16 pb-40">
      <div class="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12">
          <div
            class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none text-center mx-auto"
          >
            <h2
              class="text-3xl tracking-normal sm:text-5xl mb-12 text-darkBlue font-extrabold"
            >
              Meet the Team
            </h2>
            <p class="text-xl text-darkBlue opacity-50 max-w-xl mx-auto mb-12">
              We are a team of tech-savvy passionate about shifting
              observability left in your software development cycles.
            </p>
          </div>
          <ul
            role="list"
            class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-4"
          >
            <li v-for="person in team" :key="person.name">
              <div class="space-y-4 rounded-xl bg-white drop-shadow-3xl">
                <div class="w-full">
                  <img
                    class="w-full mx-auto"
                    :src="imgSrc(`images/team/${person.image}`)"
                    alt=""
                  />
                </div>

                <div class="space-y-8 px-4 pb-6">
                  <div class="leading-6 space-y-1">
                    <h3 class="font-medium text-lg">{{ person.name }}</h3>
                    <p class="text-gray-500 text-md">{{ person.role }}</p>
                  </div>
                  <ul role="list" class="flex space-x-5 mt-8">
                    <li>
                      <a
                        :href="person.twitter"
                        class="text-gray-400 hover:text-gray-500 base-transition"
                      >
                        <span class="sr-only">Twitter</span>
                        <svg
                          class="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        :href="person.linkedin"
                        class="text-gray-400 hover:text-gray-500 base-transition"
                      >
                        <span class="sr-only">LinkedIn</span>
                        <svg
                          class="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div
      class="rounded-xl max-w-6xl mx-6 md:mx-auto py-16 bg-white z-20 -mt-20 md:-mt-40"
      style="box-shadow: 31.3727px 31.3727px 53.3336px rgba(10, 18, 51, 0.1)"
    >
      <div
        class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none text-center"
      >
        <h2
          class="text-3xl font-extrabold tracking-wide text-darkBlue sm:text-4xl mb-8"
        >
          We are hiring remote
        </h2>
        <p class="text-xl text-darkBlue opacity-50 max-w-2xl mx-6 md:mx-auto">
          Baselime is a remote-first company. If working remotely is something
          you like, feel free to check the different positions!
        </p>
      </div>
      <div
        class="sm:text-center lg:text-left md:space-x-4 justify-center flex mt-8"
      >
        <a
          style="filter: drop-shadow(4px 4px 14px rgba(50, 162, 100, 0.47))"
          href="https://baselime.notion.site/baselime/Baselime-Careers-c83ec59a57114a98bee1ae927afad421"
          class="mt-3 px-6 py-3 border-2 border-baseGreen text-base font-medium rounded-xl text-white bg-baseGreen shadow-sm w-full text-center mx-6 md:w-auto hover:-translate-y-0.5 base-transition"
        >
          See all open positions
        </a>
      </div>
    </div>

    <!-- Investors -->
    <div class="py-32">
      <div class="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div>
          <div
            class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none text-center mx-auto"
          >
            <h2
              class="text-3xl font-extrabold tracking-normal sm:text-5xl mb-12"
            >
              Meet our Investors
            </h2>
            <p class="text-xl text-gray-500 max-w-xl mx-auto mb-12">
              We have industry-leading investors who are passionate about our
              journey to make Observability as Code the new norm.
            </p>
          </div>
          <div class="mt-24 grid grid-cols-2 gap-0.5 md:grid-cols-4">
            <div class="col-span-1 flex justify-center py-8 px-8">
              <img
                class="max-h-12"
                src="@/assets/images/investors/Sequoia_Capital_logo.svg"
                alt="Sequoia"
              />
            </div>
            <div class="col-span-1 flex justify-center py-8 px-8">
              <img
                class="max-h-12"
                src="@/assets/images/investors/fp.svg"
                alt="Forward Partners"
              />
            </div>
            <div class="col-span-1 flex justify-center py-8 px-8">
              <img
                class="max-h-12"
                src="@/assets/images/investors/ocotpus.svg"
                alt="Octopus"
              />
            </div>
            <div class="col-span-1 flex justify-center py-8 px-8">
              <img
                class="max-h-12"
                src="@/assets/images/investors/Antler.jpg"
                alt="Octopus"
              />
            </div>
          </div>
          <ul
            role="list"
            class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-4 mt-24"
          >
            <li v-for="person in investors" :key="person.name">
              <div
                class="space-y-4 rounded-xl h-full overflow-clip bg-white drop-shadow-3xl"
              >
                <div class="flex justify-center items-center h-56">
                  <img
                    class="mx-auto"
                    :class="
                      person.name === 'Sequoia Arc'
                        ? 'object-fit'
                        : 'object-cover h-full w-full'
                    "
                    :src="imgSrc(`images/investors/${person.image}`)"
                    alt=""
                  />
                </div>

                <div class="space-y-8 px-4 pb-6">
                  <div class="leading-6 space-y-1">
                    <h3 class="font-medium text-lg">{{ person.name }}</h3>
                    <p class="text-gray-500 text-md">{{ person.role }}</p>
                  </div>
                  <ul role="list" class="flex mt-8 space-x-5">
                    <li v-if="person.twitter">
                      <a
                        :href="person.twitter"
                        class="text-gray-400 hover:text-gray-500 base-transition"
                      >
                        <span class="sr-only">Twitter</span>
                        <svg
                          class="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        :href="person.linkedin"
                        class="text-gray-400 hover:text-gray-500 base-transition"
                      >
                        <span class="sr-only">LinkedIn</span>
                        <svg
                          class="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Form -->
    <div class="bg-[#040906]" aria-labelledby="footer-heading">
      <div class="max-w-7xl border-b border-gray-700 py-16 mx-auto">
        <div
          class="max-w-xl mx-6 md:mx-auto border-2 border-dashed border-gray-700 rounded-xl py-8"
        >
          <div
            class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none text-center"
          >
            <h2
              class="text-3xl font-extrabold tracking-tight sm:text-3xl mb-12 text-white px-4 md:px-12"
            >
              Help us build the future of observability for serverless
            </h2>
          </div>
          <JoinBeta />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import JoinBeta from '../components/JoinBeta.vue'

export default {
  data() {
    return {
      team: [
        {
          name: 'Boris Tane',
          role: 'Founder and CEO',
          image: 'Boris.png',
          twitter: 'https://twitter.com/BorisTane',
          linkedin: 'https://www.linkedin.com/in/boristane/',
        },
        {
          name: 'Axel Dovi',
          role: 'COO',
          image: 'Axel.png',
          twitter: 'https://twitter.com/Ako_D_',
          linkedin: 'https://www.linkedin.com/in/axeldovi',
        },
        {
          name: 'Max Diamond',
          role: 'Software Engineer',
          image: 'Max.png',
          twitter: 'https://twitter.com/Dmdboi',
          linkedin: 'https://www.linkedin.com/in/max-diamond-09ba9719a',
        },
        {
          name: 'Nicolas Henrot',
          role: 'Senior Product Designer',
          image: 'Nicolas.png',
          twitter: 'https://twitter.com/HenrotNicolas',
          linkedin: 'https://www.linkedin.com/in/nicolas-henrot-bb205843',
        },
      ],
      investors: [
        {
          name: 'Sequoia Arc',
          role: 'Sequoia Capital Catalyst',
          image: 'Sequoia.png',
          twitter: 'https://twitter.com/sequoia',
          linkedin: 'https://www.linkedin.com/company/sequoia/',
        },
        {
          name: 'Megha Prakash',
          role: 'Investor at Forwards Partners',
          image: 'Megha.jpg',
          twitter: 'https://twitter.com/meghaprakash_',
          linkedin: 'https://www.linkedin.com/in/megha-prakash-9058916',
        },
        {
          name: 'Kirsten Connell',
          role: 'Investor at Octopus Ventures',
          image: 'Kirsten.webp',
          twitter: 'https://twitter.com/kirst',
          linkedin: 'https://www.linkedin.com/in/kirstenconnell',
        },
        {
          name: 'Maria Rotilu',
          role: 'Investor at Octopus Ventures',
          image: 'Maria.webp',
          twitter: 'https://twitter.com/mariarotilu',
          linkedin: 'https://www.linkedin.com/in/mariarotilu',
        },
        {
          name: 'Ollie Purdue',
          role: 'Partner at Antler',
          image: 'Ollie.jpg',
          twitter: 'https://twitter.com/Olliepurdue',
          linkedin: 'https://www.linkedin.com/in/olliepurdue',
        },
        {
          name: 'Tim Kimball',
          role: 'Head of Engineering at Many Pets',
          image: 'Tim.jpg',
          linkedin: 'https://www.linkedin.com/in/timothy-kimball-75443',
        },
        {
          name: 'David Gildeh',
          role: 'Observability Leadership at Netflix',
          image: 'David.jpeg',
          twitter: 'https://twitter.com/dgildeh',
          linkedin: 'https://www.linkedin.com/in/davidgildeh',
        },
        {
          name: 'Joey Kinvi',
          role: 'Partner at HoaQ',
          image: 'Joey.webp',
          twitter: 'https://twitter.com/joekinvi',
          linkedin: 'https://www.linkedin.com/in/joekinvi',
        },
      ],
    }
  },
  components: {
    JoinBeta,
  },
  methods: {
    imgSrc: function (src: string): string | null {
      try {
        // @ts-ignore
        return require(`/assets/${src}`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>
