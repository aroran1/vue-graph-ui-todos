<template>
  <div class="jokes">
   <h1>All Jokes</h1>
   <h2 v-for="(joke, idx) in jokes" :key="idx">
     {{joke}}
   </h2>
  </div>
</template>

<script>
export default {
  name: 'Jokes',
  computed: {
    jokes() {
      return this.$store.getters.getAllJokes 
    }
  }
}
</script>

<style scoped>
  h1, h2, p {
    margin: 10px 0 5px;
    padding: 0px 20px 10px;
  }
  .jokes {
    padding: 10px 20px;
  }
  h2 {
    font-size: 16px;
  }
</style>
