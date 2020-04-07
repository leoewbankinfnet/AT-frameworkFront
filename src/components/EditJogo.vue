<template>
  <div id="arq">


  <b-form @submit.prevent="onSubmit"  id="form">
      <b-form-group
        id="input-group-1"
        label="Nome do jogo: "
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="attJogo.nome"
          type="text"
          
          placeholder="Insira o nome do jogo"
        ></b-form-input>
      </b-form-group>
      
       <b-form-group
        id="input-group-2"
        label="Genero do jogo "
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="attJogo.genero"
          type="text"
          
          placeholder="Insira o gênero do jogo"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Nota do Jogo "
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="attJogo.nota"
          type="number"
          
          min="0"
          max="10"
          placeholder=""
        ></b-form-input>
      </b-form-group>
         <b-form-group
        id="input-group-5"
        label="Console "
        label-for="input-5"
      >
        <b-form-input
          id="input-5"
          v-model="attJogo.console"
          type="text"
          
          placeholder="Insira o console"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group
        id="input-group-4"
        label="Imagem do jogo "
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="attJogo.img"
          type="url"
          
          placeholder="Insira um link de imagem"
        ></b-form-input>
      </b-form-group>
      <button type="submit">Submit</button>

  </b-form>

  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "EditJogo",
 
  methods: {
    ...mapActions(["atualizarJogos"]),
    
    onSubmit() {
      this.atualizarJogos(this.attJogo);
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
  color:white;
    
}
#arq{
  width:500px;
  margin:0 auto;
  margin-top:30px;
}
#addd{
  margin:0 auto;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 26%, rgba(255,0,0,1) 100%, rgba(255,27,27,1) 100%, rgba(255,0,0,1) 100%);
  font-family: 'Revamped',Arial, Helvetica, sans-serif;
  color:white;
  
}
 #form{
  margin:0 auto;
  background:black;
  padding:5px;
  justify-content:space-around;
  width:50%;
  color:white;
}

#btn_acesso{
  font-size:1.5Em;
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
    font-size:0.6EM;
    width:80%;
  }
  #form{
    width:80%;
  }
  #arq{
    width:70%;
    font-size:0.8EM;
    
  }

}

</style>