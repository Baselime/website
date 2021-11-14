<template>
  <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
    <section class="article-card">
      <object>
        <img :src="`/images/blog-covers/${article.cover}`" :alt="article.alt" />
      </object>
      <div class="details">
        <div class="date">{{ article.date | formatDate }}</div>

        <h3>{{ article.title }}</h3>
        <p class="description">{{ article.description }}</p>
        <div v-if="!$fetchState.pending" class="author-container">
          <MiniAuthor :author="author" :position="false" />
        </div>
      </div>
    </section>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'
// @ts-ignore
import RightArrow from 'vue-material-design-icons/ArrowRight.vue'

export default Vue.extend({
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  components: {
    RightArrow,
  },
  data() {
    return {
      author: {},
    }
  },
  async fetch() {
    this.author = await this.$content(`authors`, this.article.author.id).fetch()
  },
  filters: {
    formatDate(date: string) {
      return dayjs(date).format('DD MMMM, YYYY')
    },
  },
  
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.article-card {
  transition: 0.15s;
  background: $white;
  box-sizing: border-box;
  border-radius: 15px;

  height: 100%;
  width: 100%;

  border: 1px solid $e4;
  border-radius: 15px;
  overflow: hidden;

  object {
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 15px 15px 0 0;

      height: 250px;
      transition: 0.15s;
    }
  }

  .details {
    padding: 30px;

    .date {
      font-size: 0.8em;
      color: $grey;
      margin-bottom: 5px;
    }

    .description {
      color: $grey;
    }

    h3 {
      font-weight: bold;
      transition: 0.15s;
      display: inline;
      color: $green;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid $green;
      }
    }
    .author-container {
      margin: 15px 0 0 0;
    }

    .description {
      margin: 0.5rem 0 0 0;
    }

    @media screen and (max-width: 890px) {
      margin: 0;
    }
  }

  &:hover {
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.2);
    img {
      transform: scale(1.1);
    }
  }
}
</style>