
import axios from 'axios' ; 

export default{
    install:function(Vue){
        window.axios = axios;   
        Vue.prototype.$http = axios;//全局暴露
    }
}
