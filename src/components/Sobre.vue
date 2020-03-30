<template>
   <div class="areasobre">
      <h1 style="color: white"> Sobre </h1>
      <h2 style="color: white"> Projeto de Frameworks Front-end e Conexão com Back-End</h2>

      <section id='texto'>
          <p>
              O objetivo desse projeto é juntar todo o conhecimento obtido sobre VueJS  ao longo do trimestre e confeccionar uma pequena aplicação interativa. Neste trabalho
              foi idealizado um arquivo de jogos, onde o usuário irá inserir um nome, gênero, título e uma imagem do jogo para que o mesmo seja incluído na biblioteca de jogos
              do usuário 
          </p>     

      </section>

    </div>

</template>

<script>


export default {
  name: 'Sobre',
  components: {

    
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Life+Savers&display=swap');

h1 {
  font-size:50px;

  color:black;
  font-family: 'Life Savers', cursive;
  text-align:center;
}

h2{
  text-align:center;
   font-family: 'Life Savers', cursive;
}

p{
  color:white;
   font-family: 'Life Savers', cursive;
   font-size:1.5EM;
   text-align:justify;
}

#texto{
  margin:0 auto;
  display:block;
  width: 70%;
  margin-bottom:5px;
  text-align:justify;
}
.areasobre{
  background-color:rgb(129, 212, 245);
  padding:2px;
  width:70%;
  text-align:center;
  margin:0 auto;
  border-radius:15px;
}

@media only screen and (max-width: 400px) {
  .areasobre{
    width:100%;
    font-size:1EM;
  }
  h1{
      font-size:30px;
  }
  h2{
      font-size:20px;
  }

}


</style>
