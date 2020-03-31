import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from "./components/Home"
import Jogos from './components/Jogos.vue'
import DetalheJogos from './components/DetalheJogos.vue'

export default new VueRouter({
    mode:"history",
    routes: [
        {
            path: '/',
            name:'home',
            component:Home
        },
        
        {
            path: '/arquivo',
            name:'arquivo',
            component:Jogos
        },
        {
            path: '/jogos/:id',
            name:'jogos',
            component:DetalheJogos

        }
    ]
    
})