// https://nuxt.com/docs/api/configuration/nuxt-config

const defaultTheme = require("tailwindcss/defaultTheme");

export default defineNuxtConfig({
  build: {
    transpile: ["tslib"],
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/apollo", "@nuxtjs/tailwindcss", "@nuxt/image"],
  apollo: {
    clients: {
      default: {
        httpEndpoint:"https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clq0nu88zspzd01t067ha71ci/master"
          ,
      },
    },
  },
  css: ["assets/font.css"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ["Belanosima", ...defaultTheme.fontFamily.sans],
            serif: ["Belanosima", ...defaultTheme.fontFamily.serif],
          },
        },
      },
    },
  },
});
