import Vue from "vue";
import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

Vue.use(Vuex);

describe("App", () => {
  let wrapper, planets, vehicles;
  let store, state, actions;

  beforeEach(() => {
    planets = [
      { name: "Toliman", distance: 437 },
      { name: "Proxima Centauri", distance: 1 }
    ];

    vehicles = [
      { name: "Toliman", distance: 437 },
      { name: "Proxima Centauri", distance: 1 }
    ];

    state = { planets: [], vehicles: [], selectedPlanet: undefined };
    actions = { getPlanets: jest.fn(), getVehicles: jest.fn() };

    store = new Vuex.Store({ state, actions });
    wrapper = shallowMount(App, { store });
  });

  it("has the expected html structure when no data given", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("has the expected html structure when planet data given", () => {
    store.replaceState({ planets });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("has the expected html structure when vehicles data given", () => {
    store.replaceState({ vehicles });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("has the expected html structure when vehicles data given and a planet is selected", () => {
    store.replaceState({ vehicles, selectedPlanet: 1 });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("has the expected html structure when all data given", () => {
    store.replaceState({ vehicles, selectedPlanet: 1 });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("has the expected html structure on error", () => {
    store.replaceState({ errors: "Some error" });

    expect(wrapper.text()).toMatch(
      "Unfortunately our ravens did not come back. Try again later."
    );
    expect(wrapper.element).toMatchSnapshot();
  });

  it("fetches planets and vehicles on creation", () => {
    expect(actions.getPlanets).toHaveBeenCalled();
    expect(actions.getVehicles).toHaveBeenCalled();
  });
});
