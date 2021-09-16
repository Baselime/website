<template>
  <div id="cookieConsent" :class="{ closed }">
    <p style="margin: 0 30px 0 0">
      🍪 By browsing this website you are agreeing to our
      <router-link to="/privacy" target="_blank">cookies policy</router-link>.
    </p>
    <div>
      <PrimaryButton
        style="display: inline-block; height: 30px; padding: 3px 20px"
        :text="'Close'"
        :secondary="true"
        @action="close"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'

export default Vue.extend({
  components: { PrimaryButton },
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
  border-radius: 5px;
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