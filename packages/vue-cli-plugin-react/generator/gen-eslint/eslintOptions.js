exports.config = (api, preset, rootOptions = {}) => {
  const config = {
    root: true,
    env: { node: true },
    extends: [],
    parserOptions: {
      ecmaVersion: 2020
    },
    rules: {
      'no-console': makeJSOnlyValue(`process.env.NODE_ENV === 'production' ? 'warn' : 'off'`),
      'no-debugger': makeJSOnlyValue(`process.env.NODE_ENV === 'production' ? 'warn' : 'off'`)
    }
  }

}