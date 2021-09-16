<template>
  <div>
    <BlogTitle />
    <featured-article :article="articles.find((a) => a.featured)" />
    <Separator :text="'All articles'" />
    <section class="blog-articles-container">
      <ul>
        <li v-for="article of articles" :key="article.slug">
          <article-card :article="article" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { contentFunc } from '@nuxt/content/types/content'

import Vue from 'vue'
import ArticleCard from '~/components/ArticleCard.vue'
import FeaturedArticle from '~/components/FeaturedArticle.vue'
import getSiteMetadata from '~/utils/getSiteMetadata'

export default Vue.extend({
  async asyncData({ $content }: { $content: contentFunc }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'cover', 'slug', 'author', "date", 'featured'])
      .sortBy('date', 'desc')
      .fetch()

    return { articles }
  },
  head() {
    const metaData = {
      title: `Baselime Blog`,
      description: `Articles about serverless observability`,
      url: `https://baselime.io/blog/`,
    }
    const meta = getSiteMetadata(metaData)
    return {
      title: metaData.title,
      meta: [...meta],
    }
  },
  components: {
    FeaturedArticle,
    ArticleCard,
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.blog-articles-container {
  background: $mainBackground;
  ul {
    max-width: 1212px;
    margin: 0 auto;
    padding: 120px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      margin: 0 15px 30px 15px;
      width: 372px;
    }
  }
}
</style>