// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import './custom.css';
import 'element-plus/dist/index.css';
import elementplus from 'element-plus';
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(elementplus);
  },
};
