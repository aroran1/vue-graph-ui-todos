<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add a new todo..." />
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
  import { v4 as uuidv4 } from 'uuid';
  export default {
    name: 'AddTodo',
    data() {
      return {
        title: ''
      }
    },
    methods: {
      addTodo(e) {
        e.preventDefault();
        const newTodo = {
          id: uuidv4,
          title: this.title,
          completed: false
        };
        this.$emit('add-todo', newTodo);
        this.title = '';
      }
    }
  }
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 10px;
    margin: 20px;
    border-radius: 10px;
    border: 1px #ccc solid;
  }

  input[type="submit"] {
    flex: 2;
    margin: 20px;
    background: #51adcf;
  }
</style>