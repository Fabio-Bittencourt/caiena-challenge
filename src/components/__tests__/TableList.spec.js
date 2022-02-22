import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TableList from "../TableList.vue";

describe("TableList", () => {
  it("renders properly", () => {
    const wrapper = mount(TableList, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
