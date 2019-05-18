import Vue from "vue";
import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import Planet from "@/components/Planet.vue";

Vue.use(Vuex);

describe("Planet", () => {
  let wrapper, planet, store;

  beforeEach(() => {
    planet = { name: "Toliman", distance: 437 };
    store = new Vuex.Store({ state: { selectedPlanet: undefined } });
    wrapper = shallowMount(Planet, { store, propsData: { planet } });
  });

  it("renders name and distance when passed", () => {
    expect(wrapper.text()).toMatch(planet.name);
    expect(wrapper.text()).toMatch(`${planet.distance} au`);
  });

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("has the expected html structure when selected", () => {
    store.replaceState({ selectedPlanet: wrapper.key });

    expect(wrapper.element).toMatchSnapshot();
  });
});
