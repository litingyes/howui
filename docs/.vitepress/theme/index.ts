import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'howui'

export default {
  extends: DefaultTheme,
  Layout: DefaultTheme.Layout,
} satisfies Theme
