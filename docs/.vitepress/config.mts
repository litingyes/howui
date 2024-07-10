import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/litingyes/howui' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Liting Yes',
    },
    search: {
      provider: 'local',
    },
  },
  locales: {
    'root': {
      label: 'English',
      lang: 'en-US',
      title: 'HOW UI',
      description: 'Web components UI library',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/what-is-how-ui' },
          { text: 'Components', link: '/components/icon' },
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              {
                text: 'What is HOW UI ?',
                link: '/guide/what-is-how-ui',
              },
              {
                text: 'Installation',
                link: '/guide/installation',
              },
              {
                text: 'Theme',
                link: '/guide/theme',
              },
            ],
          },
          {
            text: 'Components',
            items: [
              {
                text: 'Icon',
                link: '/components/icon',
              },
            ],
          },
        ],
        docFooter: {
          prev: 'Previous page',
          next: 'Next page',
        },
      },
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'HOW UI',
      description: 'Web components UI 组件库',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh-CN/guide/what-is-how-ui' },
          { text: '组件', link: '/zh-CN/components/icon' },
        ],
        sidebar: [
          {
            text: '指南',
            items: [
              {
                text: '介绍',
                link: '/zh-CN/guide/what-is-how-ui',
              },
              {
                text: '安装',
                link: '/zh-CN/guide/installation',
              },
              {
                text: '主题',
                link: '/zh-CN/guide/theme',
              },
            ],
          },
          {
            text: 'Components',
            items: [
              {
                text: 'Icon（图标）',
                link: '/zh-CN/components/icon',
              },
            ],
          },
        ],
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
      },
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => !!tag.startsWith('how-'),
      },
    },
  },
})
