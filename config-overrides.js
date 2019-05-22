const {override, fixBabelImports} = require('customize-cra');

const addCssModules = () => config => {
    const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
    // 修改sass-loader 对 css-modules的配置
    // 参考了 [React 中customize-cra如何配置webpack中的model]( https://segmentfault.com/q/1010000018823282 )
    loaders[loaders.length - 3].use[1].options.modules = true;
    loaders[loaders.length - 3].use[1].options.localIdentName = "[name]-[local]-[hash:base64:5]";
    return config;
};

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addCssModules(),
);

// 以上为原来的

