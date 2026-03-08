export default {
  // 语法风格
  semi: false,                // 不使用分号结尾
  singleQuote: true,          // 使用单引号
  trailingComma: 'es5',       // 多行时使用逗号
  arrowParens: 'avoid',       // 只有一个参数时省略括号

  // 格式控制
  printWidth: 100,            // 每行最大长度
  tabWidth: 2,                // 缩进大小
  useTabs: false,             // 使用空格缩进
  bracketSpacing: true,       // 对象大括号内加空格

  // Vue 特定
  vueIndentScriptAndStyle: true, // <script> 和 <style> 标签内缩进

  // 可以为不同文件类型设置覆盖规则
  overrides: [
    {
      files: ['*.vue'],
      options: {
        parser: 'vue'
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript'
      }
    }
  ]
};
