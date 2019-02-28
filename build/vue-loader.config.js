const docsLoader = require.resolve('./doc-loader')
module.exports=(isDev)=>{
    return {
        preserveWhiteSpace:true, /*阻止元素间生成空白*/
        extractCSS:!isDev,/*将.vue中的css单独打包，其实vue本身默认是不单独提出css的，有利于异步组件加载，css没有热重载*/
        cssModules:{},
        //postcss
        //hotReload:false,/*关闭vue组件的热重载功能，修改vue组件时，会自动刷新浏览器来更新，而不是只修改变动的地方，该值一般会根据环境变量来生成，所以不需要设置；但是修改css仍然是热重载，因为.vue中的样式是通过vue-style-loader实现的;*/
        loaders:{
            'docs':docsLoader
        },
        //preLoader:{}
        //postLoader:
    }
}