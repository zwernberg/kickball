<template>
  <div id="app">
    <img src="./assets/logo.jpg" height="200" width="200">
    <div class='container'>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list-group-item {
    padding-bottom:10px !important;
    height: 75px;
}

.row {
  padding-bottom: 50px
}

</style>
