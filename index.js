/* global Vue */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello Vue JS!",
      name: "Dani",
      showInfo: false,
      fruits: ["apple", "banana", "cantaloupe"],
      newFruit: "",
      todos: []
    };
  },
  methods: {
    changeMessage: function() {
      this.message = "Neat......";
    },
    addNewFruit: function() {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    },
    loadTodos: function() {
      axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
        console.log(response.data);
        this.todos = response.data;
      });
    }
  }
});