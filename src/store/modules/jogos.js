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
    }
}

const mutations = {
    setJogos: (state) => state.jogos
}

export default {
    getters,
    state,
    mutations,
    actions
}
