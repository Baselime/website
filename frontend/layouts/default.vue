<template>
  <div>
    <JoinBetaModal
      :tier="tier"
      v-if="showJoinBetaModal"
      @close="toggleJoinBetaModal(false)"
    />

    <Navigation />
    <div class="main">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import DialogModal from '@/components/modals/DialogModal.vue'
import JoinBetaModal from '@/components/modals/JoinBetaModal.vue'

import Vue from 'vue'
import { EventBus } from '@/event-bus'
import Navigation from '~/components/Navigation.vue'

export default Vue.extend({
  components: {
    JoinBetaModal,
    DialogModal,
    Navigation,
  },
  data() {
    return {
      showDialogModal: false,
      showJoinBetaModal: false,
      showVideoModal: false,
      dialogTitle: 'A title',
      dialogMessage: 'A message',
      dialogId: 'AN id',
      tier: null,
    }
  },
  methods: {
    toggleDialogModal(val?: boolean) {
      if (typeof val === 'boolean') {
        this.showDialogModal = val
        return
      }
      this.showDialogModal = !this.showDialogModal
    },
    dialogAction() {
      return
    },
    toggleJoinBetaModal(val?: boolean) {
      if (typeof val === 'boolean') {
        this.showJoinBetaModal = val
        return
      }
      this.showJoinBetaModal = !this.showJoinBetaModal
    },
    toggleVideoModal(val?: boolean) {
      if (typeof val === 'boolean') {
        this.showVideoModal = val
        return
      }
      this.showVideoModal = !this.showVideoModal
    },
    setDialog(data: any) {
      this.dialogTitle = data.title
      this.dialogId = data.id
      this.dialogMessage = data.message
      this.toggleDialogModal(true)
    },
    setJoinBetaModal(data: any) {
      this.tier = data?.tier
      this.toggleJoinBetaModal(true)
    },
    setVideoModal() {
      this.toggleVideoModal(true)
    },
  },
  created() {
    EventBus.$on('dialog', this.setDialog)
    EventBus.$on('display-join-beta-modal', this.setJoinBetaModal)
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.main {
  margin-top: 120px;
  color: $darkBlue;
  @media screen and (max-width: 890px) {
    margin-top: 50px;
  }
}
</style>
