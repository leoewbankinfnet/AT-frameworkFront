<template>
  <div id="fundo_arq">
    <Header/>


    <b-button> <AddJogos/> </b-button>
    
    
    <section class="Arq_Jogos">
       <div v-for ="jogos in allJogos" :key="jogos.id" class="Cartas">
     
      <b-card
          :title="jogos.nome"
          :img-src="jogos.img"
          :img-alt="jogos.nome"
          img-top
          tag="article"
          style="max-width: 13rem;"
          class="md-2"
          :style="jogos.nota>7?'border:5px solid green;background: linear-gradient(0deg, rgba(0,0,0,1) 26%, rgba(255,0,0,1) 100%, rgba(255,27,27,1) 100%, rgba(255,0,0,1) 100%); color:white;'
          :jogos.nota<5?' background: linear-gradient(0deg, rgba(0,0,0,1) 26%, rgba(255,0,0,1) 100%, rgba(255,27,27,1) 100%, rgba(255,0,0,1) 100%); color:white;border:5px solid red;'
          :'border:5px solid yellow;background: linear-gradient(0deg, rgba(0,0,0,1) 26%, rgba(255,0,0,1) 100%, rgba(255,27,27,1) 100%, rgba(255,0,0,1) 100%); color:white;'"
         
          >
        <b-card-text>
             <router-link
              tag='h5'
              class="jogos-title"
              :to="{name:'jogos', params:{id:jogos.id}}">
              <b-button id="btn_det"> Detalhes </b-button>
              
             </router-link>
        </b-card-text>
      </b-card>
       </div>


    </section>



    
  </div>
</template>

<script>
import Header from '../components/Header'
import AddJogos from '../components/AddJogos'
import {mapGetters, mapActions} from "vuex"
export default {
  name: 'Jogos',
  components:{
    Header,
    AddJogos
  },
  props: {},
  methods:{
    ...mapActions(["fetchJogos"])
  },
  computed:
    mapGetters(["allJogos"]),
    created(){
      this.fetchJogos()
    }
}


</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.Arq_Jogos{
  display: flex;
  margin-left:5px;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 117px;
  margin:0 auto;
  justify-content: center;
  
  
}
img {
  height:305px;
}
.Cartas{
  display: flex;
  margin:5px;
  text-align:center;
  font-family:"Beckman-free";
  height:450px;
}
#info_card{
  display:flex;
  justify-content:center;
  font-family:"Conversation" ;
  font-size:1.5EM;
  position:fixed;
  bottom:0px;
}

#btn_det{
    position: absolute;
   
    width: 100px;
    margin-left: -50px;
    bottom:0px;
    margin-bottom:10px;  
}

#fundo_arq{
  background:url("../assets/fogo.jpeg");
  background-position: fixed;
  background-repeat: no-repeat;
  background-attachment: scroll;
  

  height: 100vh;
  background-repeat: inherit;
}




</style>
