<script lang="ts" setup>
import { codeToHtml } from 'shiki'
import { ref, shallowRef } from 'vue'
import { transformerCompactLineOptions } from '@shikijs/transformers'
import ArrowUp from './icons/ArrowUp.vue'

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

const isCollapse = ref(true)
</script>

<template>
  <div class="code-demo">
    <div class="code-demo__container">
      <div class="code-demo__preview">
        <component :is="demo" />
      </div>
      <div class="code-demo__actions">
        <how-button
          class="code-demo__action-collapse" :class="{ isCollapse }" size="sm" icon
          @click="isCollapse = !isCollapse"
        >
          <how-icon>
            <ArrowUp />
          </how-icon>
        </how-button>
      </div>
    </div>
    <div v-auto-animate class="code-demo__source">
      <div v-if="!isCollapse" v-html="html" />
    </div>
  </div>
</template>

<style lang="scss">
.code-demo {
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border-radius: 8px;
  background: #f8fafc;
  overflow: hidden;

  &__preview {
    padding: 4px;
    min-height: 48px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__actions {
    border-top: 1px solid #e5e7eb;
    padding: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &__action-collapse {
    &::part(howui-button) {
      transition: all 0.6;
    }

    &.isCollapse {
      &::part(howui-button) {
        transform: rotateX(180deg);
      }
    }
  }

  &__source {
    pre {
      overflow: auto;
      padding: 8px;
      margin: 0;
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
