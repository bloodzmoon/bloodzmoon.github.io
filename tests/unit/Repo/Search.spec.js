import { shallowMount, createLocalVue } from '@vue/test-utils'
import Unicon from 'vue-unicons'

import Search from '@/components/Repo/Search.vue'

const localVue = createLocalVue()
localVue.use(Unicon)

describe('Search.vue', () => {
  const props = { value: 'some text' }
  const wrapper = shallowMount(Search, { localVue, propsData: props })
  const input = wrapper.find('input')

  it('renders value correctly', () => {
    expect(input.element.value).toBe(props.value)
  })

  it('emits update when typing', () => {
    input.trigger('input')
    expect(wrapper.emitted()['update:value']).toBeTruthy()
  })

  it('has <String> value as required prop', () => {
    const value = Search.props.value
    expect(value.type).toBe(String)
    expect(value.required).toBe(true)
  })

  it('has <String> placeholder as optional prop', () => {
    const value = Search.props.placeholder
    expect(value.type).toBe(String)
    expect(value.default).toBe('')
  })
})
