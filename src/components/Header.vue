<template>
  <div>
    
  <div class="header">
      <b-navbar id="navbar" toggleable="lg" type="dark" variant="info">
        <b-navbar-brand id="Logo-titulo" href="/"><img src="../assets/logo.jpg" id="logo"> Jogoteca Ferozmente Animal</b-navbar-brand>
        
      </b-navbar>
    </div> 



  </div>
</template>

<script>
export default {
  name: 'Header',
}

</script>

<style scoped>

.header{
  display: block;
  width: auto;
  height: 30px;
}

#logo{
  width:15%;
  border-radius: 99%;
  align-items:left;
  transition: 0.5s;
}


.navbar{
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
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  border-radius: 4px;
}

#Logo-titulo{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 250%;
  padding: 10px;
  transition: 0.5s;
  text-align:center;
  margin:0 auto;
}

@media only screen and (max-width: 600px) {
 #Logo-titulo {
    font-size:1.1EM;

  }
  #logo{
    width:20%;
  }
  .header{
    height:-10px;
  }
 
}


</style>
