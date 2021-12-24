<template>
  <div class="links-container" :class="{ vertical }">
    <div class="logo-container" v-if="vertical">
      <NuxtLink to="/">
        <img class="logo" src="@/assets/images/logo-wide.svg" alt="logo" />
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/about" class="item">About</NuxtLink>
      <NuxtLink to="/careers" class="item">
        
          <span>Careers</span>
          <span class="marker"></span>
        </NuxtLink>
      <NuxtLink to="/pricing" class="item">Pricing</NuxtLink>
      <NuxtLink to="/blog" class="item">Blog</NuxtLink>
    </div>
    <div class="button-container">
      <primary-button
        :text="buttonText"
        @action="joinBeta"
        :event="'open-join-beta-modal'"
        :eventProperties="{ origin: 'header' }"
        :small="true"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import { EventBus } from '~/event-bus'

export default Vue.extend({
  components: {
    PrimaryButton,
  },
  props: {
    vertical: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      buttonText: 'Join Beta',
    }
  },
  methods: {
    joinBeta() {
      EventBus.$emit('display-join-beta-modal')
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.links-container {
  transition: all 0.5s ease-in-out;
  opacity: 1;
  visibility: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  .marker {
    width: 8px;
    height: 8px;
    background: $red;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    top: -5px;
  }
  &.vertical {
    display: block;
    .item {
      margin: 30px 0;
      padding: 0;
      display: block;
    }
  }
  a {
    &:hover {
      color: $green;
    }
  }
  .item {
    display: inline;
    position: relative;
    z-index: 2;
    padding: 0 40px 0 0;
    transition: 0.15s;
  }
  .logo-container {
    padding-top: 5px;
    .logo {
      height: 60px;
      @media screen and (max-width: 550px) {
        height: 60px;
      }
    }
  }
  .button-container {
    width: 120px;
    margin-left: 15px;
    @media screen and (max-width: 890px) {
      width: 100%;
      margin: 15px 0;
    }
  }
}
</style>