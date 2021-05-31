/* global Vue */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello Vue JS!",
      name: "Dani",
      showInfo: false
    };
  },
  methods: {
    changeMessage: function() {
      this.message = "Neat......";
    }
  }
});