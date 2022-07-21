<template>
  <div class="position">
    <div class="inner">
      <div>
        <a :href="position.url" class="title">{{ position.title }}</a>
        <div class="details">
          {{ position.location }}, {{ position.remuneration }}
        </div>
      </div>
      <div class="button-container">
        <button
          @click="openUrl(position.url)"
          type="submit"
          class="px-6 py-3 border-2 border-baseGreen text-base font-medium rounded-xl text-white bg-baseGreen shadow-md w-full shadow-green-700 hover:-translate-y-0.5 base-transition"
        >
          <div class="relative items-center text-center">
            <Spinner
              class="absolute top-0 mt-0.5 w-6 h-6 text-white mr-2"
              v-if="loading"
            />
            <span class="text-center">Learn More</span>
          </div>
        </button>
      </div>
    </div>
  </div>
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
