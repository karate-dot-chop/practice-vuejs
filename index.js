/* global Vue */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello Vue JS!",
      name: "Dani",
      showInfo: false,
      fruits: ["apple", "banana", "cantaloupe"],
      newFruit: ""
    };
  },
  methods: {
    changeMessage: function() {
      this.message = "Neat......";
    },
    addNewFruit: function() {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    }
  }
});