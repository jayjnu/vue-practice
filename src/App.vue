<template>
  <div id="app">
    <header-gnb></header-gnb>
    <main class="app-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import HeaderGnb from './components/Header.vue'

export default {
  name: 'app',
  components: { HeaderGnb }
}
</script>
<style src="./assets/reset.css" lang="css"></style>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .app-main {position: relative; min-height: 500px;overflow: hidden;}
</style>
