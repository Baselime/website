<template>
  <div>
    <featured-article :article="articles.find((a) => a.featured)" />
    <div class="like">
      <h3 style="font-weight: bold">
        You like writing about serverless and observability?
      </h3>
      <p>
        Contribute content on the Baselime Blog. Contact us at <a href="mailto:writing@baselime.io">writing@baselime.io</a>
      </p>
    </div>
    <section class="blog-articles-container">
      <ul>
        <li v-for="article of articles" :key="article.slug">
          <article-card :article="article" />
        </li>
      </ul>
    </section>
    <BlogTitle />
  </div>
</template>

<script lang="ts">
import { contentFunc, IContentDocument } from '@nuxt/content/types/content'

import Vue from 'vue'
import ArticleCard from '~/components/ArticleCard.vue'
import FeaturedArticle from '~/components/FeaturedArticle.vue'
import getSiteMetadata from '~/utils/getSiteMetadata'

export default Vue.extend({
  async asyncData({ $content }: { $content: contentFunc }) {
    const data = await $content('articles')
      .only([
        'title',
        'description',
        'cover',
        'slug',
        'author',
        'date',
        'featured',
        'published',
      ])
      .sortBy('date', 'desc')
      .fetch()

    const articles = data.filter(
      (article: IContentDocument) => article.published
    )
    return { articles }
  },
  head() {
    const metaData = {
      title: `Baselime Blog`,
      description: `Articles about observability for serverless`,
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

.like {
  margin: auto;
  text-align: center;
  padding: 60px;
  background: $blue;
  color: $white;
}
.blog-articles-container {
  background: $mainBackground;
  ul {
    margin: 0 auto;
    padding: 120px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      margin: 0 15px 30px 15px;
      width: 420px;
    }
  }
}
</style>