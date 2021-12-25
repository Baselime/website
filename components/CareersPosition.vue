<template>
  <div class="position">
    <div class="inner">
      <div>
        <div class="title">{{ position.title }}</div>
        <div class="details">
          {{ position.location }}, {{ position.remuneration }}
        </div>
      </div>
      <div class="button-container">
        <primary-button
          :text="'Learn More'"
          :event="'careers-position-learn-more'"
          :eventProperties="{ position: position.title }"
          :shadow="false"
          :url="position.url"
          @action="openUrl(position.url)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'

export default Vue.extend({
  props: {
    position: {
      type: Object,
      required: true,
    },
  },
  components: {
    PrimaryButton,
  },
  methods: {
    openUrl(url: string) {
      window.open(url)
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

  .inner {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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