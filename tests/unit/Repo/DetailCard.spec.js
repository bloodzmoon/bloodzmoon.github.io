import { shallowMount } from '@vue/test-utils'

import DetailCard from '@/components/Repo/DetailCard.vue'

describe('DetailCard.vue', () => {
  it('renders data from props correctly', () => {
    const props = {
      text: 'Testing',
      number: 1234,
    }
    const wrapper = shallowMount(DetailCard, { propsData: props })
    expect(wrapper.text()).toContain(props.text)
    expect(wrapper.text()).toContain(props.number)
  })

  it('has <String> text as required prop', () => {
    const text = DetailCard.props.text
    expect(text.type).toBe(String)
    expect(text.required).toBe(true)
  })

  it('has <Number> number as required prop', () => {
    const number = DetailCard.props.number
    expect(number.type).toBe(Number)
    expect(number.required).toBe(true)
  })
})
