<template>
  <div id="app-root">
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import axios from 'axios';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo
  },
  data() { 
    return {
      todos: []
    }
  }, 
  methods: {
    deleteTodo(id) {
      // this.todos = this.todos.filter(todo => todo.id !== id) - solution without axios
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        console.log(res);
        this.todos = this.todos.filter(todo => todo.id !== id)
      })
      .catch(error => console.log(`error = ${error}`));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;

      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
      .then(res => this.todos = [...this.todos, res.data])
      .catch(error => console.log(`error = ${error}`));

      // this.todos = [...this.todos, newTodo]; - solution without axios
    }
  },
  // this method runs when the component loads
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => this.todos = response.data )
      .catch(error => console.log(`error = ${error}`));
  }
}
</script>

<style>
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
