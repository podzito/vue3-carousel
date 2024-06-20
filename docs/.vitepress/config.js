module.exports = {
  lang: 'en-US',
  title: 'Vue3-carousel',
  description: 'Vue.js 3 carousel component',

  base: '/vue3-carousel/',

  themeConfig: {
    repo: 'podzito/vue3-carousel',
    docsRepo: 'podzito/vue3-carousel',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,

    nav: [{ text: 'Guide', link: '/getting-started' }],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Configs', link: '/configs' },
          { text: 'Examples', link: '/examples' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'Methods', link: '/api/methods' },
          { text: 'Data', link: '/api/data' },
          { text: 'Events', link: '/api/events' },
        ],
      },
    ],
  },
}
