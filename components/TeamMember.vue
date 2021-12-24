<template>
  <div class="member">
    <div class="photo">
      <img :src="member.image" :alt="member.name" />
    </div>
    <div class="inner">
      <div class="name">{{ member.name }}</div>
      <div class="position">{{ member.position }}</div>
      <div class="socials">
        <div>
          <a :href="member.linkedin" v-if="member.linkedin">
            <LinkedInIcon :size="22" />
          </a>
          <a :href="member.twitter" v-if="member.twitter">
            <TwitterIcon :size="22" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import TwitterIcon from 'vue-material-design-icons/Twitter.vue'
// @ts-ignore
import LinkedInIcon from 'vue-material-design-icons/Linkedin.vue'
export default Vue.extend({
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
  components: {
    TwitterIcon,
    LinkedInIcon,
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.member {
  background: $mainBackground;
  border-radius: 4px;
  text-align: left;

  img {
    width: 100%;
    border-radius: 4px 4px 0 0;
    height: 192px;
    object-fit: cover;
  }

  .inner {
    padding: 15px;
    .name {
      font-size: 1.4em;
      font-weight: bold;
      font-family: 'Urbanist', sans-serif;
    }
    .position {
    font-size: 1.0rem;
    line-height: 1;
    margin: 0px 0 15px 0;
  }

  .socials {
    display: flex;
    margin: 15px 0 0 0;
    div {
      display: flex;
    }
    a {
      padding-right: 10px;
      transition: 0.15s;
      color: $grey;
      &:hover {
        color: $green;
      }
    }
  }
  }
}
</style>