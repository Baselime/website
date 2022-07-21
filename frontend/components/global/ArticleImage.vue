<template>
  <div class="image">
    <img :src="imgSrc()" :alt="alt" class="article-image" />
    <div>
      {{ title }}
      <span v-if="source">
        | <a :href="source" target="_blank" rel="noopener noreferrer">source</a>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
  },
  methods: {
    imgSrc(): string | null {
      try {
        // @ts-ignore
        return require(`@/assets/images/${this.src}`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.image {
  margin: 15px 0 30px 0;
  text-align: center;
  color: $grey;
  img {
    border-radius: 4px;
    margin: 0 0 5px 0;
  }
  a {
    color: $green;
    border-bottom: 2px solid transparent;
    transition: 0.15s;

    &:hover {
      border-bottom: 2px solid $green;
    }
  }
}
</style>