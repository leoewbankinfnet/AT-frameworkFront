<template>
  <div class="home">
    <Header/>



    
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'Jogos',
  components:{
    Header
  },
  props: {
 
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
