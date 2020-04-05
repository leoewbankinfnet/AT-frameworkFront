<template>
  <div id="arq">
    <!-- <section id="adicionar">
     
  <button type="button"   v-on:click="mostrarArq" id="form_add">
         Adicionar um jogo à biblioteca</button>
    </section> -->

     <div id="addd">
    
      <h2 id='btn_acesso'> Adicione um jogo </h2>
      <br>
      <a v-on:click='mostrarArq'> <img id="btn_acesso" src="../assets/cat_face.jpg" /> </a>
      
    </div>




  <b-form @submit.prevent="onSubmit" v-if="mostrarJogos" class="form-inline" id="form">
      <label for="name">Nome:</label>
      <br />
      <input type="text" id="nome" name="nome" placeholder="Insira o nome do jogo" required v-model="addJogo.nome" />
      <br />
      <label for="genero">Genero:</label>
      <br />
      <select  id="genero" name="genero"  required v-model="addJogo.genero" >
      <option value='Ação'>Ação</option>
      <option value="Sobrevivência">Sobrevivência</option>
      <option value="Aventura">Aventura</option>
      <option value="Terror">Terror</option>
      <option value="FPS">FPS</option>
      </select>
      <br />
       <label for="console">Console:</label>
      <br/>
      <input type="text" id="console" name="console" placeholder="Insira a plataforma" required v-model="addJogo.console" />
      <br />
      <br/>
      <label for="nota">Nota:</label>
      <br />
      <input type="number" id="nota" name="nota" min="0" max='10' required v-model="addJogo.nota" />
      <br />
      <label for="img">Imagem:</label>
      <br/>
      <input type="url" id="url" name="url" placeholder="Insira um link" required v-model="addJogo.img" />
      <br />
      <button type="submit">Submit</button>

  </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddJogos",
  data() {
    return {
      mostrarJogos: false,
      addJogo :{
        nome: "",
        genero: null,
        nota: "",
        img:"",
        console:null,
      }
    };
  },
  methods: {
    ...mapActions(["addJogos"]),
    
    onSubmit() {
      this.addJogos(this.addJogo);
    },
    mostrarArq() {
      this.mostrarJogos = this.mostrarJogos ? false : true;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Life+Savers&display=swap');

@font-face {
  font-family: 'Revamped';
  src: url('../assets/revamped/Revamped.otf');
}

@font-face {
  font-family:'Bathrind' ;
  src: url('../assets/bathrind/Bathrind.otf');
}
h2{
  margin-bottom:-10x;
    
}

#addd{
  margin:0 auto;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 26%, rgba(255,0,0,1) 100%, rgba(255,27,27,1) 100%, rgba(255,0,0,1) 100%);
  font-family: 'Revamped',Arial, Helvetica, sans-serif;
}
 #form{
  margin:0 auto;
  background:black;
  display:flex;
  padding:5px;
  justify-content:space-around;
  width:1300px;
}

#btn_acesso{
  font-size:1.5Em;
  background-color:mediumseagreen; 
  color:black;
  width:90px;
  text-align: center;
  cursor: pointer;
  border-radius: 15px;
  border-radius:50%;
  font-family: 'Life Savers', cursive;
  margin-bottom:5px;
}
@media only screen and (max-width: 600px) {
  #addd{
    font-size:1.1EM;
  }

}

</style>