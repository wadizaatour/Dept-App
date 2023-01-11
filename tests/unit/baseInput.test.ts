import BaseInput from "../../src/components/BaseInput.vue"
import { mount } from "@vue/test-utils";
test("check if the component is visible", async () => { 
  const name = 'test'
  const validationRules = ()=>{}
  const typeInput = 'text'
  const labelTitle = 'test'
  const wrapper = mount(BaseInput , { props: { name, validationRules, typeInput, labelTitle } } as any); 
  expect(wrapper.isVisible()).toBe(true)
});