<template>
  <div class="modal" @click.prevent.stop="close" id="video">
    <div class="modal-content" @click.stop.prevent="">
      <a @click.stop="close" class="close">
        <CloseIcon />
      </a>
      <div class="c-container" @click.prevent.stop>
        <div>
          <video controls autoplay>
            <source src="@/assets/videos/teaser.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import CloseIcon from 'vue-material-design-icons/Close.vue'

export default Vue.extend({
  components: {
    CloseIcon,
  },
  data() {
    return {}
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
#video {
  .modal-content {
    max-width: 1200px;
  }
}
</style>