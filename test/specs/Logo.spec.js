import test from 'ava'
import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

test('is a Vue instance', (t) => {
  let wrapper = mount(Logo)
  t.truthy(wrapper.vm)
})
