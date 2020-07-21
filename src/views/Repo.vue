<template>
  <div class="page">
    <Profile :profile="profile" />
    <Detail :profile="profile" />
    <Search :value.sync="search" placeholder="Search my repositories" />
    <RepoArea v-if="searchRepos.length" :repos="limitSearchRepos" />
    <p class="plain-text">{{ foundCount }}</p>
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
  computed: {
    searchRepos: function() {
      if (!this.search) return this.repos
      return this.repos.filter(
        (repo) =>
          repo.name?.toLowerCase().includes(this.search.toLowerCase()) ||
          repo.language?.toLowerCase().includes(this.search.toLowerCase())
      )
    },
    limitSearchRepos: function() {
      return this.searchRepos.slice(0, 6)
    },
    foundCount: function() {
      return this.searchRepos.length > 1
        ? `Found ${this.searchRepos.length} repos`
        : `Found ${this.searchRepos.length} repo`
    },
  },
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
  min-height: 100vh;
}

.plain-text {
  text-align: center;
  margin: 0;
  padding: 20px 0;
  padding-bottom: 40px;
  font-size: 20px;
  color: #a2a2a2;
}
</style>
