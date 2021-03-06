module.exports = (api) => {
  api.cache(false);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          corejs: '2',
          <%_ if (useIE8) { _%>
          modules: "commonjs",
          loose: true,
          <%_ } else { _%>
          modules: false,
          <%_ } _%>
          // debug: true
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      <%_ if (useAntd) { _%>
      [
        'import',
        {
          libraryName: 'antd',
          style: true, // or 'css'
        },
      ],
      <%_ } _%>
      [
        '@babel/plugin-transform-runtime',
        {
          // "absoluteRuntime": false,
          corejs: false,
          helpers: true,
          regenerator: false,
        },
      ],
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true,
        },
      ],
    ],
  };
};
