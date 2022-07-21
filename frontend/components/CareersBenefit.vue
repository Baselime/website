<template>
  <div class="benefit">
    <div class="icon">
      <slot></slot>
    </div>
    <div class="inner">
      <div class="title">{{ benefit.title }}</div>
      <div class="description">{{ benefit.description }}</div>
      <div class="url">
        <a :href="benefit.url">{{ benefit.cta }} &#8594;</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    benefit: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.benefit {
  border-radius: 4px;
  padding: 20px 30px 30px 30px;
  text-align: left;
  display: flex;
  background: $paper;
  background: $darkBlue;


  .icon {
    margin: 0 15px 0 0;
    font-size: 1.2rem;
  }

  .inner {
    padding: 0;

    .title {
      font-weight: bold;
      line-height: 1;
      font-size: 1.2rem;
      margin: 5px 0 15px 0;
    }

    .description {
      color: $grey;
    }

    .url {
      margin-top: 15px;
      font-weight: bold;

      a {
        color: $white;
        border-bottom: 2px solid transparent;
        transition: all 0.15s;

        &:hover {
          border-bottom: 2px solid $white;
        }
      }
    }
  }
}
</style>