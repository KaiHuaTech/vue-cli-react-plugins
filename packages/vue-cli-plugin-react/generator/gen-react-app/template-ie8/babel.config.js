
module.exports = (api) => {
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: false,
          useBuiltIns: 'entry',
          corejs: '3',
          <%_ if (rootOptions.useIE8) { _%>
            "modules": "commonjs",
          <%_ } else { _%>
            "modules": false,
          <%_ } _%>
          loose: true
          // debug: true
        }
      ],
      "@babel/preset-react"
    ],
    plugins: [
      <%_ if (rootOptions.useAntd) { _%>
      [
        'import',
        {
          "libraryName": "antd",
          "style": 'css',   // or 'css'
        }
      ],
      <%_ } _%>
      [
        "@babel/plugin-transform-runtime",
        {
          // "absoluteRuntime": false,
          "corejs": false,
          "helpers": true,
          "regenerator": false,
        }
      ]
    ],
  };
};
