<template>
  <form @submit.prevent class="newsletter-form">
    <input
      class="input"
      v-model.trim="email"
      type="email"
      placeholder="Email"
    />

    <div class="button-container">
      <primary-button
        :text="'Subscribe'"
        :loading="loading"
        @action="subscribe"
      />
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import { isEmail } from '~/utils/utils'
import { EventBus } from '~/event-bus'

export default Vue.extend({
  data() {
    return {
      email: '',
      loading: false,
    }
  },
  components: { PrimaryButton },
  computed: {
    isValid(): boolean {
      return isEmail(this.email)
    },
  },
  methods: {
    async subscribe() {
      if (!this.isValid) return
      this.loading = true
      try {
        await this.$axios.post(
          'https://a8eb1x9ewi.execute-api.eu-west-2.amazonaws.com/prod/newsletter',
          { email: this.email }
        )
      } catch (error) {
        EventBus.$emit('dialog', {
          title: 'Error',
          message:
            'Whoops there was an error creating your subscription. Please retry.',
        })
        this.loading = false
        return
      }
      EventBus.$emit('dialog', {
        title: 'Subscribed!',
        message: 'Thanks for subscribing to our newsletter.',
      })
      this.loading = false
      this.clearInputs()
    },
    clearInputs() {
      this.email = ''
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.newsletter-form {
  display: flex;
  align-items: center;
  max-width: 500px;
  @media screen and (max-width: 550px) {
    flex-direction: column;
  }

  .button-container {
    width: 180px;
    margin-left: 15px;
    @media screen and (max-width: 550px) {
      width: 100%;
      margin: 15px 0;
    }
  }
}
</style>