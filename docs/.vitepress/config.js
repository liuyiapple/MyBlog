export default {
  base: '/MyBlog/',

  themeConfig: {
    siteTitle: 'YaoDocs',
    nav: [
      {
        text: '基础学习',
        items: [
          { text: 'HTML', link: '/Html/html' },
          { text: 'CSS', link: '/CSS/css' },
          { text: 'JavaScript', link: '/JS/js' },
        ],
      },
      {
        text: '前端脚手架',
        items: [
          { text: 'Vue', link: '/Vue/1.introduce.md' },
          { text: 'React', link: '/react' },
        ],
      },
      { text: 'Github', link: 'https://github.com/liuyiapple' },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/liuyiapple',
      },
    ],
    sidebar: [
      {
        text: 'HTML',
        items: [
          { text: '标签', link: '/Html/html' },
          { text: '补充说明', link: '/Html/ps' },
        ],
      },
      {
        text: 'JavaScript',
        items: [
          { text: 'JS执行机制', link: '/JS/1.eventlLoop.md' },
          { text: '补充说明', link: '/Html/ps' },
        ],
      },
      {
        text: 'Vue',
        items: [
          { text: '开篇', link: '/Vue/1.introduce.md' },
          { text: '响应式', link: '/Vue/2.reactive.md' },
        ],
      },
      {
        text: 'VueUse常见API',
        items: [
          { text: 'Why is VueUse ？', link: '/VueUse/openFile.md' },
          { text: 'State', link: '/VueUse/State.md' },
        ],
      },
      {
        text: '开发常见问题',
        items: [{ text: '关于表单FormData', link: '/Project/FormData' }],
      },

      {
        text: '工具',
        items: [
          { text: 'Lodash 你值得拥有', link: '/Tool/lodash.md' },
          { text: '常用API', link: '/Tool/API.md' },
        ],
      },
    ],
  },
}
