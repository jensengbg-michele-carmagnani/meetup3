import { shallowMount, createLocalVue } from "@vue/test-utils";
import InfoPage from "@/views/InfoPage.vue";
import index from "@/store/index.js";
import VueRouter from "vue-router";
import Vuex from "vuex";

const store = new Vuex.Store({ index });

describe("InfoPage.vue", () => {
  let localVue;

  const router = new VueRouter();

  beforeEach(() => {
    localVue = createLocalVue();
  });
  it('find the ',()=> {
    
  })
  it('should render, after mounted,  an id called "eventInfo" ', () => {
    localVue.use(VueRouter);

    const store = new Vuex.Store({
      state: {
        events: [{ id: 1 }],
      },
    });
    const $route = {
      params: {
        id: 1,
      },
    };
    const wrapper = shallowMount(InfoPage, {
      mocks: {
        $route,
      },
      store,
      localVue,
    });
    const expected = `<section class="eventInfo">`;
    const actual = wrapper.find(".eventInfo").html();
    expect(actual).toBe(expected);
  });
});
