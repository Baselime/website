<template>
  <div id="cookieConsent" :class="{ closed }" class="rounded-xl">
    <p style="margin: 0 30px 0 0">
      🍪 By browsing this website you are agreeing to our
      <NuxtLink to="/privacy" target="_blank">cookies policy</NuxtLink>.
    </p>
    <div>
      <button
        @click="close"
        type="submit"
        class="px-2 py-0 border-2 border-baseGreen text-base font-medium rounded-xl text-baseGreen bg-white w-full  hover:-translate-y-0.5 base-transition"
      >
        <div class="relative items-center text-center">
          <span class="text-center">Close</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {},
  data() {
    return {
      closed: false,
    }
  },
  methods: {
    close() {
      this.closed = true
      localStorage.setItem('closed', 'true')
    },
  },
  mounted() {
    this.closed = localStorage.getItem('closed') ? true : false
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
#cookieConsent {
  max-width: 800px;
  background: $white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.15s;
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 15px;
  bottom: 0;
  margin: 30px;
  opacity: 1;

  a {
    color: $green;
    border-bottom: 2px solid transparent;
    transition: 0.15s;
    &:hover {
      border-bottom: 2px solid $green;
    }
  }

  &.closed {
    opacity: 0;
    z-index: -1000;
  }
}
</style>
