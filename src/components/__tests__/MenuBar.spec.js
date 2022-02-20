import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MenuBar from "../MenuBar.vue";

describe("MenuBar", () => {
  it("renders properly", () => {
    const wrapper = mount(MenuBar, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
