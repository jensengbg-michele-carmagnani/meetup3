import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import MainPage from "@/components/MainPage.vue";
import Event from "@/components/Event.vue";
import Foot from "@/components/Foot.vue";
import Home from "@/views/Home.vue";

import index from "@/store/index.js";
import Vuex from "vuex";
import Vue from "vue";

const localVue = createLocalVue()
Vue.use(Vuex);

const store = new Vuex.Store({index});

describe("MainPage.vue", () => {
  it("should find a title of the event ", () => {
    const wrapper = mount(Event, {
      propsData: {
        event: {
          name: " Vasco Rossi",
        },
      },
    });
    const eventName = wrapper.find(".name").text();
    console.log(eventName);
    expect(eventName).toBe("Vasco Rossi");
  });
  it("should render a footer component", () => {
    const wrapper = mount(Home, {
      localVue,
      store,
      

      
    });
    const footer = wrapper.findComponent(Foot);
    expect(footer.exists()).toBe(true);
  });
  // it("should render the event using a real Vuex getter", () => {
  //   const wrapper = mount(MainPage, {
  //     store,
  //     localVue,
  //   });

  //   const actual = wrapper.find(".event-img").html();
  //   expect(actual).toEqual(
  //     '<img src="https://vuejs.org/images/logo.png" alt="" class="event-img">'
  //   );
  // });
  // it('should display a serch bar in header', () => {
  //   const wrapper = shallowMount(Home)
  //   const expected = '<input type="text" class="css-input">';
  //   const actual = wrapper.find(".css-input").html();
  //   expect(actual).toEqual(expected)
  // })
});
