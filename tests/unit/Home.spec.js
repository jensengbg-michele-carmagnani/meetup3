import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Event from "@/components/Event.vue";
import Foot from "@/components/Foot.vue";
import MainPage from "@/components/MainPage.vue";
import Home from "@/views/Home.vue";
import App from "@/App.vue";
import index from "@/store/index.js";
import Vuex from "vuex";

const store = new Vuex.Store({ index });

describe("MainPage.vue", () => {
  let localVue;
  beforeEach(() => {
    localVue = createLocalVue();
  });

  it("should, when the App component is mounted, dispach an action to Vuex", () => {
    localVue.use(VueRouter);
    const router = new VueRouter();

    let actions = {
      fetchEvents: jest.fn(),
    };
    const store = new Vuex.Store({ actions });
    const wrapper = shallowMount(App, {
      store,
      localVue,
      router,
    });
    expect(actions.fetchEvents).toHaveBeenCalled();
  });

  // it("should, receive data from fetch and commit it to events array ", () => {
    
  //   let mutations = {
  //     storeEvents: jest.fn(),
  //   };
  //  
  //   localVue.use(Vuex)
  //   const store = new Vuex.Store({ mutations });
  //   expect(mutations.storeEvents).toHaveBeenCalled();
  // });

  it("should render Foot coponent", () => {
    const wrapper = mount(Home, {
      store,
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render a footer component", () => {
    const wrapper = mount(Home, {
      store,
      localVue,
    });
    const footerComp = wrapper.findComponent(Foot);
    expect(footerComp.exists()).toBe(true);
  });

  it("should render the Event using a real Vuex getter", () => {
    const wrapper = mount(Home, {
      store,
      localVue,
    });
    const eventComp = wrapper.findComponent(MainPage);
    expect(eventComp.exists()).toBe(true);
  });

  it("should display a serch bar in header", () => {
    const wrapper = shallowMount(Home);
    const expected = '<input type="text" class="css-input">';
    const actual = wrapper.find(".css-input").html();
    expect(actual).toEqual(expected);
  });
});
