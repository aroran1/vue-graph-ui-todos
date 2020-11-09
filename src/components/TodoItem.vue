<template>
  <div class="todo-item" v-bind:class="{'is-completed': todo.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete" />
      {{todo.title}}
      <button @click="$emit('del-todo', todo.id)" class="del">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      // error  Unexpected mutation of "todo" prop  vue/no-mutating-props
      // this.todo.completed = !this.todo.completed;
    }
  }
}
</script>

<style scoped>
  .todo-item {
    background-color: #f4f4f4;
    padding: 10px 15px;
    border-bottom: 1px #ccc dotted;
  }

  .is-completed {
    text-decoration: line-through;
  }

  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    border-radius: 12px;
    padding: 5px 8px;
    margin: 0 10px; 
    float: right;
  }
</style>
