const fronthubPluginWebpack = require('@resultadosdigitais/front-hub/react/webpack-plugin')
module.exports = function override(config, env) {
  config.plugins.unshift(new fronthubPluginWebpack({ dev: process.env.NODE_ENV !== 'production' }))
  return config
}
