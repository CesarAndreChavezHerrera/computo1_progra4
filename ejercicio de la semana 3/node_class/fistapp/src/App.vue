<template>
  <div id="app">
    <!--HelloWorld msg="Welcome to Your Vue.js App"/-->
    <fistComponet/>
  </div>
</template>

<script>
import fistComponet from './components/fistComponet.vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
   // HelloWorld,
    fistComponet
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
