require('./bootstrap');
import Vue from 'vue'
import test from './components/test.vue'
import vuetify from "./plugins/vuetify";
import test_vuetify from "./components/test_vuetify";
const app = new Vue({
    vuetify,
    el:'#app',
    data:()=>({
        text:'hi'
    }),
    components:{
        test,
        test_vuetify,
    }
})
