module.exports = {
  extends: ['eslint-config-ali/react', 'prettier', 'prettier/react'],
  rules: {
    'no-prototype-builtins': 0,
    'react/prop-types': 0,
    'react/jsx-no-bind': 0,
    'react/no-access-state-in-setstate': 1,
    'react/no-find-dom-node': 0,
    'no-nested-ternary': 0,
    'no-return-assign': 0,
  },
  globals: {
    // 配置 Eslint 全局变量
    // jQuery: true,
  },
};