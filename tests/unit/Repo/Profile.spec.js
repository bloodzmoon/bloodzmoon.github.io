import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Unicon from 'vue-unicons'

import Profile from '@/components/Repo/Profile.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Unicon)
const router = new VueRouter()

describe('Profile.vue', () => {
  it('renders data from props correctly', () => {
    const props = {
      name: 'John',
      login: 'john1234',
      created_at: '1, Jan 2020',
      avatar_url: 'url://avatar.jpg',
      html_url: 'url://index.html',
    }
    const wrapper = shallowMount(Profile, {
      localVue,
      router,
      propsData: props,
    })
    const avatarSrc = wrapper.find('img').attributes('src')
    const profileLink = wrapper.find('a').attributes('href')
    expect(wrapper.text()).toContain(props.name)
    expect(wrapper.text()).toContain(props.login)
    expect(wrapper.text()).toContain('January 1, 2020')
    expect(avatarSrc).toBe(props.avatar_url)
    expect(profileLink).toBe(props.html_url)
  })

  it('has <String> name as required prop', () => {
    const name = Profile.props.name
    expect(name.type).toBe(String)
    expect(name.required).toBe(true)
  })

  it('has <String> login as required prop', () => {
    const login = Profile.props.login
    expect(login.type).toBe(String)
    expect(login.required).toBe(true)
  })

  it('has <String> created_at as required prop', () => {
    const createdAt = Profile.props.created_at
    expect(createdAt.type).toBe(String)
    expect(createdAt.required).toBe(true)
  })

  it('has <String> avatar_url as required prop', () => {
    const avatarUrl = Profile.props.avatar_url
    expect(avatarUrl.type).toBe(String)
    expect(avatarUrl.required).toBe(true)
  })

  it('has <String> html_url as required prop', () => {
    const htmlUrl = Profile.props.html_url
    expect(htmlUrl.type).toBe(String)
    expect(htmlUrl.required).toBe(true)
  })
})
