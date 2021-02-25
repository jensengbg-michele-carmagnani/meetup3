import { shallowMount, createLocalVue } from "@vue/test-utils";
import InfoPage from "@/views/InfoPage.vue";
import index from "@/store/index.js";
import Vuex from "vuex";


const store = new Vuex.Store({ index });

describe("InfoPage.vue", () => {
  let localVue;
  let state;
  beforeEach(() => {
    localVue = createLocalVue();
    state = {
      user: {
        "id":1
      }
    }
  });
  it('should render, after mounted,  an id called "eventInfo" ', () => {
    const store = new Vuex.Store({state});
    
    const wrapper = shallowMount(InfoPage, {
      state,
      store,
      localVue
    });
    const expected = `<section id="eventInfo">`;
    const actual = wrapper.find("#eventInfo");
    expect(actual).toBe(expected);
  });


});
