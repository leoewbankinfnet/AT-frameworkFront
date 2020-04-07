const state = {
    jogos: [{"id":"1","nome":"GTA V","genero":"Ação", "nota":"10","img":"https://http2.mlstatic.com/gta-5-gta-v-ps4-pronta-entrega-em-portugus-midia-fisica-D_NQ_NP_629809-MLB32515401168_102019-F.jpg","console":"Playstation 4"},
            {"id":"2","nome":"Binding of Isaac Afterbirth","genero":"Ação","nota":"6","img":"https://s3.amazonaws.com/comparegame/thumbnails/42814/large.jpg", "console":"Nintendo Switch"},
            {"id":"3","nome":"Agony","genero":"Sobrevivência","nota":"3","img":"https://s3.amazonaws.com/comparegame/thumbnails/43916/large.jpg", "console":"Playstation 4"}
    
    ]
}

const getters = {
    allJogos: state => state.jogos,
    jogosID: (state) => (id) => (state.jogos.filter(t => t.id == id))[0]
}

const actions = {
    fetchJogos({commit}) {
        commit("setJogos")
    },
    addJogos({commit} , add_jogo ){
        const new_ind= state.jogos.length+1
        const response = {
            "id":new_ind,
            "nome":add_jogo.nome,
            "genero":add_jogo.genero,
            "nota":add_jogo.nota,
            "img":add_jogo.img,
            "console":add_jogo.console
        }
        commit("novoJogo",response)   
      },
      removeJogo({commit}, id){
          commit("deletarJogo",id)
      },
      atualizarJogos({commit},attJogo){
          const resp={
              "nome":attJogo.nome,
              "genero":attJogo.genero,
              "nota":attJogo.nota,
              
          }
          commit("atualizarJogo",resp)
      },
}

const mutations = {
    setJogos: (state) => state.jogos,
    novoJogo:(state,jogo) => state.jogos.push(jogo),
    deletarJogo:(state,id) => (state.jogos=state.jogos.filter(t=> t.id !==id)),
    atualizarJogo:(state,edit_jogo)=> { 
        state.jogos.forEach(element =>{
            if(element.nome === edit_jogo.nome){
                element.genero = edit_jogo.genero,
                element.nota = edit_jogo.nota
                
            }
        })
        }

    
}

export default {
    getters,
    state,
    mutations,
    actions
}
