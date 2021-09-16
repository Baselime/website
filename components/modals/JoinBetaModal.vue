<template>
  <div class="modal" @click.prevent.stop="close" id="join-beta">
    <div class="modal-content" @click.stop.prevent="">
        <a @click.stop="close" class="close">
          <CloseIcon />
        </a>
      <div class="c-container" @click.prevent.stop>
        <div>
          <h3>Join our Private Beta today</h3>
          <JoinBetaComponent @complete="close" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import CloseIcon from 'vue-material-design-icons/Close.vue'
import JoinBetaComponent from '@/components/JoinBetaComponent.vue'

export default Vue.extend({
  components: {
    CloseIcon,
    JoinBetaComponent,
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
#join-beta {
  h3 {
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>