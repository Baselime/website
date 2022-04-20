<template>
  <div class="value">
    <div class="icon">
      <slot></slot>
    </div>
    <div class="inner">
      <div class="title">{{ value.title }}</div>
      <!-- <div>{{ value.description }}</div> -->
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
  border-radius: 4px;
  padding: 20px 30px 30px 30px;
  text-align: center;

  .icon {
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border: 2px solid $green;
    font-size: 45px;
    border-radius: 50%;
  }
  .inner {
    padding: 10px 0 0 0;
    .title {
      font-weight: bold;
      line-height: 1;
      font-size: 1.2rem;
      margin: 5px 0 15px 0;
    }
  }
}
</style>