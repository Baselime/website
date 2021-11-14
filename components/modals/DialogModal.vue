<template>
  <div class="modal" @click.stop.prevent="close" id="dialog-modal">
    <div class="modal-content" @click.stop.prevent="">
      <a @click.stop.prevent="close" class="close">
        <CloseIcon />
      </a>
      <div class="c-container" @click.stop.prevent="">
        <div class="header">
          <h2>
            {{ title }}
          </h2>
        </div>
        <div class="text">
          {{ message }}
        </div>
        <div class="button-container">
          <PrimaryButton
            :text="'Continue'"
            @action="doIt"
            :event="'close-dialog-modal'"
            :eventProperties="{ id }"
            :shadow="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import CloseIcon from 'vue-material-design-icons/Close.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'

export default Vue.extend({
  components: {
    CloseIcon,
    PrimaryButton,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    action: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    close() {
      this.$emit('close')
    },
    async doIt() {
      await this.action()
      this.close()
    },
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
#dialog-modal {
  z-index: 1000;
  .modal-content {
    max-width: 400px;
    .header {
      margin: auto;
      h2 {
        text-align: center;
        font-size: 24px;
      }
    }

    .text {
      text-align: center;
      font-size: 16px;
      padding: 20px 0;
    }

    .button-container {
      margin-top: 15px;
    }
  }
}
</style>