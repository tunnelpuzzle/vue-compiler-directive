<template>
  <div id="app">
    <div v-show="false">directive 1</div>
    <div v-show="true">directive 2</div>
    <div v-show="false">directive 3</div>
    <div v-show="true">directive 4</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
