import { shallowMount } from "@vue/test-utils";
import Planet from "@/components/Planet.vue";

describe("Planet", () => {
  let wrapper, planet;

  beforeEach(() => {
    planet = { name: "Toliman", distance: 437 };
    wrapper = shallowMount(Planet, { propsData: { planet } });
  });

  it("renders name and distance when passed", () => {
    expect(wrapper.text()).toMatch(planet.name);
    expect(wrapper.text()).toMatch(`${planet.distance} au`);
  });

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
