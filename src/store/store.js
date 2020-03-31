import Vue from 'vue'
import Vuex from 'vuex'
import jogos from './modules/jogos'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{jogos},
    state:{
        jogos:{}
    },

})