<template>
  <div>

      <h1>{{jogosID(id).nome}}</h1>
       <b-card 
       :img-src="jogosID(id).img"
       :img-alt="jogosID(id).nome"
       id="jogo_img"
       >

       <b-card-text>
          <h4>Nota:{{jogosID(id).nota}} </h4>
          <h4>Console:{{jogosID(id).console}} </h4>
          <b-button> Editar Nota </b-button>
       </b-card-text>
       </b-card>


       <b-button href="/arquivo"> Voltar </b-button>
      

  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
export default {
    name:"DetalheJogos",
    component:{},
    methods:{
    ...mapActions(["fetchJogos"])
  },
  computed:
    mapGetters(["allJogos","jogosID"]),
    created(){
      this.fetchJogos()
    },
     data: function(){
        return{ 
            id : this.$route.params.id,}
    },
    
    props:{}
}
</script>

<style>
#jogo_img{
  width:15%;
  margin:0 auto;
  padding:5 px;
  border:white;

}

</style>