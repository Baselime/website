<template>
  <div :class="pages.includes($route.path) ? 'bg-greenSplash' : ''"
    style="background-repeat: no-repeat; background-size: 100%">
    <dialog-modal v-if="showDialogModal" @close="toggleDialogModal" :title="dialogTitle" :message="dialogMessage"
      :id="dialogId" :action="dialogAction" />

    <JoinBetaModal :tier="tier" v-if="showJoinBetaModal" @close="toggleJoinBetaModal(false)" />

    <Banner />

    <Navigation />
    <div>
      <Nuxt />
    </div>
    <PreFooter />
    <Footer />
    <CookieBanner />

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EventBus } from '../event-bus'
import Banner from '../components/Banner.vue'
import Navigation from '../components/Navigation.vue'
import DialogModal from '../components/modals/DialogModal.vue'
import JoinBetaModal from '../components/modals/JoinBetaModal.vue'
import CookieBanner from '../components/CookieBanner.vue'

export default Vue.extend({
  components: {
    JoinBetaModal,
    DialogModal,
    Navigation,
    Banner,
    CookieBanner,
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
      pages: ['/', '/about', '/blog'],
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
</style>
