module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential'
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'vue'
  ],
  'rules': {
    // 2格缩进
    indent: ['error', 2],
    // 适配windows系统的回车
    'linebreak-style': [0, 'error', 'windows'],
    // 单引号
    quotes: ['error', 'single'],
    // 句末分号
    semi: ['error', 'always'],
    // 去除最后一行逗号
    'comma-dangle': [2, 'never'],
    // 警告已声明但未使用的变量
    'no-unused-vars': 1,
    // 函数前的空格
    'space-before-function-paren': [
      'warn',
      {
        // 匿名函数
        anonymous: 'never',
        // 命名函数
        named: 'never',
        // 异步函数
        asyncArrow: 'always'
      }
    ],
    // 忽略组件单个词汇命名
    'vue/multi-word-component-names': 'off'
  }
};
