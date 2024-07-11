import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import CodeDemo from './components/CodeDemo.vue'
import 'howui'

export default {
  extends: DefaultTheme,
  Layout: DefaultTheme.Layout,
  enhanceApp: async ({ app }) => {
    app.use(autoAnimatePlugin)
    app.component(CodeDemo.name!, CodeDemo)
    await Promise.all(Object.entries(import.meta.glob('./components/demos/*.vue')).map(([name, asyncModule]) => {
      return asyncModule().then((module: any) => {
        const demoComponentName = name.split('/')[3].split('.')[0]
        app.component(demoComponentName, module.default)
      })
    }))
  },
} as Theme
