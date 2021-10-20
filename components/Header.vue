<template>
  <header class="sticky" :class="{ shadow }">
    <div class="announcement">
      🎉 We're hiring! Read more about our <a href="https://baselime.notion.site/baselime/Baselime-Job-Board-c83ec59a57114a98bee1ae927afad421">open positions</a>!
    </div>
    <div class="header">
      <div class="logo-container">
        <NuxtLink to="/">
          <img class="logo" src="@/assets/images/logo-wide.svg" alt="logo" />
        </NuxtLink>
      </div>
      <HeaderMenuItems class="desktop-only" />
      <Burger class="mobile-only" />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Burger from '@/components/burger-menu/Burger.vue'
import HeaderMenuItems from '@/components/HeaderMenuItems.vue'
import { debounce } from '../utils/utils'

export default Vue.extend({
  components: {
    Burger,
    HeaderMenuItems,
  },
  props: {},
  data() {
    return {
      shadow: false,
    }
  },
  methods: {
    handleScroll() {
      debounce(() => {
        if (process.browser) {
          this.shadow = window.scrollY > 30
        }
      }, 50)()
    },
  },
  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
header {
  background: $mainBackground;
  border-top: 2px solid $green;
  .announcement {
    text-align: center;
    padding: 10px;
    background: $green;
    color: $white;
    font-weight: bold;
    a {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  &.sticky {
    position: fixed;
    z-index: 50;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.15s linear;
  }
  &.shadow {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    top: -44px;
  }
  .header {
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1212px;
    margin: auto;
    padding: 10px 30px;

    .logo-container {
      padding: 5px 0;
      display: flex;
      align-items: center;
      .logo {
        height: 30px;
        @media screen and (max-width: 550px) {
          height: 30px;
        }
      }
    }
  }
  .desktop-only {
    @media screen and (max-width: 890px) {
      display: none;
    }
  }
  .mobile-only {
    display: none;
    @media screen and (max-width: 890px) {
      display: block;
    }
  }
}
</style>