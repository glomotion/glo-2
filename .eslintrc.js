// https://eslint.org/docs/user-guide/configuring

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` 
  // or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/recommended', 'airbnb-base'],
  
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  
  // add your custom rules here
  rules: {
    
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],

    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
  
    // @NOTE: Some custom lint options down below: ------------------------------
    // allow debugger during development
    'no-debugger': isProd ? 'warn' : 'off',
    'no-console': isProd ? 'warn' : 'off',
    'no-alert': isProd ? 'warn' : 'off',

    'no-trailing-spaces': ['error', { 
      'skipBlankLines': true 
    }],

    'vue/html-self-closing': [0, {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],

    'padded-blocks': [0],

    'lines-around-comment': [0, {
      "beforeBlockComment": true,
      "beforeLineComment": true,
      "afterBlockComment": false,
      "afterLineComment": false,
      "allowBlockStart": true,
      "allowObjectStart": true,
      "allowArrayStart": true,
    }],
    
    'quote-props': ['error', 'consistent-as-needed'],
    'radix': ["error", "as-needed"],
    
    'vue/max-attributes-per-line': [2, {
      'singleline': 2,
      'multiline': {
        'max': 2,
        'allowFirstLine': true
      }
    }],

    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'closeBracket': 1,
      'alignAttributesVertically': false,
      // "ignores": []
    }],

    // @TEMP:
    // "no-unused-vars": "off"

  }
}
