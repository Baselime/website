<template>
  <div class="separator">
    <div>{{ text }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.separator {
  background: $darkBlue;
  padding: 30px;
  div {
    max-width: 1212px;
    text-align: center;
    color: $white;
    font-size: 1.6rem;
    margin: auto;
  }
}
</style>