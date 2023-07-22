---
layout: home

title: Yao网站
titleTemplate: 写一些博客

hero:
  name: Yao的网站
  text: 写一些博客
  tagline: 欢迎光临.
  image:
    src: '/avatar.png'
  actions:
    - theme: brand
      text: 开始阅读
      link: /Html/html

    - theme: alt
      text: 实用工具
      link: /Tool/lodash.md
    - theme: alt
      text: View on GitHub
      link: https://github.com/liuyiapple
features:
  - title: '基础知识'
    details: 不积硅步，何以致千里
    icon: 💎
    link: /Html/html
    linkText: 查看更多
  - title: 'Bug分享'
    details: 个人开发中遇到的问题
    icon: 🤦
    link: /Project/FormData.md
    linkText: 吸取一下教训
  - title: '实用工具'
    details: 前端常用的npm库
    icon: 🧑‍🦽
    link: /Tool/lodash.md
    linkText: 造点轮子
  - title: '原生开发'
    details: 原生JS场景开发
    icon: 🐒
  - title: '框架源码'
    details: 源码分享，解读框架原理
    icon: 😏
  - title: '生活趣事'
    details: 生活趣事，记录日常点滴
    icon: 🦦
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/90204437?v=4',
    name: 'liuyiapple',
    title: 'continue coding....',
    links: [
      { icon: 'github', link: 'https://github.com/HearLing' },
      
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      欢迎大家贡献与参与
    </template>
    <template #lead>
      以下排名不分先后（参与或主动提 PR 申请加入）
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
