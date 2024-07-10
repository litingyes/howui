import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  react: true,
  jsx: true,
  jsonc: true,
  rules: {
    '@typescript-eslint/no-namespace': 0,
  },
})
