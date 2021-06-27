import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: { backColor: false },
  getters: {
    changeBackColor2(state) {
      return (state.backColor = !state.backColor);
    },
    changeBackColor3(state) {
      return (state.backColor = !state.backColor);
    },
  },
  mutations: {},
  actions: {
    RegisterUser(context, RegisterData) {
      axios
        .post("https://jsonplaceholder.typicode.com/users", RegisterData)
        .then(function (response) {
          console.log(response);
          alert("Done!");
        })
        .catch(function (error) {
          console.log(error);
          alert("Error!");
        });
    },
  },
});
export default store;
