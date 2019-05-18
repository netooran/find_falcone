import Vue from "vue";
import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import VehiclePicker from "@/components/VehiclePicker.vue";

Vue.use(Vuex);

describe("VehiclePicker", () => {
  let wrapper, vehicles;

  beforeEach(() => {
    vehicles = [
      { name: "Falcon Heavy", total_no: 2, speed: 2, max_distance: 437 },
      { name: "BFR", total_no: 2, speed: 2, max_distance: 437 }
    ];

    const store = new Vuex.Store({ state: { vehicles } });

    wrapper = shallowMount(VehiclePicker, { store });
  });

  it("has the correct value for vehicles", () => {
    expect(wrapper.vm.vehicles).toEqual(vehicles);
  });

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
