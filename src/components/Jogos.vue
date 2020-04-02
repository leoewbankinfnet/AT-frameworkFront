<template>
  <div id="fundo_arq">
    <Header2/>


    <b-button> <AddJogos/> </b-button>
    
    
    <section class="Arq_Jogos">
       <div v-for ="jogos in allJogos" :key="jogos.id" class="Cartas">
     
      <b-card
          
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

          <h4> {{jogos.nome}}</h4>
        <b-card-text>
             
             <router-link
              tag='h5'
              class="jogos-title"
              :to="{name:'jogos', params:{id:jogos.id}}">
              <i title="Detalhes"><img src='../assets/eye.jpg' id='btn_det'/></i>
             </router-link>
             
             <i @click='removeJogo(jogos.id)' title="Remover"><img src='../assets/litterbox.jpg' id='rem'/> </i>
        </b-card-text>
      </b-card>
       </div>


    </section>



    
  </div>
</template>

<script>
import Header2 from '../components/Header2'
import AddJogos from '../components/AddJogos'
import {mapGetters, mapActions} from "vuex"
export default {
  name: 'Jogos',
  components:{
    Header2,
    AddJogos
  },
  props: {},
  methods:{
    ...mapActions(["fetchJogos", "removeJogo"])
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
h4{
  margin-top:0px;
  font-size:0.09EM;
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
  width:1200px;
  
  
  
}
img {
  height:60%;
}
.Cartas{
  display: flex;
  margin:5px;
  text-align:center;
  font-family:Arial, Helvetica, sans-serif;
  font-size: 10rem;
  height:300px;
  width:150px;
  
  
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
    font-size:0.5EM;
    width: 50px;
    height:50px;
    margin-left: -60px;
    bottom:0px;
    margin-bottom:5px;  
    border-radius:50%;
    cursor: pointer;
}

#rem{
    width:50px;
    height:50px;
    position: absolute;
    margin-left: 10px;
    bottom:0px;
    margin-bottom:5px;  
    border-radius:50%;
    cursor: pointer;


}

#fundo_arq{
  background:url("../assets/blood.jpg");
   margin-top: 117px;
  height: 110vh;
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
.zoom{
  zoom:80%;
}


@media only screen and (max-width: 600px) {
  .Arq_Jogos{
    width:200px;
    font-size:1EM;
  }
  #fundo_arq{
   background: white;
  }

}

</style>
