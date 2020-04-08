<template>
  <div>
    <div id="fundo">


    <section id="card">
      <h1 >{{jogosID(id).nome}}</h1>
       <b-card 
       :img-src="jogosID(id).img"
       :img-alt="jogosID(id).nome"
       id="jogo_img"
       style="max-width: 14rem;"
      class="md-2"
          :style="jogosID(id).nota>7?'border:7px solid green;background: linear-gradient(0deg, rgba(0,0,0,1) 26%, rgba(255,0,0,1) 100%, rgba(255,27,27,1) 100%, rgba(255,0,0,1) 100%); color:white;'
          :jogosID(id).nota<5?' background: linear-gradient(0deg, rgba(0,0,0,1) 26%, rgba(255,0,0,1) 100%, rgba(255,27,27,1) 100%, rgba(255,0,0,1) 100%); color:white;border:5px solid red;'
          :'border:5px solid yellow;background: linear-gradient(0deg, rgba(0,0,0,1) 26%, rgba(255,0,0,1) 100%, rgba(255,27,27,1) 100%, rgba(255,0,0,1) 100%); color:white;'"

       >
       <b-card-text id='info'>
          <h4>Nota:{{jogosID(id).nota}} </h4>
          <h4>Console:{{jogosID(id).console}} </h4>
          <h4>Genero:{{jogosID(id).genero}} </h4>
          <h4>Zerou em: {{jogosID(id).data}}</h4>
       </b-card-text>

      
       </b-card>

    
       
    </section>
     <a href='/arquivo'><img src='../assets/return.jpg' id='vol_img'/></a>
   
    </div>
    

  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"



export default {
    name:"DetalheJogos",
    component:{
      
     
      
    },
    methods:{
    ...mapActions([])
  },
  computed:
    mapGetters(["allJogos","jogosID"]),
    created(){
      
    },
     data: function(){
        return{ 
            id : this.$route.params.id,}
    },
    
    props:{}
}
</script>

<style scoped>
@font-face {
  font-family: 'Double';
  src: url('../assets/double_feature/DoubleFeature20.ttf')
}

@font-face {
  font-family: "WhoAsks";
  src: url("../assets/who_asks_satan/who asks satan.ttf");
}


h1{
  color:white;
  font-family: "WhoAsks";
  font-size:5EM;
}
h4{
  font-size:1EM;
}
#jogo_img{
  width:280px;
  margin: 0 auto;
  
}
#voltar {
  margin-top:30px;
  background-color:red;
  width:200px;
  font-size:1.3EM;
  margin-bottom:10px;
}
#vol_img{
  width:80px;
  height:80px;
  border-radius:50px;
  margin-top:10px;
  margin-bottom:10px;
}

img{
  height: 260px;
}
#fundo{
  background:url('../assets/HELL.jpg');
  margin-top: -60px;
  min-height:100vh;
  height: auto;
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
.card{
  display: flex;
  text-align:center;
  font-family:Arial, Helvetica, sans-serif;
  font-size: 1EM;
  height:420px;
  width:300px;
}

#info{
  margin-top:10px;
  
}

@media only screen and (max-width: 600px) {
  #addd{
    font-size:0.6EM;
  }
  h1{
    font-size:3EM;
    font-style:'DoubleFeat';
    
  }
}
</style>