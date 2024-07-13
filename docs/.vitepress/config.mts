import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { readFileSync } from 'node:fs'
import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  themeConfig: {
    logo: '/svgs/logo.svg',
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
  head: [
    [
      'link',
      { rel: 'icon', href: '/svgs/logo.svg' },
    ],
  ],
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
  markdown: {
    config: (md) => {
      md.use(container, 'demo', {
        validate: (param: string) => /^demo\s\S+$/.test(param.trim()),
        // @ts-expect-error type
        render: (tokens, idx) => {
          if (tokens[idx].nesting === 1) {
            const demoComponentName = tokens[idx].info.trim().match(/^demo\s+(\S+)$/)[1].trim()
            const source = readFileSync(resolve(__dirname, './theme/components/demos', `${demoComponentName}.vue`), 'utf-8')

            return `<CodeDemo demo="${demoComponentName}" source="${encodeURIComponent(source)}">\n`
          }
          else {
            return '</CodeDemo>\n'
          }
        },
      })
    },
  },
})
