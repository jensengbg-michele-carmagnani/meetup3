import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
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


});
