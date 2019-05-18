import Vue from "vue";
import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import PlanetPicker from "@/components/PlanetPicker.vue";

Vue.use(Vuex);

describe("PlanetPicker", () => {
  let wrapper, planets;

  beforeEach(() => {
    planets = [
      { name: "Toliman", distance: 437 },
      { name: "Proxima Centauri", distance: 1 }
    ];

    const store = new Vuex.Store({ state: { planets } });
    wrapper = shallowMount(PlanetPicker, { store });
  });

  it("has the correct value for planets", () => {
    expect(wrapper.vm.planets).toEqual(planets);
  });

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
