<template>
  <div class="modal" @click.prevent.stop="close" id="join-beta">
    <div class="modal-content" @click.stop.prevent="">
      <a @click.stop="close" class="close">
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
      </a>
      <div class="c-container" @click.prevent.stop>
        <div>
          <h3>Join our Private Beta today</h3>
          <form @submit.prevent class="join-beta">
            <div class="name-container">
              <input
                class="input"
                v-model.trim="forename"
                type="text"
                placeholder="First Name*"
                ref="forename"
                required
              />
              <input
                class="input"
                v-model.trim="surname"
                type="text"
                placeholder="Last Name*"
                required
              />
            </div>
            <div class="item">
              <input
                class="input"
                v-model.trim="company"
                type="text"
                placeholder="Company Name*"
                required
              />
            </div>
            <div class="item">
              <input
                class="input"
                v-model.trim="email"
                type="email"
                placeholder="Email*"
                required
              />
            </div>
            <div class="button-container">
              <button
                @click="joinBeta"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { isEmail } from '../../utils/utils'
import { EventBus } from '../../event-bus'

export default Vue.extend({
  props: {
    tier: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      forename: '',
      surname: '',
      company: '',
      email: '',
      loading: false,
      focus: '',
      tier: '',
    }
  },
  computed: {
    isValid(): boolean {
      return (
        !!this.forename &&
        !!this.surname &&
        !!this.company &&
        isEmail(this.email)
      )
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
    async joinBeta() {
      if (!this.isValid) return
      this.loading = true
      const body = {
        forename: this.forename,
        surname: this.surname,
        company: this.company,
        email: this.email,
        tier: this.tier,
      }
      try {
        await axios.post(
          'https://a8eb1x9ewi.execute-api.eu-west-2.amazonaws.com/prod/signup',
          body
        )
      } catch (error) {
        EventBus.$emit('dialog', {
          id: 'join-beta-error',
          title: 'Error',
          message:
            'Whoops there was an error signing you up for our private beta. Please retry.',
        })
        this.loading = false
        return
      }
      EventBus.$emit('dialog', {
        id: 'join-beta-success',
        title: 'Subscribed!',
        message:
          "Thanks for joining our private beta. We will be in touch shortly to introduce you to what we've been working on.",
      })
      this.loading = false
      this.clearInputs()
      this.$emit('complete')
    },
    clearInputs() {
      this.forename = ''
      this.surname = ''
      this.email = ''
      this.company = ''
    },
  },
  mounted() {
    if (this.focus) {
      // @ts-ignore
      this.$refs.forename.focus()
    }
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
#join-beta {
  h3 {
    text-align: center;
    margin-bottom: 30px;
  }
}

.join-beta {
  .name-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0 0 0;
    @media screen and (max-width: 890px) {
      margin: 5px 5px 0 5px;
    }
    input {
      margin: 0px 5px;
      @media screen and (max-width: 890px) {
        margin: 5px;
      }
    }
    @media screen and (max-width: 890px) {
      flex-direction: column;
    }
  }

  .item {
    margin: 10px 5px;
  }

  .button-container {
    margin: 30px 5px 15px 5px;
  }
}
</style>
