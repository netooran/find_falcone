import { shallowMount } from "@vue/test-utils";
import Vehicle from "@/components/Vehicle.vue";

describe("Vehicle", () => {
  let wrapper, vehicle;

  beforeEach(() => {
    vehicle = { name: "BFR", total_no: 2, speed: 2, max_distance: 437 };
    wrapper = shallowMount(Vehicle, { propsData: { vehicle } });
  });

  it("renders name, total no, speed and max distance when passed", () => {
    expect(wrapper.text()).toMatch(vehicle.name);
    expect(wrapper.text()).toMatch(vehicle.total_no.toString());
    expect(wrapper.text()).toMatch(`${vehicle.speed} au/h`);
    expect(wrapper.text()).toMatch(`${vehicle.max_distance} au`);
  });

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
