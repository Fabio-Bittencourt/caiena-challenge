import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import InputText from "../InputText.vue";

describe("InputText", () => {
  it("renders properly", () => {
    const wrapper = mount(InputText, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
