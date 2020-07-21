<template>
  <div class="page">
    <Profile :profile="profile" />
    <Detail :profile="profile" />
    <Search :value.sync="search" placeholder="Search my repositories" />
    <RepoArea :repos="repos" />
  </div>
</template>

<script>
import Axios from 'axios'
import { Profile, Detail, Search, RepoArea } from '@/components/Repo'

export default {
  name: 'Repo',
  components: {
    Profile,
    Detail,
    Search,
    RepoArea,
  },
  data: () => ({
    search: '',
    profile: {
      name: 'Loading...',
      login: 'loading',
      created_at: null,
      public_repos: 0,
      followers: 0,
      following: 0,
    },
    repos: [],
  }),
  methods: {
    async getProfile() {
      const { data } = await Axios.get(
        'https://api.github.com/users/bloodzmoon'
      )
      this.profile = data
    },
    async getRepos() {
      const { data } = await Axios.get(
        'https://api.github.com/users/bloodzmoon/repos'
      )
      this.repos = data
    },
  },
  mounted() {
    this.getProfile()
    this.getRepos()
  },
}
</script>

<style scoped>
.page {
  background: #f6f8fa;
}
</style>
