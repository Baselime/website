<template>
  <a class="position" :href="position.url">
    <div class="inner">
      <div class="title">{{ position.title }}</div>
      <div class="details">
        {{ position.location }}, {{ position.remuneration }}
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    position: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.position {
  border-radius: 4px;
  padding: 20px 30px 30px 30px;
  text-align: left;
  display: flex;
  background: $white;

  &:hover {
    .inner {
      .title {
        border-bottom: 2px solid $green;
      }
    }
  }

  .inner {
    padding: 0;
    .title {
      font-weight: bold;
      line-height: 1;
      font-size: 1.3rem;
      margin: 5px 0 5px 0;
      color: $green;
      border-bottom: 2px solid transparent;
      transition: 0.15s;
      display: inline-block;
    }
    .details {
      color: $grey;
    }
  }
}
</style>