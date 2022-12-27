<script setup lang="ts">
import NavBar from "./components/NavBar.vue";

  components:{
    NavBar
  }
</script>

<template>
  <div class="app">
    <nav-bar/>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
