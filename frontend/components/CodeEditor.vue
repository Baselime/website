<template>
  <div class="relative overflow-x-hidden">
    <div id="editor" ref="editor" class="pb-4 px-4">
      <div v-html="snippet" class="p-8 pl-4 bg-white rounded-3xl overflow-x-scroll"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import yaml from 'yaml'
import { applicationObservabilityAsCode } from '../utils/obs-as-code/builders'
import { getHighlighter } from 'shiki';


export default Vue.extend({
  data() {
    return {
      snippet: '',
    }
  },
  components: {
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
    const s = await this.generateYamlString();
    const highlighter = await getHighlighter({
      theme: 'vitesse-light',
      langs: ["yaml"],
    });

    this.snippet = highlighter.codeToHtml(s, { lang: "yaml" })
  },
})
</script>

<style src="highlight.js/styles/googlecode.css">
</style>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

::v-deep {

  code {
    counter-reset: step;
    counter-increment: step 0;
  }
  
  code .line::before {
    content: counter(step);
    counter-increment: step;
    width: 1rem;
    margin-right: 1.5rem;
    display: inline-block;
    text-align: right;
    color: rgba(115,138,148,.4)
  }
}
</style>
