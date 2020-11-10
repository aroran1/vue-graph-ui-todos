<template>
  <div class="jokes">
    <h1>Joke Of The day</h1>
    <div class="joke">
      <p>{{joke}}</p>
      <button class="btn" @click="updateJoke">Update Joke</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JokeToday',
  methods: {
    updateJoke() {
      this.$store.dispatch("setCurrentJoke");
    }
  },
  mounted() {
    this.joke = this.$store.getters.getCurrentJoke;
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
  .joke {
    background: #f4f4f4;
    padding: 100px 20px;
    width: 100%;
    height: 300px;
    text-align: center;
    color: #2c3e50;
    vertical-align: middle;
    font-weight: bold;
    font-size: 20px;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #51adcf;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
    margin-top: 40px;
  }

  .btn:hover {
    background: #666;
  }
</style>
