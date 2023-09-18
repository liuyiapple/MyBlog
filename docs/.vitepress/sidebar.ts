export const sidebar = [
  {
    text: '介绍',
    items: [{ text: '关于这里', link: '/introduce' }],
  },
  {
    text: 'HTML',
    items: [
      { text: '标签', link: '/Html/html' },
      { text: 'Canvas', link: '/Html/Canvas/index.md' },
    ],
  },
  {
    text: 'JavaScript',
    items: [{ text: 'JS执行机制', link: '/JS/1.eventlLoop.md' }],
  },
  {
    text: 'Vue',
    items: [
      { text: '开篇', link: '/Vue/1.introduce.md' },
      { text: '响应式', link: '/Vue/2.reactive.md' },
      { text: 'v-model', link: '/Vue/3.v-model.md' },
      { text: 'computed', link: '/Vue/4.computed.md' },
    ],
  },
  {
    text: '组件封装',
    items: [
      { text: 'Button', link: '/components/Button/index.md' },
      { text: 'Table', link: '/components/Table/index.md' },
      { text: 'Dialog', link: '/components/Dialog/index.md' },
    ],
  },
  {
    text: 'Node.js',
    items: [{ text: '基础知识', link: '/Node/Base/index.md' }],
  },
  {
    text: '开发常见问题',
    items: [
      { text: '关于表单FormData', link: '/Project/1.FormData.md' },
      { text: 'Base64格式附件下载', link: '/Project/2.File.md' },
      { text: 'Crypto-js数据加密', link: '/Project/3.AES.md' },
      { text: '大屏适配方案', link: '/Project/4.Screen.md' },
    ],
  },

  {
    text: '工具',
    items: [
      { text: 'Lodash 你值得拥有', link: '/Tool/lodash.md' },
      { text: 'VueUse', link: '/VueUse/State.md' },
    ],
  },
  {
    text: '算法',
    items: [{ text: '日常练习', link: '/Algorithm/arithmetic.md' }],
  },
];
