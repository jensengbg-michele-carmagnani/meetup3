import Vue from "vue";
import Vuex from "vuex";
import ax from "axios";

// import { fetchData } from "@/data/data.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showLogin: false,
    url: "https://api.jsonbin.io/b/60368717f1be644b0a64627d",
    urlLogin: "https://api.jsonbin.io/b/6034da77f1be644b0a6397f7",
    apiKey: "$2b$10$g5gmSB.VY51NvZigu8XLieJCl3jy/IV218XvHaLZ0yWcOYyRYHA9G",
    events: Array,
    user: Object,
    correntEvent: String,
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
        let events = await ax.get(`${ctx.state.url}/latest`);
        console.log("data", events.data.events);
        ctx.commit("storeEvents", events.data.events);
      } catch (error) {
        console.log("error in fetch event 2", error);
      }
    },
    async login(ctx, user) {
      let loginUser = user;
      try {
        let loginMebers = await ax.get(`${ctx.state.urlLogin}/latest`);
        // find the user form the api data if exist
        let isMatch = loginMebers.data.users.find(
          (user) => (user.username = loginUser.username)
        );

        // // let isMetch = loginMebersArray.includes("michele");
        console.log("is metch", isMatch);

        // setItem in local storage and commit the user + toggle showlogin
        if (isMatch !== undefined) {
          console.log("isMetch inside");
          sessionStorage.setItem("meetup", JSON.stringify(isMatch));
          ctx.commit("setUser", isMatch);
          ctx.commit("toggleLoggedIn");
        } else {
          alert("password or username wrongs");
        }
      } catch (error) {
        console.log(error);
      }
      // fetch the api JSONbin with the  users
    },
    async setReview(ctx, data) {
      let findObj = this.state.events.find(
        (event) => event.name == data.eventName
      );
      findObj.review.push(data.reviewText);
      console.log("findObj in setreviw", findObj);
      let options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        let review = await ax.put(
          `${ctx.state.url}`,
          {
            events: ctx.state.events,
          },
          options
        );
        console.log("review", review);
      } catch (error) {
        console.log("ERROR IN SETREVIEW", error);
      }
    },
    async enrollUser(ctx, idEvent) {
      let userId = ctx.state.user.id;

      let findObj = this.state.events.find(
        (event) => (event.idEvent = idEvent)
      );
      console.log("findObj in ENROLLUSER", findObj);

      findObj.enrolled.push(userId);

      let options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        let data = await ax.put(
          `${ctx.state.url}`,
          {
            events: ctx.state.events,
          },
          options
        );
        console.log("data ENROLL after fetch", data);
      } catch (error) {
        console.log(error);
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
