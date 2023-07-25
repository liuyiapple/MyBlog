// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import './custom.css';
import 'element-plus/dist/index.css';
import elementplus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(elementplus);
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
