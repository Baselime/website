<template>
  <div class="sidebar" @click="closeSidebarPanel">
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    ></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
// Copied from https://regenrek.com/posts/how-to-create-an-animated-vue-sidebar-menu-with-vue-observable/
import { mapState } from 'vuex'

export default {
  data: () => ({
    isPanelOpen: false,
  }),
  computed: {
    ...mapState({
      isOpen: (state) => state.navbar.isOpen,
    }),
  },
  watch: {
    isOpen() {
      this.isPanelOpen = this.isOpen
    },
  },
  methods: {
    closeSidebarPanel() {
      this.isPanelOpen = false
      this.$store.commit('navbar/toggle', this.isPanelOpen)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 200ms ease-in 0s;
}

.sidebar-backdrop {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  border-top: 2px solid $green;
  border-right: 1px solid $e4;
  background-color: $mainBackground;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 20px 20px 2rem 20px;
  width: 300px;
}
</style>