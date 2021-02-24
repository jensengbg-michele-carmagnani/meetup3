import { shallowMount, createLocalVue } from "@vue/test-utils";
import index from "@/store/index.js";
import Vuex from "vuex";



import MainPage from "@/components/MainPage.vue";

describe("MainPage", () => {
  let localVue;
  
   beforeEach(() => {
     localVue = createLocalVue();
     localVue.use(Vuex)
   });
  const store = new Vuex.Store({ index });
  
  it("should, when is mounted, a search bar", () => {
    const wrapper = shallowMount(MainPage,{
      store,
      localVue
  
    });
    const expected = '<input type="text" class="css-input">';
    const actual = wrapper.find(".css-input").html();
    expect(actual).toEqual(expected);
  });
});
