// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import './custom.css';
import 'element-plus/dist/index.css';
import elementplus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { h } from 'vue';
import Documate from '@documate/vue';
import '@documate/vue/dist/style.css';
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(elementplus);
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
  Layout: h(DefaultTheme.Layout, null, {
    'nav-bar-content-before': () =>
      h(Documate, {
        endpoint: 'https://2v4cq2mdgv.us.aircode.run/ask',
      }),
  }),
};
