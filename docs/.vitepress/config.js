import { github } from './meta';
import { sidebar } from './sidebar';
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
    lastUpdated: true,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/liuyiapple',
      },
    ],
    sidebar: sidebar,
    search: {
      provider: 'local',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    editLink: {
      pattern: `${github}/tree/main/docs/:path`,
      text: '在 GitHub 上编辑此页',
    },
    lastUpdatedText: '最后一次更新于',
    footer: {
      message: `本文档纯属个人瞎写，参考各路大神优质代码，欢迎 <a target="_blank" style="color: var(--vp-c-brand)" href="${github}">star ⭐</a> 让更多人发现`,
      copyright: `<a target="_blank" href="${github}/LICENSE">MIT License</a> | 版权所有 © 2022-${new Date().getFullYear()} <a target="_blank" href="${github}">Everyone</a>`,
    },
  },
};
