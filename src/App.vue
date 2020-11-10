<template>
  <div>
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layout/Header';
export default {
  name: 'App',
  components: {
    Header
  },
  mounted() {
    this.$store.dispatch("setCurrentJoke")
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
