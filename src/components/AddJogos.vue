<template>
  <div id="arq">
    <!-- <section id="adicionar">
     
  <button type="button"   v-on:click="mostrarArq" id="form_add">
         Adicionar um jogo à biblioteca</button>
    </section> -->

     <div id="addd">
    
      <h2> Adicione um jogo </h2>
      <br>
      <a v-on:click='mostrarArq'> <img id="btn_acesso" src="../assets/cat_face.jpg" /> </a>
      
    </div>




  <form @submit.prevent="onSubmit" v-if="mostrarJogos" class="form-inline" id="form">
      <label for="name">Nome:</label>
      <br />
      <input type="text" id="nome" name="nome" required v-model="addJogo.nome" />
      <br />
      <label for="genero">Genero:</label>
      <br />
      <input type="text" id="genero" name="genero" required v-model="addJogo.genero" />
      <br />
       <label for="console">Console:</label>
      <br/>
      <input type="text" id="console" name="console"  required v-model="addJogo.console" />
      <br />
      <label for="nota">Nota:</label>
      <br />
      <input type="number" id="nota" name="nota" min="0" max='10' required v-model="addJogo.nota" />
      <br />
      <label for="img">Imagem:</label>
      <br/>
      <input type="link" id="img" name="img"  required v-model="addJogo.img" />
      <br />
      <button type="submit">Submit</button>

  </form>
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
        genero: "",
        nota: "",
        img:"",
        console:"",
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

<style>
@import url('https://fonts.googleapis.com/css?family=Life+Savers&display=swap');

#addd, #form{
  margin:0 auto;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 26%, rgba(255,0,0,1) 100%, rgba(255,27,27,1) 100%, rgba(255,0,0,1) 100%);
  margin-top:30px;
  
}

#form{
  padding:5px;
  justify-content:space-around;
  width:1500px;;
}
#btn_acesso{
  font-size:1.5Em;
  background-color:mediumseagreen; 
  color:black;
  width:100px;
  text-align: center;
  cursor: pointer;


  border-radius: 15px;
  border-radius:50%;
  font-family: 'Life Savers', cursive;
  margin-bottom:5px;
}

</style>