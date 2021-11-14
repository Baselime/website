<template>
  <form @submit.prevent class="join-beta">
    <div class="name-container">
      <input
        class="input"
        v-model.trim="forename"
        type="text"
        placeholder="First Name*"
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
      <primary-button
        :text="'Join Private Beta'"
        :loading="loading"
        :event="'join-beta'"
        :eventProperties="{ company, tier }"
        @action="joinBeta"
        :shadow="true"
      />
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import { EventBus } from '@/event-bus/index'
import { isEmail } from '~/utils/utils'

export default Vue.extend({
  components: {
    PrimaryButton,
  },
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
        await this.$axios.post(
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
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
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