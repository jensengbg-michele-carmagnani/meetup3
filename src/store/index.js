import Vue from "vue";
import Vuex from "vuex";
import ax from "axios";

// import { fetchData } from "@/data/data.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "https://api.jsonbin.io/b/60379bc20866664b10830aa0",
    urlLogin: "https://api.jsonbin.io/b/6034da77f1be644b0a6397f7",
    apiKey: "$2b$10$g5gmSB.VY51NvZigu8XLieJCl3jy/IV218XvHaLZ0yWcOYyRYHA9G",
    events: Array,
    user: Object,
    correntEvent: String,
    idEvent: Number,
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
    },
    setId(state, id) {
      state.idEvent = id;
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

        // setItem in local storage and commit the user + toggle showlogin
        if (isMatch !== undefined) {
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
    async enrollUser(ctx, event) {
      let userId = ctx.state.user.id;

      let findEvent = ctx.state.events.find((e) => e.idEvent === event);

      if (!findEvent.enrolled.find((e) => e === userId)) {
        findEvent.enrolled.push(userId);

        let options = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          let data = await ax.put(
            `${ctx.state.url}`,
            { events: ctx.state.events },
            options
          );
          console.log("You are  ENROLLED ", data);
        } catch (error) {
          console.log(error);
        }
      }
    },
    async newEvent(ctx, NewEvent) {
      let id = ctx.state.events.length + 1;
      NewEvent.idEvent = id;
      ctx.state.events.push(NewEvent);
      let options = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        let data = await ax.put(
          `${ctx.state.url}`,
          { events: ctx.state.events },
          options
        );
        console.log("data NewEvent", data);
      } catch (error) {
        console.log(error);
      }
    },
    checkState(ctx) {
      if (sessionStorage.getItem("meetup") !== null) {
        ctx.commit("setUser", JSON.parse(sessionStorage.getItem("meetup")));
      }
    },
    findEvent(ctx, id) {
      ctx.commit("setId", id);
    },
  },

  getters: {
    checkUser(state) {
      if (state.user.name) return state.user.name;
    },
    events(state) {
      return state.events;
    },
    event(state) {
      if (state.events.find) {
        return state.events.find((event) => event.idEvent == state.idEvent);
      } else {
        return;
      }
    },
    // enrollState(state) {
    //   if (state.events.find) {
    //     let event = state.events.find(
    //       (event) => (event.idEvent == state.idEvent)
    //     );
    //     return event.enrolled.find((e) => e == state.user.id);
    //   } else {
    //     return;
    //   }
    // },
  },
  modules: {},
});
