<template>
  <div class="about">
    <h1>About</h1>
    <p>This is the vue todo app.</p>
    <h2>What is Lorem ipsum?</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
  h1, h2, p {
    margin: 10px 0 5px;
    padding: 0px 20px 10px;
  }
  .about {
    padding: 10px 20px;
  }
</style>
