import { shallowMount, createLocalVue } from '@vue/test-utils'
import Unicon from 'vue-unicons'

import RepoCard from '@/components/Repo/RepoCard.vue'

const localVue = createLocalVue()
localVue.use(Unicon)

describe('RepoCard.vue', () => {
  it('renders data from props correctly', () => {
    const props = {
      name: 'Coolest Code',
      language: 'JavaScript',
      html_url: 'url://index.html',
      stargazers_count: 1111,
      forks_count: 2222,
      size: 3333,
    }
    const wrapper = shallowMount(RepoCard, {
      localVue,
      propsData: props,
    })
    const repoLink = wrapper.find('a').attributes('href')
    expect(wrapper.text()).toContain(props.name)
    expect(wrapper.text()).toContain(props.language)
    expect(repoLink).toBe(props.html_url)
    expect(wrapper.text()).toContain('1,111')
    expect(wrapper.text()).toContain('2,222')
    expect(wrapper.text()).toContain('3,333')
  })

  it('has <String> name as required prop', () => {
    const name = RepoCard.props.name
    expect(name.type).toBe(String)
    expect(name.required).toBe(true)
  })

  it('has <String> language as optional prop', () => {
    const language = RepoCard.props.language
    expect(language.type).toBe(String)
    expect(language.default).toBe('Unknown')
  })

  it('has <String> html_url as required prop', () => {
    const htmlUrl = RepoCard.props.html_url
    expect(htmlUrl.type).toBe(String)
    expect(htmlUrl.required).toBe(true)
  })

  it('has <Number> stargazers_count as required prop', () => {
    const stargazersCount = RepoCard.props.stargazers_count
    expect(stargazersCount.type).toBe(Number)
    expect(stargazersCount.required).toBe(true)
  })

  it('has <Number> forks_count as required prop', () => {
    const forksCount = RepoCard.props.forks_count
    expect(forksCount.type).toBe(Number)
    expect(forksCount.required).toBe(true)
  })

  it('has <Number> size as required prop', () => {
    const size = RepoCard.props.size
    expect(size.type).toBe(Number)
    expect(size.required).toBe(true)
  })
})
