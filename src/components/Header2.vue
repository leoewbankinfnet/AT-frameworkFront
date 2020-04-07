<template>
  <div>
    
  <div class="header">
      <b-navbar id="navbar" toggleable="lg" type="dark" variant="info">
        <b-navbar-brand id="Logo-titulo" href="/"><img src="../assets/scream_cat.jpeg" id="logo"> Jogoteca Ferozmente Animal</b-navbar-brand>
       
      </b-navbar>
    </div> 



  </div>
</template>

<script>
export default {
  name: 'Header2',
}

</script>

<style scoped>
@font-face {
  font-family: 'Demon';
  src: url('../assets/demon_killer/Demon Killer Personal Use.ttf');
}

@font-face {
  font-family: 'Blood';
  src: url('../assets/blood_thirst/Blood Thirst.ttf');
}
@font-face {
  font-family: 'Zombie';
  src: url('../assets/curse_of_the_zombie/Curse of the Zombie.ttf');
}

.header{
  display: flex;
  width: auto;
  height: 50px;
  
}

#logo{
  width:10%;
  margin-left: 0px;
  border-radius: 99%;
  align-items:center;
  transition: 0.5s;
}


.navbar{
  display:flex;
  background-color: #2f4f4f!important;
  overflow: hidden;
  position: fixed; /* Sticky/fixed navbar */
  width: 100%;
  height: auto;
  top: 0; /* At the top */
  z-index: 99;
}
ul.navbar-nav {
  display: flex;
  justify-content: space-around;
  width: 80%;
  align-items:center; 
  font-size: 21px;
}


a{
  float: left;
  padding: 10px;
  text-decoration: none;
  font-size: 15px;
  border-radius: 4px;
}

#Logo-titulo{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 250%;
  padding: 5px;
  transition: 0.5s;
  text-align:center;
  margin:0 auto;
  color: white;
}

@media only screen and (max-width: 600px) {
  #Logo-titulo {
    font-size:1EM;

  
  }
  #logo{
    width:20%;
    margin-left:-50px;
  }
  
}


</style>
