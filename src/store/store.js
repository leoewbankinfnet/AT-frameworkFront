import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jogos from './modules/jogos'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{jogos},
    state:{
        jogos:{}
    },
    mutations:{
        SET_STORE:(state,jogos) => {
            state.jogos = jogos
        }
    },
    actions:{
        INICIALIZAR_STORE: ({commit}) => {
            axios.get('../static/jogos')
            .then((response)=> {
                console.log(response.data.jogos)
                commit('SET_STORE', response.data.jogos)
            })
        }
    },
    getters:{
        jogos: state=>state.jogos
    }


})