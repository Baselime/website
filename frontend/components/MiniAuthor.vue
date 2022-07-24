<template>
  <div>
    <div class="author" :class="{ light, position }">
      <div
        class="flex-shrink-0 inline-flex rounded-full overflow-clip h-10 w-10"
      >
        <img
          class="w-full h-full object-cover"
          :src="imgSrc(`team/${author.image}`)"
          alt=""
        />
      </div>
      <div>
        <div class="name">{{ author.name }}</div>
        <div class="position" v-if="position">
          {{ author.position }} at {{ author.company }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    author: {
      type: Object,
      required: true,
    },
    light: {
      type: Boolean,
      required: false,
    },
    position: {
      type: Boolean,
      required: false,
    },
  },
  components: {},
  methods: {
    imgSrc(src: string): string | null {
      try {
        console.log()
        // @ts-ignore
        return require(`@/assets/images/${src}`)
      } catch (error) {
        console.log(error)
        return null
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.author {
  display: flex;
  align-items: center;
  transition: 0.15s;
  div {
    margin: 0;
  }
  .name {
    color: $green;
    transition: 0.15s;
    display: inline-block;

    border-bottom: 2px solid transparent;
  }
  &.light {
    .name {
      color: $white !important;
      border-bottom: 2px solid transparent !important;
    }
  }
  &.position {
    align-items: flex-start;
  }
  &:hover {
    // .name {
    //   border-bottom: 2px solid $green;
    // }
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: 0 10px 0 0;
  }
}
</style>
