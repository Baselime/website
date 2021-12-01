<template>
  <div>
    <p><slot name="info-box">default</slot></p>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

div {
  background: $lightBlue;
  border-radius: 4px;
  padding: 30px;
  color: $white;
  margin: 0 0 30px 0;
  font-weight: bold;
  p {
    margin: 0 !important;
    padding: 0 !important;
  }
}
</style>