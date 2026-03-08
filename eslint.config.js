// eslint.config.js
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default [
  // 1. 指定需要检查的文件类型
  {
    files: ['src/**/*.{js,ts,vue}'], // 只检查 src 目录下的文件
  },

  // 2. 设置语言选项和全局变量
  {
    languageOptions: {
      globals: {
        ...globals.browser, // 浏览器环境全局变量（如 window、document）
        ...globals.node,    // Node.js 环境全局变量（如 process）
      },
    },
  },

  // 3. 继承推荐的规则集
  pluginJs.configs.recommended,                // ESLint 官方 JS 推荐规则
  ...tseslint.configs.recommended,             // TypeScript 推荐规则
  ...pluginVue.configs['flat/recommended'],     // Vue 3 推荐规则（使用 flat 格式）

  // 4. Vue 文件的特殊解析器配置
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser, // 解析 <script> 块中的 TypeScript
      },
    },
  },

  // 5. 自定义规则（根据项目需求调整）
  {
    rules: {
      // 关闭 Vue 组件名必须多单词的限制（后台系统中常见）
      'vue/multi-word-component-names': 'off',

      // 允许使用 any（可根据需要改为 'warn' 或 'error'）
      '@typescript-eslint/no-explicit-any': 'warn',

      // 开发环境允许使用 console，生产环境可以改为 'error'
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

      // 缩进风格（使用 2 空格）
      'indent': ['error', 2],
    },
  },

  // 6. 忽略特定文件
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'public/**',
      '*.config.js',        // 忽略所有配置文件
      '.eslintrc.{js,cjs}',  // 如果之前有旧配置，也忽略
    ],
  },
]