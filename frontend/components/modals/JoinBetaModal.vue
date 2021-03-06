<template>
  <div class="modal" @click.prevent.stop="close" id="join-beta">
    <div class="modal-content" @click.stop.prevent="">
      <a @click.stop="close" class="close">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </a>
      <div class="c-container" @click.prevent.stop>
        <div>
          <h3 class="text-lg font-bold">Join our Private Beta today</h3>
          <form @submit.prevent class="join-beta">
            <div class="name-container">
              <input class="input" v-model.trim="forename" type="text" placeholder="First Name*" ref="forename"
                required />
              <input class="input" v-model.trim="surname" type="text" placeholder="Last Name*" required />
            </div>
            <div class="item">
              <input class="input" v-model.trim="company" type="text" placeholder="Company Name*" required />
            </div>
            <div class="item">
              <input class="input" v-model.trim="email" type="email" placeholder="Email*" required />
            </div>
            <div class="button-container">
              <button @click="joinBeta" type="submit"
                class="px-6 py-3 border-2 border-baseGreen text-base font-medium rounded text-white bg-baseGreen w-full shadow-green-700 hover:-translate-y-0.5 base-transition">
                <div class="flex justify-center items-center whitespace-nowrap">
                  <Spinner class="text-white mr-2" :color="'#fcfcfc'" v-if="loading" />
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
import Vue from 'vue';
import axios from 'axios';
import { isEmail } from '../../utils/utils';
import { EventBus } from '../../event-bus';

//@ts-ignore
import Spinner from 'vue-spinner/src/PulseLoader.vue';

export default Vue.extend({
  props: {
    tier: {
      type: Number,
      required: false,
    },
  },
  components: {
    Spinner,
  },
  data() {
    return {
      forename: '',
      surname: '',
      company: '',
      email: '',
      loading: false,
      focus: '',
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
      });
      this.loading = false
      this.clearInputs();
      this.$emit('complete');
      this.close();
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

form {
  label {
    display: block;
    font-size: 16px;
    margin-bottom: 0.5rem;
  }

  .input {
    display: block;
    width: 100%;
    outline: 0;

    margin: 0px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    border: none;
    border: 1px solid $e4;
    padding: 10px;
    outline: none;
    resize: none;
    color: inherit;
    font-size: 16px;
    background: $white;
    transition: all 0.15s;

    border-radius: 4px;

    &:focus {
      border: 1px solid $green;
    }

    &:active {
      border: 1px solid $green;
    }
  }

  textarea {
    resize: none;
    border: 1px solid $e4;
    border-radius: 4px;
    outline: 0;
    height: 100px;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    background: $white;

    &::placeholder {
      color: $grey;
    }

    &:focus {
      border: 1px solid $green;
    }

    &:active {
      border: 1px solid $green;
    }
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
