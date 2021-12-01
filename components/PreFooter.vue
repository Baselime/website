<template>
  <div class="pre-footer-container">
    <div class="pre-footer">
      <h1>Help us build the future of serverless observability</h1>
      <div class="join-beta-container">
        <JoinBetaComponent />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import JoinBetaComponent from '@/components/JoinBetaComponent.vue'

export default Vue.extend({
  components: {
    JoinBetaComponent,
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.pre-footer-container {
  width: 100%;
  background: $darkBlue;
  padding: 120px;

  @media screen and (max-width: 550px) {
    padding: 60px 30px;
  }

  .pre-footer {
    max-width: 800px;
    margin: auto;
    text-align: center;

    h1 {
      color: $white;
      margin-bottom: 60px;
      line-height: 1;
      @media screen and (max-width: 890px) {
        font-size: 2rem;
      }
    }

    .join-beta-container {
      max-width: 600px;
      margin: auto;
      padding: 30px;
      background: $mainBackground;
      border-radius: 4px;
    }
  }
}
</style>