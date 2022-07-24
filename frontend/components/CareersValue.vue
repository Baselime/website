<template>
  <div class="value">
    <div class="icon">
      <slot></slot>
    </div>
    <div class="inner">
      <div class="text-xl text-darkBlue font-bold urbanist mb-4">{{ value.title }}</div>
      <div class="opacity-50">{{ value.description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.value {
  padding: 20px 30px 30px 30px;
  text-align: left;
  display: flex;

  .icon {
    margin: 0 30px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    height: 120px;
    border: 2px solid $green;
    font-size: 45px;
    border-radius: 50%;
  }
  .inner {
    padding: 10px 0 0 0;

  }
}
</style>