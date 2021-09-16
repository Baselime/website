  <template>
  <div class="author-container">
    <section>
      <div class="author">
        <img :src="`/images/authors/${author.image}`" :alt="author.name" />

        <div>
          <p class="title">AUTHOR</p>
          <h1 class="name">{{ author.name }}</h1>
          <div class="position">
            {{ author.position }} at
            <a :href="author.url" target="_blank">{{ author.company }}</a>
          </div>
          <p class="bio">{{ author.bio }}</p>
        </div>
      </div>
    </section>
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
import { contentFunc, IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'
import dayjs from 'dayjs'
import getSiteMetadata from '~/utils/getSiteMetadata'
export default Vue.extend({
  async asyncData({
    $content,
    params,
  }: {
    $content: contentFunc
    params: any
  }) {
    const articles = (
      await $content('articles').sortBy('date', 'desc').fetch()
    ).filter((article: IContentDocument) => article.author.id === params.author)

    const authorData = await $content(`authors`, params.author).fetch()

    return { articles, authorData }
  },
  filters: {
    formatDate(date: string) {
      return dayjs(date).format('DD MMMM YYYY')
    },
  },
  computed: {
    author() {
      // @ts-ignore
      return this.authorData
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.author-container {
  section {
    background: $white;

    .author {
      display: flex;
      transition: 0.15s;
      align-items: flex-start;
      max-width: 1212px;
      margin: auto;
      padding: 120px 60px;

      @media screen and (max-width: 890px) {
        flex-direction: column;
      }

      div {
        margin: 0;
      }

      .title {
        margin: 0;
        font-weight: bold;
      }

      .name {
        margin: 0px 0 0 0;
      }

      .position {
        a {
          color: $green;
          border-bottom: 2px solid transparent;
          transition: 0.15s;

          &:hover {
            border-bottom: 2px solid $green;
          }
        }
      }

      img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        margin: 0 30px 0 0;
        @media screen and (max-width: 890px) {
          margin: 0 0 30px 0;
        }
      }

      .bio {
        margin: 60px 0 0 0;
        opacity: 0.75;
      }
    }

    &.blog-articles-container {
      background: $mainBackground;
      max-width: 1212px;
      margin: auto;

      padding: 0px;
      width: 100%;

      ul {
        max-width: 1212;

        margin: 0 auto;
        padding: 90px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li {
          margin: 0 15px 30px 15px;
          width: 372px;
        }
      }
    }
  }
}
</style>