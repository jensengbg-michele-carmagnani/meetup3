import Vue from "vue";
import Vuex from "vuex";
import ax from "axios";

// import { fetchData } from "@/data/data.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showLogin: true,
    url: "https://api.jsonbin.io/b/602e35b84177c81b39c7d9d4/3",
    urlLogin: "https://api.jsonbin.io/b/602fc941a3e9f25d023c32e4",
    apiKey: "$2b$10$g5gmSB.VY51NvZigu8XLieJCl3jy/IV218XvHaLZ0yWcOYyRYHA9G",
    events: Array,
    user: Object,
  },
  mutations: {
    storeEvents(state, data) {
      state.events = data;
    },
    toggleLoggedIn(state) {
      state.showLogin = !state.showLogin;
    },
    setUser(state, data) {
      state.user = data;
    },
    logoutUser(state) {
      state.user = Object;
      state.showLogin = false;
    },
  },
  actions: {
    async fetchEvents(ctx) {
      try {
        let events = await ax.get(`${ctx.state.url}`);
        console.log("data", events.data.events);
        ctx.commit("storeEvents", events.data.events);
      } catch (error) {
        console.log("error in fetch event 2", error);
      }
    },
    async login(ctx, user) {
      try {
        let loginUser = user;
        // fetch the api Jsonbin with the all the users
        let login = await ax.get(`${ctx.state.urlLogin}`);
        console.log("login from jsonBin", login.data.users);

        //find the user form the api data if exist
        let success = login.data.users.find(
          (user) => (user.username = loginUser.username)
        );
        // setItem in local storage and commit the user + toggle showlogin
        if (success) {
          console.log("success", success);
          sessionStorage.setItem("meetup", JSON.stringify(loginUser));
          ctx.commit("setUser", success);
          ctx.commit("toggleLoggedIn");
        } else {
          alert("password or username wrongs");
        }
      } catch (error) {
        console.error("something went wrong");
      }
    },
    async setReview(ctx, data) {
      let findObj = this.state.events.find((event) => event.name == data.name);
      console.log("find obj", findObj);

      let options = {
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": ctx.state.apiKey,
        },
      };
      try {
        let review = await ax.post(
          `${ctx.state.url}`,
          {
            events: ctx.state.events,
            review: data,
          },
          options
        );
        console.log("review", review);
      } catch (error) {
        console.log("error for comment put", error);
      }
    },
  },
  getters: {
    events(state) {
      return state.events;
    },
  },
  modules: {},
});
