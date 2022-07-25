<template>
  <article>
    <section class="header">
      <div class="inner">
        <h1 class="text-5xl">{{ article.title }}</h1>
        <div class="more-inner">
          <MiniAuthor
            :author="author"
            :position="true"
            :light="false"
            style="margin-bottom: 30px"
          />
          <div class="description-container">
            <div class="date">{{ article.date | formatDate }}</div>
            <div>
              {{ article.description }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="body">
      <div class="share-container">
        <div class="item facebook" @click="shareOnFacebook">
          <FacebookIcon />
        </div>
        <div class="item twitter" @click="shareOnTwitter">
          <TwitterIcon />
        </div>

        <!-- <div class="item whatsapp" @click="shareOnWhatsApp">
          <WhatsAppIcon />
        </div> -->
        <div class="item email" @click="shareViaEmail">
          <EmailIcon />
        </div>
      </div>
      <section class="inner">
        <img class="cover rounded-xl" :src="`/images/blog-covers/${article.cover}`" :alt="article.alt" />
        <nuxt-content :document="article" />
      </section>
    </div>

    <Separator :text="'More from the blog'" />

    <section class="blog-articles-container">
      <ul>
        <li v-for="article of articles" :key="article.slug">
          <article-card :article="article" />
        </li>
      </ul>
    </section>
  </article>
</template>

<script >
import Vue from 'vue'
import dayjs from 'dayjs'
import getSiteMetadata from '~/utils/getSiteMetadata'
import FacebookIcon from 'vue-material-design-icons/Facebook.vue'
import TwitterIcon from 'vue-material-design-icons/Twitter.vue'
import EmailIcon from 'vue-material-design-icons/Email.vue'
import WhatsAppIcon from 'vue-material-design-icons/Whatsapp.vue'
import LinkIcon from 'vue-material-design-icons/LinkVariant.vue'

export default Vue.extend({
  components: {
    FacebookIcon,
    TwitterIcon,
    EmailIcon,
    WhatsAppIcon,
    LinkIcon,
  },
  layout(context) {
    return 'default'
  },

  async asyncData({ $content, params }) {
    const article = await $content(`articles`, params.slug).fetch()
    const author = await $content(`authors`, article.author.id).fetch()

    const articles = (await $content(`articles`).sortBy('date', 'asc').fetch())
      .filter((article) => article.slug !== params.slug && article.published)
      .slice(0, 3)

    return { article, articles, author }
  },

  filters: {
    formatDate(date) {
      return dayjs(date).format('DD MMMM, YYYY')
    },
  },
  data() {
    return {
      article: {},
    }
  },
  computed: {
    url() {
      return `https://baselime.io/blog/${this.$route.params.slug}`
    },
    meta() {
      const metaData = {
        type: 'article',
        title: `${this.article.title} | Baselime Blog`,
        description: this.article.description,
        url: this.url,
        mainImage: `/images/blog-covers/${this.article.cover}`,
      }
      return getSiteMetadata(metaData)
    },
  },
  head() {
    return {
      title: `${this.article.title} | Baselime Blog`,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        {
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: this.article.author.name },
        { name: 'twitter:label2', content: 'Filed under' },
        {
          name: 'twitter:data2',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.url,
        },
      ],
    }
  },
  methods: {
    shareOnFacebook() {
      const url = `${this.url}?source=social.fb`
      const u = encodeURIComponent(url)
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${u}`,
        'facebook-share-dialog',
        'width=626,height=436'
      )
    },
    shareOnTwitter() {
      const tweet = `${this.article.title} - @baselimeHQ Blog`
      const url = `${this.url}?source=social.tw`
      this.tweetIt(tweet, url)
    },
    shareViaEmail() {
      const subject = encodeURIComponent(
        `${this.article.title} - Baselime Blog`
      )
      const body = encodeURIComponent(
        `Check out this blog post on the Baselime Blog - ${this.url}`
      )
      window.open(`mailto:?subject=${subject}&body=${body}`)
    },
    shareOnWhatsApp() {
      const url = `${this.url}?source=social.wa`
      const u = encodeURIComponent(
        `${this.article.title} - Baselime Blog - ${url}`
      )
      window.open(`whatsapp://send?text=${u}`)
    },
    tweetIt(text, url, hashtag) {
      const t = encodeURIComponent(text)
      const u = encodeURIComponent(url || '')
      const h = encodeURIComponent(hashtag || '')
      const tweetUrl = `https://twitter.com/share?text=${t}&url=${u}&hashtags=${h}`
      window.open(tweetUrl)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

article {
  .header {
    background: $white;
    padding: 120px;
    @media screen and (max-width: 550px) {
      padding: 60px 30px;
    }
    .inner {
      max-width: 1100px;
      margin: auto;

      .more-inner {
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        .description-container {
          .date {
            color: $grey;
            opacity: 1;
            margin: 0 0 30px 0;
          }
          opacity: 0.75;
          max-width: 700px;
        }
      }
    }
  }

  .body {
    max-width: 900px;
    margin: auto;
    padding: 0.5rem 2rem 6rem 2rem;
    display: flex;
    @media screen and (max-width: 550px) {
      flex-direction: column;
    }
    .share-container {
      display: flex;
      margin: -15px 30px 0px 0;
      flex-direction: column;
      @media screen and (max-width: 550px) {
        flex-direction: row;
        margin: -30px 0px 30px 0;
      }
      .item {
        margin: 15px 0 0 0;

        padding: 5px 5px 3px 5px;
        border-radius: 3px;
        color: $grey;
        cursor: pointer;
        transition: 0.15s;

        &:hover {
          color: $green;

          &.whatsapp {
            color: #25d366;
          }

          &.twitter {
            color: #1da1f2;
          }

          &.facebook {
            color: #4267b2;
          }
        }

        @media screen and (max-width: 550px) {
          margin: 0 15px 0 0;
        }
      }
    }

    .inner {
      width: 100%;
      img {
        margin: 0 0 60px 0;
        width: 100%;
        max-height: 580px;
        object-fit: cover;
      }
      ::v-deep {
        * {

          font-family: "Montserrat",sans-serif;
        }
        a {
          text-decoration: none;
          color: $green;
          border-bottom: 2px solid transparent;
          transition: 0.15s;
          &:hover {
            border-bottom: 2px solid $green;
          }
        }
        h2 {
          margin: 6rem 0 3rem 0;
          font-size: 1.5rem;
        }
        h3 {
          margin: 3rem 0 1.5rem 0;
          font-size: 1.2rem;
        }

        pre,
        p {
          margin: 0 0 30px 0;
        }

        pre {
          border-radius: 4px;

          code {
            color: $e4;
            background: none;
            padding: 0;
          }
        }

        em {
          font-weight: bold;
          padding-left: none;
          padding-right: 0px;
          margin-left: 0px;
          margin-right: 0px;
          color: inherit;
          position: inherit;
          display: inline-block;
          &:before {
            content: none;
          }
        }

        code {
          color: $red;
          background: $e4;
          padding: 3px 6px;
          border-radius: 4px;
        }

        table {
          width: 100%;
          max-width: 960px;
          margin: 30px 0;

          thead,
          tbody {
            tr {
              border-top: 2px solid $e4;
              border-bottom: 1px solid #fff;
            }

            td,
            th {
              text-align: left;
              padding: 10px;
            }
          }
        }

        ul {
          list-style-type: circle;
          margin: 0 0 30px 0;
          padding: 0;
          li {
            margin: 5px 60px;
          }
        }
      }
    }
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
}
</style>

