<template>
  <div id="fundo_arq">

    <Header2/>


     <AddJogos/> 
    
    
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
            id="card_img"
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
             <i @click="$bvModal.show(jogos.id)" id='bot_detalhes'><img src='../assets/pent.jpg' id='ed'/></i>
             <b-modal  :key="jogos.id" :id="jogos.id" :title='jogos.nome' centered ok-only ok-title="Fechar" ok-variant="danger " auto-focus-button="ok">
               <b-card
                
                img-top
                tag="article"
                style="max-width: 20rem;margin:0 auto;"
                class="md-2"
                >
          

            <b-card-text style="width:200px;margin:0 auto;">
              <b-form @submit.prevent="onSubmit"  id="form">
                    <b-form-group
                      id="jogos.nome"
                      label="Nome do jogo: "
                      label-for="jogos.nome"
                    >
                      <b-form-input
                        id="jogos.nome"
                        v-model="attJogo.nome"
                                 ></b-form-input>
                    </b-form-group>
                    
                    <!-- <b-form-group
                      id="jogos.genero"
                      label="Genero do jogo "
                      label-for="jogos.genero"
                    >
                      <b-form-input
                        id="jogos.genero"
                        v-model="attJogo.genero"
                        type="text"
                        
                        placeholder="Insira o gênero do jogo"
                      ></b-form-input>
                    </b-form-group> -->

                     <b-form-group id="input-group-3" label="Genero:" label-for="input-3">
                        <b-form-select
                          id="jogos.genero"
                          v-model="attJogo.genero"
                          :options="attJogo.generos"
                          required
                        ></b-form-select>
                      </b-form-group>

                    <b-form-group
                      id="jogos.nota"
                      label="Nota"
                      label-for="input-3"
                    >
                      <b-form-input
                        id="jogos.nota"
                        v-model="attJogo.nota"
                        type="number"
                        
                        min="0"
                        max="10"
                        placeholder=""
                      ></b-form-input>
                    </b-form-group>
                    <!--   <b-form-group
                      id="jogos.console"
                      label="Console "
                      label-for="input-5"
                    >
                      <b-form-input
                        id="jogos.console"
                        v-model="attJogo.console"
                        type="text"
                        
                        placeholder="Insira o console"
                      ></b-form-input>
                    </b-form-group> -->
                    
                    <button type="submit">Submit</button>

                </b-form>
              
            </b-card-text>
               </b-card>
             </b-modal>
             
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
    AddJogos,
  
  },
   data() {
    return {
      attJogo:{
        nome:'',
        genero: null,
        generos: [
          { value: null, text: 'Selecione uma opção' },"Ficção","Sobrevivência", "Ação", "Aventura","FPS"], show:true,
        nota: "",
        
      }
    };
  },

  methods:{
    ...mapActions(["fetchJogos", "removeJogo","atualizarJogos"]),

     onSubmit() {
      this.atualizarJogos(this.attJogo);
    }
  },
  computed:
    mapGetters(["allJogos","jogosID"]),
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
img{
  height:200px;
}
.Arq_Jogos{
  display: flex;  
  flex-wrap: wrap;
  margin-top: 117px;
  margin:0 auto;
  justify-content: center;
  width:1200px;
 
}

.Cartas{
  display: flex;
  margin:5px;
  text-align:center;
  font-family:Arial, Helvetica, sans-serif;
  font-size: 10rem;
  height:350px;
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
#ed{
    width:30px;
    height:30px;
    position: absolute;
    margin-left: 39px;
    top:0px;
    margin-top:1px;
    margin-bottom:5px;  
    border-radius:50%;
    cursor: pointer;


}

#fundo_arq{
  background:url("../assets/blood.jpg");
  min-height:100vh;
  height: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2f4f4f;
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
  .Arq_Jogos{
    width:200px;
    font-size:1EM;
  }
  

}

</style>
