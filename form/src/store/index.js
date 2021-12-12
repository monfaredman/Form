import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: { backColor: false, token: null, userId: null, tokenExpiration: null },
  getters: {
    changeBackColor(state) {
      return state.backColor;
    },
  },
  mutations: {
    setBackground(state, val) {
      state.backColor = val;
    },
    setUser(state, payload) {
      (state.token = payload.token),
        (state.userId = payload.userId),
        (state.tokenExpiration = payload.tokenExpiration);
    },
  },
  actions: {
    RegisterUserAction(context, Data) {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYS1on89G-iEhadeGTW-4YgF78xY7jQQc",
          Data
        )
        .then(function (response) {
          console.log(response.data);
          context.commit("setUser", {
            token: response.idToken,
            userId: response.localId,
            tokenExprition: response.expiresIn,
          });
          alert("Done!");
        })
        .catch(function (error) {
          console.log(error);
          alert("Error!");
        });
    },
    SignInUser(context, SignInData) {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYS1on89G-iEhadeGTW-4YgF78xY7jQQc",
          SignInData
        )

        .then(function (response) {
          console.log(response.data);
          alert("Done!");
          context.commit("setUser", {
            token: response.idToken,
            userId: response.localId,
            tokenExprition: response.expiresIn,
          });
        })
        .catch(function (error) {
          console.log(error);
          alert("Error!");
        });
    },
  },
});
export default store;
