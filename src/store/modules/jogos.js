const state = {
    jogos: [{"id":"1","nome":"GTA V","genero":"ação", "nota":"10","img":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.g2a.com%2Fgrand-theft-auto-v-pc-rockstar-key-global-i10000000788017&psig=AOvVaw3YI5_XxJRlUWMHsflZW2xr&ust=1585653288315000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj7lfuIwugCFQAAAAAdAAAAABAH"},
            {"id":"2","nome":"Binding of Isaac Rebirth","genero":"ação","nota":"10","img":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.microsoft.com%2Fen-us%2Fp%2Fthe-binding-of-isaac-rebirth%2Fbqd45pqr4f4j&psig=AOvVaw1IuS2mMzHSK9UNp7HB8VWI&ust=1585653409597000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDFm7SJwugCFQAAAAAdAAAAABAP"},
    
    ]
}

const getter = {
    TodosJogos: state => state.jogos
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
    getter,
    state,
    mutations,
    actions
}
