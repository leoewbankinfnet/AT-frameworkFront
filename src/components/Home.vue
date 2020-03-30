<template>
  <div class="home">
    <Header/>
    <Sobre/>

    <div id="acesso">
      <div class="paw">
        <div class="inner"></div>
        <div class="bottom"></div>
      </div>
      <h2> Clique no botão abaixo e acesse o arquivo </h2>
      <br>
      <a href="/arquivo"> <img id="btn_acesso" src="../assets/cat_pawn.png" /> </a>
      
    </div>
  </div>
</template>

<script>

import Header from '../components/Header'
import Sobre from '../components/Sobre'

export default {
  name: 'Home',
  components:{
    Header,
    Sobre
  },
  props: {
 
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Life+Savers&display=swap');

h1 {
  font-size:2.5EM;
  font-family: 'Life Savers', cursive;
}
h2{
  border:1px white;
  text-align:center;
  background-color:rgb(147, 220, 233);
  width:400px;
  margin:0 auto;
  color:rgb(168, 101, 101);
  border-radius:10px;
  box-shadow: 0 5px pink;
  font-family: 'Life Savers', cursive;
  padding:3px;
  }

h3 {
  margin: 40px 0 0;
  font-family: 'Life Savers', cursive;
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
#acesso{
  margin:0 auto;
  margin-top:30px;
}
#btn_acesso{
  font-size:2.5Em;
  background-color:mediumseagreen; 
  color:black;
  border-radius:10px;
  width:10%;
  padding: 15px 25px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: lightblue;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px pink;
  border-radius:50%;
  font-family: 'Life Savers', cursive;
  opacity:0.8;
}
#btn_acesso:hover{
  background-color: rgb(247, 166, 178);
  opacity:1;
}
#btn_acesso:active{
  background-color: #93d7f1;
  box-shadow: 0 5px rgb(245, 139, 245);
  transform: translateY(4px);
  opacity:1;
}

.home{
margin-top: 117px;
height: 90vh;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
background: url('../assets/arq.jpg'); 
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
background-position-y: 0;
opacity: 1;
color: #010102;
background-attachment: fixed;

}

@media only screen and (max-width: 400px) {
  #btn_acesso{
    width:30%;
    font-size:1EM;
  }

}


</style>
