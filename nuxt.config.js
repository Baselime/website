import getRoutes from "./utils/getRoutes";
import getSiteMetadata from "./utils/getSiteMetadata";

const meta = getSiteMetadata();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Baselime - Observability for Serverless',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      ...meta,
      { charset: "utf-8" },
      { name: "HandheldFriendly", content: "True" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:site_name", content: "Baselime" },
      {
        hid: "description",
        name: "description",
        content:
          "Observability solution for serverless applications.",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
      { name: "twitter:site", content: "@boristane" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
      {
        hid: "canonical",
        rel: "canonical",
        href: `https://${process.env.DOMAIN}`,
      },
    ],
    script: [
      {
        vmid: 'heap',
        type: "text/javascript",
        innerHTML: `window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
        heap.load("825948806");`,
        charset: 'utf-8',
      },
      {
        vmid: "googletagmanager",
        src: "https://www.googletagmanager.com/gtag/js?id=G-YYKEPXKRQ1",
        async: true,
      },
      {
        vmid: "gtag",
        type: "text/javascript",
        innerHTML: ` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-YYKEPXKRQ1');`,
        charset: 'utf-8',
      },
      // {
      //   vmid: "crisp",
      //   type: "text/javascript",
      //   innerHTML: `window.$crisp=[];window.CRISP_WEBSITE_ID="d0cc7f6f-3abb-43bb-a5e9-c1efc10ae33b";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
      //   charset: "utf-8",
      // },
    ],
    __dangerouslyDisableSanitizers: ["script"]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/app.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/mixpanel", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    "@nuxtjs/sitemap",
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  sitemap: {
    hostname: `https://${process.env.DOMAIN}`,
    routes() {
      return getRoutes();
    },
  },
}
