import { shallowMount, createLocalVue } from "@vue/test-utils";
import InfoPage from "@views/InfoPage.vue";

describe('InfoPage.vue', () => {
  it('should render, after mounted,  an id called "eventInfo" ', () => {
    const wrapper = shallowMount(InfoPage)
    const expected = `<section id="eventInfo">`
    const actual = wrapper.find('#eventInfo')
    expect(actual).toBe(expected)
    })
})