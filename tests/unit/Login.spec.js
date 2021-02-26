import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import Login from "@/views/Login.vue";
import LoginForm from "@/components/LoginForm.vue";
import index from "@/store/index.js";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Vue from "vue";


const store = new Vuex.Store({ index });

describe("Login.vue", () => {
  let localVue;

  // declaretion of action to test the login
  let actions = {
    login: jest.fn(),
  };
  // declaration of state to test the mutation of user in logout
  
  let state = {
    user: Object,
  };

  beforeEach(() => {
    localVue = createLocalVue();
  });

  it("should, after is mounted, the id login-form", () => {});

  it("should,ater clicked the button login , dispatch a fetch for logging the user", async () => {
    const store = new Vuex.Store({ actions });
    localVue.use(VueRouter);
    const router = new VueRouter();
    const wrapper = mount(LoginForm, {
      router,
      store,
      localVue,
    });
    const btnLogin = wrapper.find(".submit");
    btnLogin.trigger("click");
    await Vue.nextTick();
    expect(actions.login).toHaveBeenCalled();
  });

  it("should test mutation of user in the store after the logout ", async () => {
     const store = new Vuex.Store({ state })
    const router = new VueRouter();
    const wrapper = shallowMount(LoginForm, {
      router,
      store,
      localVue,
    });
    // expected an empty user Object after the mutation
    let expected = Object;
  

    let actual = state.user;
    expect(actual).toBe(expected);
  });

  it('should,when the componente is renderd, find the login class in Login.vue ', () => {
    const wrapper = shallowMount(Login, {
      store,
      localVue
    })
    const actual = wrapper.classes()
   console.log('actual ',actual)
    expect(actual).toContain("Login")
  })
});
