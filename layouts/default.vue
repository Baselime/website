<template>
  <div>
    <dialog-modal
      v-if="showDialogModal"
      @close="toggleDialogModal"
      :title="dialogTitle"
      :message="dialogMessage"
      :id="dialogId"
      :action="dialogAction"
    />
    <JoinBetaModal
      v-if="showJoinBetaModal"
      @close="toggleJoinBetaModal(false)"
    />
    <Header />
    <Sidebar>
      <HeaderMenuItems :vertical="true" />
    </Sidebar>
    <div class="main">
      <Nuxt />
    </div>
    <PreFooter />
    <CookieBanner />

    <Footer />
  </div>
</template>

<script lang="ts">
import Sidebar from '@/components/burger-menu/Sidebar.vue'
import DialogModal from '@/components/modals/DialogModal.vue'
import JoinBetaModal from '@/components/modals/JoinBetaModal.vue'

import Vue from 'vue'
import { EventBus } from '@/event-bus'

export default Vue.extend({
  components: {
    Sidebar,
    JoinBetaModal,
    DialogModal,
  },
  data() {
    return {
      showDialogModal: false,
      showJoinBetaModal: false,
      dialogTitle: 'A title',
      dialogMessage: 'A message',
      dialogId: 'AN id',
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
    setDialog(data: any) {
      this.dialogTitle = data.title
      this.dialogId = data.id
      this.dialogMessage = data.message
      this.toggleDialogModal(true)
    },
  },
  created() {
    EventBus.$on('dialog', this.setDialog)
    EventBus.$on('display-join-beta-modal', () => this.toggleJoinBetaModal(true))
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.main {
  margin-top: 70px;
  color: $darkBlue;
  background: $white;
  @media screen and (max-width: 890px) {
    margin-top: 50px;
  }
}
</style>
