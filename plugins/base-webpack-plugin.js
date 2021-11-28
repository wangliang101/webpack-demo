class BasekPlugin {
  // 在构造函数中获取用户为该插件传入的配置
  constructor(options){
    console.log('plugin options', options)
  }
  // webpack会调用BasekPlugin实例的apply方法为插件实例传入compiler对象
  apply(compiler){
    compiler.hooks.compilation.tap('BaseWebpakPlugin', function(compilation, callback){
      console.log('112')
    })
  }
}

module.exports = BasekPlugin;