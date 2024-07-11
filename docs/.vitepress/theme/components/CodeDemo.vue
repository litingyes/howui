<script lang="ts" setup>
import { codeToHtml } from 'shiki'
import { shallowRef } from 'vue'
import { transformerCompactLineOptions } from '@shikijs/transformers'

defineOptions({
  name: 'CodeDemo',
})

const props = defineProps<{
  demo: string
  source: string
}>()

const html = shallowRef()
codeToHtml(decodeURIComponent(props.source), {
  themes: {
    light: 'vitesse-light',
    dark: 'vitesse-dark',
  },
  lang: 'vue',
  transformers: [
    transformerCompactLineOptions(),
  ],
}).then((res) => {
  html.value = res
})
</script>

<template>
  <div class="code-demo">
    <div class="code-demo__preview">
      <component :is="demo" />
      <div class="code-demo__actions" />
    </div>
    <div class="code-demo__source">
      <div v-html="html" />
    </div>
  </div>
</template>

<style lang="scss">
.code-demo {
  &__preview {
    border: 1px solid blue;
    border-radius: 8px;
    padding: 4px;
  }

  &__source {
    border: 1px solid red;

    pre {
      overflow: auto;
    }
  }
}

html.dark .shiki,
html.dark .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}
</style>
