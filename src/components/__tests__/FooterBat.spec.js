import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FooterBar from "../FooterBar.vue";

describe("FooterBar", () => {
  it("renders properly", () => {
    const wrapper = mount(FooterBar, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
