<template>
  <div id="app-root">
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Header,
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
