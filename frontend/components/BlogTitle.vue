<template>
  <div class="title-container">
    <div class="inner">
      <h1>Baselime Blog</h1>
      <p>
        Join our monthly newsletter and stay ahead of the curve on serverless
        observability
      </p>
      <div class="newsletter-container">
        <newsletter-form :origin="'blog-home-page'" />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import NewsletterForm from '@/components/NewsletterForm.vue'

export default Vue.extend({
  components: {
    NewsletterForm,
  },
  methods: {},
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.title-container {
  background: $mainBackground;
  .inner {
    width: 100%;
    max-width: 1272px;
    margin: auto;
    padding: 120px 30px;
    text-align: center;

    @media screen and (max-width: 890px) {
      padding: 60px 30px;
    }

    .newsletter-container {
      max-width: 500px;
      margin: auto;
    }

    h1 {
      color: $darkBlue;
    }
    p {
      margin: 30px 0 30px 0;
    }
  }
}
</style>