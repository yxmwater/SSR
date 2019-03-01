module.exports=(isDev)=>{
    return {
        preserveWhiteSpace:true, /*阻止元素间生成空白*/
        extractCSS:!isDev,/*将.vue中的css单独打包，其实vue本身默认是不单独提出css的，有利于异步组件加载，css没有热重载*/
        cssModules:{
            localIdentName:isDev?'[path]-[name]-[hash:base64:5]':'[hash:base64:5]',/*把className编译成这种格式的，独一无二的*/
            camelCase:true
        },
    }
}