<template>
  <div>
    <home></home>
  </div>
</template>

<script>

/* eslint no-unused-vars:0 */

import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data() {
      console.log(this)
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
