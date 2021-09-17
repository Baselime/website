<template>
  <button class="button" :class="{ secondary, inline }" @click="action">
    <loader v-if="loading" :loading="loading" :color="'#fcfcfc'" />
    <div v-else>
      <a class="inner" :href="url" v-if="inline">
        <div>
          {{ text }}
        </div>
        <div class="icon">
          <RightArrow />
        </div>
      </a>
      <div v-else>{{ text }}</div>
    </div>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
//@ts-ignore
import Loader from 'vue-spinner/src/PulseLoader.vue'
//@ts-ignore
import RightArrow from 'vue-material-design-icons/ArrowRight.vue'

import mixpanel from '@/plugins/mixpanel'

export default Vue.extend({
  components: { Loader, RightArrow },
  props: {
    text: {
      type: String,
      required: true,
    },
    secondary: {
      type: Boolean,
      required: false,
    },
    inline: {
      type: Boolean,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
    loading: {
      type: Boolean,
      required: false,
    },
    event: {
      type: String,
      required: true,
    },
    eventProperties: {
      type: Object,
      required: true,
    },
  },
  methods: {
    action() {
      mixpanel.track(this.event, this.eventProperties)
      this.$emit('action')
    },
  },
  data() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.button {
  padding: 12px 24px;
  border-radius: 6px;
  background: $green;
  cursor: pointer;
  color: $white;
  transition: 0.15s;
  font-weight: bold;
  width: 100%;
  box-shadow: 0 2px 12px 0 rgba($green, 0.5);
  &.secondary {
    background: $white;
    border: 1px solid $green;
    box-shadow: none;
    color: $green;
    &:hover {
      background: darken($white, 6%);
    }
  }
  &.inline {
    background: transparent;
    border: none;
    box-shadow: none;
    color: $green;
    border-bottom: 2px solid transparent;
    padding: 0;
    border-radius: 0;
    .inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .icon {
        margin-left: 5px;
      }
    }
    &:hover {
      border-bottom: 2px solid $green;
      background: transparent;
    }
  }
  &:hover {
    background: darken($green, 6%);
  }
}
</style>