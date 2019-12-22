<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {
    axios.get('ping').then(()=> {
      console.log("ping oui");
      }).catch(()=>{
      alert("cannot connect to API");
    });
  },
  methods : {
  }
}
</script>
