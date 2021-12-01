<template>
  <div class="step">
    <div class="value">{{ step.value }}</div>
    <div class="inner">
      <div class="title">{{ step.title }}</div>
      <div>{{ step.description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    step: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.step {
  background: $white;
  border-radius: 4px;
  padding: 20px 30px 30px 30px;
  text-align: left;
  display: flex;
  align-items: flex-start;

  .value {
    font-size: 2.3em;
    font-weight: bold;
    font-family: 'Urbanist', sans-serif;
    margin: 0 30px 0 0;
  }
  .inner {
    padding: 10px 0 0 0;
    .title {
      color: $green;
      font-weight: bold;
      line-height: 1;
      font-size: 1.2rem;
      margin: 5px 0 15px 0;
    }
  }
}
</style>