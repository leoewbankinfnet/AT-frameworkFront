<template>
  <div>
    <div id="fundo">


    <section id="card">
      <h1>{{jogosID(id).nome}}</h1>
       <b-card 
       :img-src="jogosID(id).img"
       :img-alt="jogosID(id).nome"
       id="jogo_img"
       style="max-width: 16rem;"
      class="md-2"
          :style="jogosID(id).nota>7?'border:5px solid green;background: linear-gradient(0deg, rgba(0,0,0,1) 26%, rgba(255,0,0,1) 100%, rgba(255,27,27,1) 100%, rgba(255,0,0,1) 100%); color:white;'
          :jogosID(id).nota<5?' background: linear-gradient(0deg, rgba(0,0,0,1) 26%, rgba(255,0,0,1) 100%, rgba(255,27,27,1) 100%, rgba(255,0,0,1) 100%); color:white;border:5px solid red;'
          :'border:5px solid yellow;background: linear-gradient(0deg, rgba(0,0,0,1) 26%, rgba(255,0,0,1) 100%, rgba(255,27,27,1) 100%, rgba(255,0,0,1) 100%); color:white;'"

       >
       <b-card-text id='info'>
          <h4>Nota:{{jogosID(id).nota}} </h4>
          <h4>Console:{{jogosID(id).console}} </h4>
          <h4>Genero:{{jogosID(id).genero}} </h4>
       </b-card-text>
       </b-card>


       <b-button href="/arquivo" id="voltar"> Voltar </b-button>
    </section>
    </div>
      

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

<style scoped>
h1{
  color:white;
}
h4{
  font-size:1EM;
}
#jogo_img{
  width:17%;
  margin: 0 auto;
  padding:3 px;



}
#voltar {
  margin-top:30px;
  background-color:red;
  width:10%;
  font-size:1.3EM;
}

#fundo{
  background:black;
   margin-top: -60px;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-position-y: 0;
	opacity: 1;
	color: #010102;
  background-attachment: fixed;
}

@media only screen and (max-width: 600px) {
  #addd{
    font-size:0.6EM;
  }
}
</style>