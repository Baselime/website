<template>
  <div class="overflow-x-hidden">
    <!-- Header -->
    <div>
      <main class="mx-auto max-w-7xl px-4 mt-16 sm:mt-24 sm:px-6">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div
            class="text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <h1>
              <span
                class="mt-1 block text-3xl md:text-[67px] leading-[1] font-bold tracking-normal urbanist"
              >
                Automate observability for your serverless stack
              </span>
            </h1>
            <p
              class="mt-6 md:text-xl md:mr-12 text-darkBlue opacity-50 md:leading-8 tracking-normal"
            >
              Baselime makes it easy to integrate observability in your
              serverless development lifecycle.
            </p>
            <div
              class="mt-8 sm:text-center lg:text-left flex flex-wrap justify-center lg:justify-start"
            >
              <button
                type="submit"
                class="mt-3 px-6 py-3 border-2 border-baseGreen text-base font-medium rounded-2xl text-white bg-baseGreen w-96 md:w-64 hover:-translate-y-0.5 base-transition"
                style="
                  filter: drop-shadow(4px 4px 14px rgba(50, 162, 100, 0.47));
                "
                @click="joinBeta"
              >
                Get started with Baselime
              </button>
              <a
                href="https://calendly.com/boristane/30min"
                type="submit"
                class="md:ml-0 xl:ml-4 text-center mt-3 px-6 py-3 text-base font-medium rounded-2xl text-gray-600 bg-white border-2 border-gray-500 shadow-sm w-96 md:w-64 hover:-translate-y-0.5 base-transition"
              >
                Speak with an engineer
              </a>
            </div>
          </div>
          <div
            class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <img class="w-full" src="@/assets/images/header.svg" alt="" />
          </div>
        </div>
      </main>
    </div>

    <!-- Logo Cloud -->
    <div class="mt-4">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 class="text-center font-bold text-3xl tracking-normal">
          Trusted by
        </h2>
        <div
          class="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-5 lg:mt-16 mb-20"
        >
          <div
            class="col-span-1 flex justify-center py-8 px-4 bg-white items-center"
          >
            <img src="@/assets/images/logos/seatfrog.png" alt="Seatfrog" />
          </div>
          <div
            class="col-span-1 flex justify-center py-8 px-8 bg-white items-center"
          >
            <img
              class="max-h-6"
              src="@/assets/images/logos/acre.svg"
              lazy
              alt="Acre"
            />
          </div>
          <div
            class="col-span-1 flex justify-center py-8 px-8 bg-white items-center"
          >
            <img
              class="max-h-12"
              src="@/assets/images/logos/hometree.png"
              lazy
              alt="HomeTree"
            />
          </div>
          <div
            class="col-span-1 flex justify-center py-8 px-8 bg-white items-center"
          >
            <img
              class="max-h-6"
              src="@/assets/images/logos/mesgai.svg"
              alt="Mesgai"
            />
          </div>
          <div
            class="col-span-1 flex justify-center py-8 px-8 bg-white items-center"
          >
            <img
              class="max-h-4"
              src="@/assets/images/logos/seedata.svg"
              alt="Seedata"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Blue Container -->
    <div class="bg-[#0A1233] pt-32 pb-32">
      <div class="relative">
        <div class="absolute left-0 top-0 -mt-32 invisible lg:visible">
          <img
            src="@/assets/vectors/paperclip-left.webp"
            class="max-w-4xl mx-auto"
          />
        </div>
        <div class="max-w-7xl mx-auto">
          <h2>
            <span
              class="mt-1 block text-3xl font-extrabold sm:text-3xl xl:text-4xl text-center"
            >
              <span class="text-white tracking-normal urbanist"
                >Start with</span
              >
              <span class="text-yellow-500 tracking-normal urbanist">
                Observability as Code</span
              >
            </span>
          </h2>
          <p
            class="my-12 text-xl text-center max-w-2xl mx-auto px-6 text-white opacity-50"
          >
            Observability as Code is a lean, iterative approach to adding
            observability to your applications. Baselime empowers you and your
            team to express observability as a declarative plan that can be
            shared amongst team members, treated as code, edited, reviewed, and
            version-controlled.
          </p>
          <img
            src="@/assets/images/empty-dashboard.webp"
            class="md:max-w-4xl mx-auto"
          />
        </div>
        <div class="absolute right-0 bottom-0 -mb-48 invisible lg:visible">
          <img
            src="@/assets/vectors/paperclip-right.webp"
            class="max-w-4xl mx-auto"
          />
        </div>
      </div>
    </div>

    <div
      class="bg-multiSplash"
      style="background-repeat: no-repeat; background-size: cover"
    >
      <!-- Features Grid -->
      <div class="relative py-16 sm:py-24 lg:py-32">
        <div
          class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <h2 class="mt-2 text-3xl font-extrabold sm:text-4xl urbanist">
            Observe your entire stack
          </h2>
          <p
            class="mx-auto mt-5 max-w-2xl text-xl text-darkBlue opacity-50 leading-8"
          >
            Tame your operational complexity with developer-first observability
            for serverless. From Lambda to CloudTrail via SQS, API Gateway, and
            all your serverless services, we have your entire stack covered.
          </p>
          <div class="mt-12">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div v-for="feature in features" :key="feature.name" class="p-6">
                <div
                  class="flow-root rounded-xl bg-white px-6 pb-8 text-left h-full drop-shadow-4xl"
                  style="
                    filter: drop-shadow(20px 24px 44px rgba(19, 35, 60, 0.13));
                  "
                >
                  <div class="">
                    <div>
                      <span
                        :class="feature.bg"
                        class="inline-flex items-center rounded-2xl h-16 w-16 justify-center mt-6"
                      >
                        <img
                          :src="imgSrc(`vectors/icons/${feature.icon}`)"
                          class="h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 class="mt-6 text-2xl font-bold text-darkBlue">
                      {{ feature.name }}
                    </h3>
                    <p
                      class="mt-4 text-xl text-darkBlue font-normal opacity-50 leading-8 mr-4"
                    >
                      {{ feature.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Avatar Circle -->
      <div
        class="flex flex-wrap md:flex-nowrap pt-8 pb-16 mx-auto max-w-7xl space-y-4 md:space-y-0 items-center"
      >
        <div class="w-full px-6 md:w-1/2">
          <img src="@/assets/images/avatar-circle.svg" class="" />
        </div>
        <div class="w-full md:w-1/2 px-6 md:px-0">
          <div
            class="sm:text-center md:max-w-lg md:mx-auto lg:col-span-6 lg:text-left"
          >
            <h2>
              <span
                class="mt-1 block text-3xl font-extrabold sm:text-3xl xl:text-4xl"
              >
                <span class="block text-baseBlue">Community-powered</span>
                <span class="block text-gray-900">observability plans</span>
              </span>
            </h2>
            <p class="mt-6 text-darkBlue opacity-50 text-xl">
              Baselime shifts observability left in your development lifecycle.
              Our Observability as Code plans are curated by our serverless
              experts and community, and available for your immediate use.
            </p>
            <p class="mt-6 text-darkBlue opacity-50 text-xl">
              For things that are specific to your applications, build your own
              plans that observe your apps, share them with your team, keep them
              in your version control, and get a deeper understanding of your
              applications behaviour.
            </p>
          </div>
        </div>
      </div>

      <!-- Baselime Yaml (Desktop) -->
      <div v-if="!showMobileEditor" class="flex py-16 bg-none">
        <div class="relative py-16 mx-auto">
          <div>
            <img src="@/assets/vectors/blue.png" class="mx-auto -mt-5" />
            <img src="@/assets/vectors/green.png" class="ml-32 -mt-16" />
          </div>
          <div
            class="absolute top-28 mt-10 w-[75%] left-24 bg-[#F7F6F3] rounded-3xl overflow-clip"
            style="
              border: 1px solid rgba(4, 9, 6, 0.2);
              box-shadow: 31.3727px 31.3727px 53.3336px rgba(10, 18, 51, 0.1);
            "
          >
            <div class="flex items-center mx-8">
              <div class="flex space-x-2">
                <div class="bg-[#585251] opacity-10 rounded-full w-4 h-4"></div>
                <div class="bg-[#585251] opacity-10 rounded-full w-4 h-4"></div>
                <div class="bg-[#585251] opacity-10 rounded-full w-4 h-4"></div>
              </div>
              <div class="py-4 text-center text-darkBlue opacity-50 ml-56">
                .baselime.yaml
              </div>
            </div>
            <CodeEditor />
          </div>
        </div>
      </div>
    </div>

    <!-- Baselime Yaml (Mobile) -->
    <div v-if="showMobileEditor" class="px-6 w-full">
      <div
        class="w-[95%] mx-auto bg-[#F7F6F3] rounded-3xl overflow-clip"
        style="
          border: 1px solid rgba(4, 9, 6, 0.2);
          box-shadow: 31.3727px 31.3727px 53.3336px rgba(10, 18, 51, 0.1);
        "
      >
        <div class="flex items-center mx-8">
          <div class="flex space-x-2">
            <div class="bg-[#585251] opacity-10 rounded-full w-4 h-4"></div>
            <div class="bg-[#585251] opacity-10 rounded-full w-4 h-4"></div>
            <div class="bg-[#585251] opacity-10 rounded-full w-4 h-4"></div>
          </div>
          <div class="py-4 text-center text-darkBlue opacity-50 ml-12">
            .baselime.yaml
          </div>
        </div>
        <CodeEditor />
      </div>
    </div>

    <!-- Testimonials section -->
    <div class="flex mt-32 py-16 mb-24 mx-auto">
      <div
        class="flex flex-wrap md:flex-nowrap mx-auto px-6"
        v-if="!showMobileEditor"
      >
        <div
          class="rounded-xl w-full my-3 testimonials"
          v-for="person in duplicate(testimonials, 3)"
          :key="person.name"
        >
          <div
            class="px-6 bg-[#14234B] rounded-xl border border-gray-200 mx-3 my-3 md:w-96 h-64"
          >
            <div class="text-white py-6 h-48">
              {{ person.quote }}
            </div>
            <div class="flex items-center">
              <div
                class="flex-shrink-0 inline-flex rounded-full border border-white overflow-clip h-10 w-10"
              >
                <img
                  class="w-full h-full object-cover"
                  :src="imgSrc(person.image)"
                  alt=""
                />
              </div>
              <div class="ml-4">
                <div class="font-medium text-white">{{ person.name }}</div>
                <div class="text-gray-300 text-sm">
                  {{ person.position }} at {{ person.company }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-wrap md:flex-nowrap mx-auto px-6"
        v-if="showMobileEditor"
      >
        <div
          class="rounded-xl w-full my-3 testimonials"
          v-for="person in splice(testimonials, 5)"
          :key="person.name"
        >
          <div
            class="px-6 bg-[#14234B] rounded-xl border border-gray-200 mx-3 my-3 md:w-96 h-64"
          >
            <div class="text-white py-6 h-48">
              {{ person.quote }}
            </div>
            <div class="flex items-center">
              <div
                class="flex-shrink-0 inline-flex rounded-full border border-white overflow-clip h-10 w-10"
              >
                <img
                  class="w-full h-full object-cover"
                  :src="imgSrc(person.image)"
                  alt=""
                />
              </div>
              <div class="ml-4">
                <div class="font-medium text-white">{{ person.name }}</div>
                <div class="text-gray-300 text-sm">
                  {{ person.position }} at {{ person.company }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA section -->
    <div
      class="flex flex-wrap py-32 max-w-6xl mx-auto items-center px-6 md:px-0"
    >
      <div class="w-full md:w-1/2">
        <h2 class="px-6 xl:px-0">
          <span
            class="mt-1 block text-3xl tracking-normal font-extrabold sm:text-3xl xl:text-4xl text-left"
          >
            <span class="text-darkBlue">The future of</span>
            <span class="text-green-500"> observability for serverless</span>
            <span class="text-darkBlue"> is now</span>
          </span>
        </h2>
        <p class="mt-6 max-w-lg text-xl text-gray-500 px-6 xl:px-0">
          Get started with Baselime today and explore community created
          observability plans in the Baselime Marketplace.
        </p>
        <div
          class="mt-6 sm:text-center lg:text-left justify-center lg:justify-start px-6 xl:px-0"
        >
          <button
            @click="joinBeta"
            type="submit"
            class="mt-3 px-6 py-3 border-2 border-baseGreen text-base font-medium rounded-xl text-white bg-baseGreen shadow-sm w-96 md:w-auto hover:-translate-y-0.5 base-transition"
          >
            Explore Baselime Templates
          </button>
          <button
            @click="joinBeta"
            type="submit"
            class="md:ml-0 xl:ml-4 mt-3 px-6 py-3 text-base font-medium rounded-xl text-gray-600 bg-white border-2 border-gray-500 shadow-sm w-96 md:w-64 hover:-translate-y-0.5 base-transition"
          >
            Join our Waiting List
          </button>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <div class="pt-6 pl-6">
          <a
            href="https://docs.baselime.io"
            target="_blank"
            class="flow-root rounded-xl bg-white px-6 pb-8 text-left w-11/12"
            style="filter: drop-shadow(20px 24px 44px rgba(19, 35, 60, 0.13))"
          >
            <div class="mt-6">
              <div>
                <span
                  class="inline-flex items-center rounded-2xl p-4 bg-green-500"
                >
                  <img
                    src="@/assets/vectors/icons/document.png"
                    class="h-10 w-9 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <h3 class="mt-6 text-2xl font-bold tracking-normal text-darkBlue">
                Documentation
              </h3>
              <p class="mt-5 text-xl text-darkBlue opacity-50">
                Read the Baselime observability as code language reference.
                Learn how to create an observability plan and share it with your
                team and/or everyone on Baselime.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeEditor from '../components/CodeEditor.vue'
import { EventBus } from '../event-bus'

export default {
  data() {
    return {
      features: [
        {
          name: 'Serverless native',
          description:
            'Deep integrations with your serverless stack make it easy to identify bugs and performance bottlenecks.',
          icon: 'code.png',
          bg: 'bg-green-100',
        },
        {
          name: 'Continuous observability',
          description:
            'Start with the minimum set queries and dashboards, and expand your understanding as your app grows.',
          icon: 'dashboard.png',
          bg: 'bg-red-100',
        },
        {
          name: 'Based on open-source',
          description:
            'Baselime is based on leading open-source technologies such as ClickHouse and OpenTelemetry.',
          icon: 'open_source.png',
          bg: 'bg-purple-100',
        },
        {
          name: 'Live tail',
          description:
            'Tail your events in realtime. Just hit play and view all your events being shipped, in real time, and apply filters.',
          icon: 'play.png',
          bg: 'bg-blue-100',
        },
        {
          name: 'Long-term data lake',
          description:
            'Store your telemetry data for long-term archive into your S3 Glacier.',
          icon: 'data.png',
          bg: 'bg-yellow-100',
        },
        {
          name: 'Real-time alerts',
          description:
            'Get instant, specific and actionable notifications on your architecture state and reduce alert fatigue. ',
          icon: 'bell.png',
          bg: 'bg-gray-100',
        },
      ],
      testimonials: [
        {
          name: 'Alejandro Inestal',
          company: 'Hometree',
          position: 'Head of Engineering',
          quote:
            'All the developers in our team love Baselime. They are now pro-active about observability and find answers to questions in the blink of an eye.',
          logo: 'hometree.png',
          image: 'images/alejandro-inestal.jpg',
        },
        {
          name: 'Alex Bilbie',
          company: 'Mesg.ai',
          position: 'CTO',
          quote:
            'Baselime and Observability as Code offer a compelling solution to the observability challenges introduced by serverless architecture.',
          logo: 'mesgai.svg',
          image: 'images/alex-bilbie.jpg',
        },
        {
          name: 'Lewis Putz',
          company: 'Seatfrog',
          position: 'Senior Software Engineer',
          quote:
            'Baselime stops me from having to worry that the observability dashboards and alerts of my applications are out of sync with my application code. It’s a game-changer.',
          logo: 'seatfrog.png',
          image: 'images/lewis-putz.jpeg',
        },
        {
          name: 'Matt Holland',
          company: 'Seedata.io',
          position: 'CTO',
          quote:
            'Within minutes of connecting our accounts, Baselime had made observations that helped us improve performance efficiency and quality of the code within Seedata.io.',
          logo: 'seatfrog.png',
          image: 'images/matt.webp',
        },
        {
          name: 'Lauren Reeder',
          company: 'Sequoia Capital',
          position: 'Partner',
          quote:
            "Boris and the Baselime team built this product out of their own pain and lived experiences working with serverless systems to help make every engineer's job better, every day.",
          logo: 'Sequoia.png',
          image: 'images/lauren.jpg',
        },
      ],
      showMobileEditor: false,
      width: 0,
    }
  },
  components: {
    CodeEditor,
  },
  mounted() {
    this.onResize()
  },
  created() {
    if (process.client) {
      window.addEventListener('resize', this.onResize)

      window.addEventListener('scroll', this.addAnimationClass)
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('resize', this.onResize)
    }
  },
  methods: {
    joinBeta() {
      EventBus.$emit('display-join-beta-modal')
    },
    imgSrc(src) {
      try {
        // @ts-ignore
        return require(`/assets/${src}`)
      } catch (error) {
        return null
      }
    },
    onResize() {
      // @ts-ignore
      this.width = window.innerWidth
      if (this.width < 960) return (this.showMobileEditor = true)
      this.showMobileEditor = false
    },
    addAnimationClass() {
      const cards = document.getElementsByClassName('testimonials')
      Array.prototype.forEach.call(cards, (card) => {
        if (this.width > 960)
          return (card.className += ' ' + 'testimonials-slider')
      })
    },
    splice(array, length) {
      return [...array].splice(0, length)
    },
    duplicate(array) {
      return [...array, ...array, ...array]
    },
  },
}
</script>
