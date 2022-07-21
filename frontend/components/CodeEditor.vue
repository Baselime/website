<template>
  <div class="relative h-[795px]">
    <div id="editor" ref="editor" class="h-[810px]">
      <prism-editor
        class="my-editor px-6 overflow-y-hidden"
        v-model="snippet"
        :highlight="highlighter"
        :readonly="true"
        lineNumbers
      ></prism-editor>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import yaml from 'yaml'
import { applicationObservabilityAsCode } from '../utils/obs-as-code/builders'

import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
// @ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-yaml'
import 'prismjs/themes/prism-coy.css' // import syntax highlighting styles

export default Vue.extend({
  data() {
    return {
      snippet: '',
    }
  },
  components: {
    PrismEditor,
  },
  methods: {
    generateYamlString: function (): string {
      const doc = new yaml.Document()
      // @ts-ignore
      doc.contents = applicationObservabilityAsCode()
      return doc.toString()
    },
    highlighter: function (code: string) {
      return highlight(code, languages['yaml']) //returns html
    },
  },
  async mounted() {
    this.snippet = await this.generateYamlString()
  },
})
</script>

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
/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
.wrapper {
  position: relative;
  .button-container {
    position: absolute;
    right: 15px;
    top: 45px;
    width: 90px;
    z-index: 1;
  }
}
</style>
