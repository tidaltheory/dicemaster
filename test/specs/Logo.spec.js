import { mount } from '@vue/test-utils'

import test from 'ava'

import Logo from '~/components/Logo.vue'

test('is a Vue instance', (t) => {
    let wrapper = mount(Logo)
    t.truthy(wrapper.vm)
})
