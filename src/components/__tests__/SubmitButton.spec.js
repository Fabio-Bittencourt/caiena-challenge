import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SubmitButton from "../SubmitButton.vue";

describe("SubmitButton", () => {
  it("renders properly", () => {
    const wrapper = mount(SubmitButton, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
