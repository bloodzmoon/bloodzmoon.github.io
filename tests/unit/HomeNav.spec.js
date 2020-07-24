import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Unicon from 'vue-unicons'

import HomeNav from '@/components/HomeNav.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Unicon)
const router = new VueRouter()

const wrapper = shallowMount(HomeNav, { localVue, router })

describe('HomeNav.vue', () => {
  it('sets the correct default data', () => {
    const defaultData = HomeNav.data()
    const expectedData = [
      { path: '/', icon: 'home-alt', text: 'Home' },
      { path: '/repo', icon: 'diary', text: 'Repo' },
      { path: '/about', icon: 'at', text: 'Contact' },
    ]
    expect(defaultData.routes).toEqual(expectedData)
  })

  it('renders three <a> correctly', () => {
    const elements = wrapper.findAll('.nav-item')
    expect(elements.length).toBe(3)

    const links = ['Home', 'Repo', 'Contact']
    links.forEach((link) => {
      expect(wrapper.text()).toContain(link)
    })
  })
})
