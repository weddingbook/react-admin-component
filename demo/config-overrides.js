const {
    override,
    addWebpackAlias,
    removeModuleScopePlugin
} = require("customize-cra");

const path = require('path');

module.exports = override(
    removeModuleScopePlugin(),
    addWebpackAlias({
        react: path.resolve('./node_modules/react')
    })
)