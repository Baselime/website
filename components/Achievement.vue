<template>
  <div class="achievement">
    <div class="value">{{ achievement.value }}</div>
    <div class="title">{{ achievement.title }}</div>
    <div class="description">{{ achievement.description }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    achievement: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.achievement {
  border-radius: 4px;
  padding: 30px;
  color: $white;
  text-align: left;
    font-weight: bold;

  .value {
    font-size: 2.8em;
    font-family: 'Urbanist', sans-serif;
  }

  .title {
    font-size: 1.2rem;
    line-height: 1;
    margin: 0px 0 15px 0;
  }

  .description {
    opacity: 0.75;
  }
}
</style>