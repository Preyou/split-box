/* eslint-env node */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/recommended'],
      files: ['./**/*.{js,jsx,ts,tsx,vue,md}'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: true,
        tsconfigRootDir: './',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          tsx: true, // Allows for the parsing of TSX
          jsx: true,
        },
      },
      rules: {
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/ban-ts-comment': 0,
      },
    },
    {
      extends: ['plugin:md/recommended'],
      files: ['./docs/**/*.md'],
      parser: 'markdown-eslint-parser',
      rules: {
        'prettier/prettier': [
          'error',
          // Important to force prettier to use "markdown" parser - otherwise it wouldn't be able to parse *.md files.
          // You also can configure other options supported by prettier here - "prose-wrap" is
          // particularly useful for *.md files
          { parser: 'markdown' },
        ],
      },
    },
  ],
  plugins: ['json', 'css', 'promise', 'regexp', 'prettier'],
  extends: [
    'airbnb-base',
    'plugin:css/recommended',
    'plugin:promise/recommended',
    'plugin:regexp/recommended',
    'plugin:json/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    '@unocss',
    '.eslintrc-auto-import.json',
  ],

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        endOfLine: 'auto',
      },
    ],

    'vue/no-export-in-script-setup': 0,
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],
    'vue/multi-word-component-names': 0,

    'import/no-extraneous-dependencies': [0],
    'import/no-mutable-exports': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,

    // 使用未定义变量由ts报错
    'no-undef': 'off',
    curly: ['error', 'all'],
    semi: ['error', 'never'],
    'linebreak-style': ['off'],
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'assert'] }],
    'no-param-reassign': ['error', { props: false }],
  },
})
