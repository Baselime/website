<template>
  <main class="signup">
    <section class="heading">
      <div class="inner">
        <h1>Join our Private Beta</h1>
        <p>We are currently working our way through the private beta signups. Please sign-up and we'll get back to you asap!</p>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {

    }
  },
  components: {
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.signup {
  background: $mainBackground;
  padding: 60px 0;
  section {
    .inner {
      padding: 120px 30px;
      width: 100%;
      max-width: 1272px;
      margin: auto;
      text-align: center;
    }

    &.heading {
      .inner {
        padding: 60px 180px;
        @media screen and (max-width: 890px) {
          padding: 60px 30px;
        }
      }
    }
  }
}
</style>