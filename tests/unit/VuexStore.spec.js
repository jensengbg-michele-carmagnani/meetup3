import Vuex from "vuex";
import {  createLocalVue } from "@vue/test-utils";


const localVue = createLocalVue();
localVue.use(Vuex);

describe("Vuex store  ", () => {
  const store = new Vuex.Store({
    state: {
      events: {
        name: "Vasco Rossi",
        location: "verona",
        date: "Nov 11",
        timeIn: "20",
        timeOut: "23",
        tickets: 0,
        price: "150€",
        ticketsSold: 200,
      },
    },
    getters: {
      events(state) {
        return state.events;
      },
    },
  });
  it("should test the store in Vuex  ", () => {
    const event = store.state.event;
    console.log("event", event);
    expect(store.state.events.name).toEqual("Vasco Rossi");
  });
  it('should test getter in store', () => {
      
  })
  
});
