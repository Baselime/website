<template>
  <div class="relative overflow-x-hidden">
    <div id="editor" ref="editor" class="pb-4 px-4">
      <!-- <highlight class="bg-[#F7F6F3]" language="yaml">{{ snippet }}</highlight> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import yaml from 'yaml'
import { applicationObservabilityAsCode } from '../utils/obs-as-code/builders'

// @ts-ignore
// import Highlight from 'vue-highlight-component'

export default Vue.extend({
  data() {
    return {
      snippet: '',
    }
  },
  components: {
    // Highlight,
  },
  methods: {
    generateYamlString: function (): string {
      const doc = new yaml.Document()
      // @ts-ignore
      doc.contents = applicationObservabilityAsCode()
      return doc.toString()
    },
  },
  async mounted() {
    this.snippet = await this.generateYamlString()
  },
})
</script>

<style src="highlight.js/styles/googlecode.css"></style>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  color: $darkBlue;
  /* you must provide font-family font-size line-height. Example: */
  font-family: Monaco, Menlo, Consolas, Bitstream Vera Sans Mono, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
  border-radius: 4px;
}

.hljs {
  background: #f7f6f3;
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 24px;
}
</style>
