<template>
  <section class="featured-article-container">
    <div class="featured-article">
      <div class="details">
        <div class="featured">FEATURED ARTICLE</div>
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <h2 class="sm:text-5xl">{{ article.title }}</h2>
        </NuxtLink>
        <p class="description">{{ article.description }}</p>
        <div v-if="!$fetchState.pending" class="author-container">
          <MiniAuthor :author="author" />
          <div class="date">{{ article.date | formatDate }}</div>
        </div>
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div class="read-now">
            <div>Read article now</div>
            <div style="margin-left: 5px">
              <RightArrow :size="20" />
            </div>
          </div>
        </NuxtLink>
      </div>
      <img :src="`/images/blog-covers/${article.cover}`" :alt="article.alt" />
    </div>
  </section>
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
  data() {
    return {
      author: {},
    }
  },
  async fetch() {
    this.author = await this.$content(`authors`, this.article.author.id).fetch()
  },
  components: {
    RightArrow,
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

.featured-article-container {

  padding: 90px 30px;

  .featured-article {
    max-width: 1212px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 890px) {
      flex-direction: column;
    }

    img {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
      border-radius: 4px;
    }

    .details {
      margin: 0 90px 0 0;
      h2 {
        font-weight: bold;
        transition: 0.15s;
        display: inline;
        color: $green;
        border-bottom: 2px solid transparent;
        font-size: 48px;

        &:hover {
          border-bottom: 2px solid $green;
        }
      }
      .author-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 30px 0;
      }

      .featured {
        margin: 0 0 0.5rem 0;
        font-weight: bold;
      }

      .description {
        margin: 1.5rem 0 0 0;
      }

      .read-now {
        display: inline-flex;
        align-items: center;
        color: $green;
        border-bottom: 2px solid transparent;
        transition: 0.15s;
        cursor: pointer;
        &:hover {
          border-bottom: 2px solid $green;
        }
      }

      @media screen and (max-width: 890px) {
        margin: 0 0 15px 0;
      }
    }
  }
}
</style>