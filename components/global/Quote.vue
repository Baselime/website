<template>
  <div>
    <p><slot name="quote">default</slot></p>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

div {
  padding: 0 0 0 30px;
  margin: 0 0 30px 0;
  border-left: 5px solid $green;
  font-style: italic;
  p {
    margin: 0 !important;
  }
}
</style>