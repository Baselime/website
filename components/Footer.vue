<template>
  <footer>
    <div class="footer">
      <div class="inner-footer">
        <div class="logo-container">
          <NuxtLink to="/">
            <img class="logo" src="@/assets/images/logo-wide-inverted.svg" alt="logo" />
          </NuxtLink>
        </div>
        <div class="main-container">
          <div class="column">
            <span class="title"> Why </span>
            <div class="item-container">
              <NuxtLink to="/blog/why-observability-as-code" class="item"
                >Why Observability as Code</NuxtLink
              >
            </div>
          </div>
          <!-- <div class="column">
            <span class="title"> Product </span>
            <div class="item-container">
              <NuxtLink to="/overview" class="item">Product Overview</NuxtLink>
            </div>
          </div> -->

          <div class="column">
            <span class="title"> Company </span>
            <div class="item-container">
              <NuxtLink to="/about" class="item">About</NuxtLink>
              <NuxtLink to="/blog" class="item">Blog</NuxtLink>
              <NuxtLink to="/careers" class="item">Careers</NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="newsletter">
        <div>
          <p class="title">Join our monthly newsletter</p>
          <NewsletterForm :origin="'footer'" />
        </div>
      </div>

      <div class="links">
        <div class="inner">
          <div style="margin: 0 20px 20px 00">
            © {{ year }} Baselime, All rights reserved
          </div>
          <NuxtLink to="/privacy" class="item">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="item">Terms of Service</NuxtLink>
        </div>
        <div class="socials">
          <div>
            <a href="https://twitter.com/baselimeHQ">
              <TwitterIcon :size="28" />
            </a>
            <a href="https://www.linkedin.com/company/baselime/">
              <LinkedInIcon :size="28" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import TwitterIcon from 'vue-material-design-icons/Twitter.vue'
// @ts-ignore
import LinkedInIcon from 'vue-material-design-icons/Linkedin.vue'
import NewsletterForm from '@/components/NewsletterForm.vue'

export default Vue.extend({
  components: {
    TwitterIcon,
    LinkedInIcon,
    NewsletterForm,
  },
  props: {},
  data() {
    return {
      year: new Date().getFullYear(),
      browser: 'Chrome',
    }
  },
  async mounted() {
    this.browser = 'Firefox'
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
footer {
  background: $darkBlue;
  color: $grey;
  .footer {
    padding: 60px 30px 30px 30px;
    max-width: 1212px;
    margin: 0 auto;

    .item {
      display: inline-block;
      transition: 0.15s;
      &:hover {
        color: $white;
      }
    }

    .inner-footer {
      .logo-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 60px;
        .logo {
          height: 60px;
        }
      }

      .main-container {
        display: flex;
        width: 100%;
        @media screen and (max-width: 550px) {
          display: block;
        }
        .column {
          margin-bottom: 90px;
          width: calc(33% + 18px);
          @media screen and (max-width: 550px) {
            width: 100%;
          }
          .title {
            font-weight: bold;
            display: block;
            margin-bottom: 10px;
            color: $white;
          }
          .item-container {
            display: flex;
            flex-direction: column;
            .item {
              padding: 5px 0;
              display: inline-block;
            }
          }
        }
      }
    }

    .newsletter {
      margin: 0 0 60px 0;
      display: flex;
      justify-content: flex-end;

      @media screen and (max-width: 550px) {
        justify-content: center;
      }

      .title {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
        color: $white;
      }
    }

    .links {
      font-size: 0.9em;
      line-height: 20px;
      display: flex;
      justify-content: space-between;
      .inner {
        display: flex;
        width: 50%;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .socials {
        display: flex;
        justify-content: space-between;
        margin-left: 30px;
        div {
          display: flex;
        }
        a {
          margin-left: 30px;
          transition: 0.15s;
          &:hover {
            color: $white;
          }
        }
      }
    }
  }
}
</style>