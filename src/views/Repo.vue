<template>
  <div class="page">
    <Profile v-bind="profile" />
    <Detail :profile="profile" />
    <div class="stat-group">
      <div class="stat">
        Overall language
        <div class="stat-card circle">
          <StatCircle v-if="loaded" :repos="repos" />
        </div>
      </div>
      <div class="stat">
        Most starred
        <div class="stat-card bar">
          <StatBar v-if="loaded" :repos="repos" />
        </div>
      </div>
    </div>
    <div class="repo-area-title">My Repositories</div>
    <Search :value.sync="search" placeholder="Search my repositories" />
    <RepoArea v-if="searchRepos.length" :repos="limitSearchRepos" />
    <p class="plain-text">{{ foundCount }}</p>
  </div>
</template>

<script>
import Axios from 'axios'
import {
  Profile,
  Detail,
  Search,
  RepoArea,
  StatBar,
  StatCircle,
} from '@/components/Repo'

export default {
  name: 'Repo',
  components: {
    Profile,
    Detail,
    Search,
    RepoArea,
    StatBar,
    StatCircle,
  },
  data: () => ({
    search: '',
    profile: {
      name: 'Loading...',
      login: 'loading',
      created_at: '',
      avatar_url: '',
      html_url: '',
      public_repos: 0,
      followers: 0,
      following: 0,
    },
    repos: [],
    loaded: false,
  }),
  computed: {
    searchRepos: function () {
      if (!this.search) return this.repos
      return this.repos.filter(
        (repo) =>
          repo.name?.toLowerCase().includes(this.search.toLowerCase()) ||
          repo.language?.toLowerCase().includes(this.search.toLowerCase())
      )
    },
    limitSearchRepos: function () {
      return this.searchRepos.slice(0, 6)
    },
    foundCount: function () {
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
        'https://api.github.com/users/bloodzmoon/repos?sort=pushed'
      )
      this.repos = data
    },
  },
  mounted() {
    this.getProfile()
    this.getRepos()
    this.loaded = true
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

.stat-group {
  margin: 20px auto;
  max-width: 1000px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

.stat {
  font-size: 24px;
  font-weight: bold;
}

.stat-card {
  width: 440px;
  height: 400px;
  border-radius: 6px;
  box-shadow: 0 10px 25px -15px rgba(0, 0, 0, 0.2);
  margin: 20px 0;
  background: white;
}

.circle {
  padding: 0 20px;
}

.bar {
  padding: 20px 40px 0 40px;
}

.repo-area-title {
  width: 800px;
  margin: 60px auto 20px auto;
  padding: 0 20px;
  font-size: 32px;
  font-weight: bold;
}

@media screen and (max-width: 450px) {
  .stat {
    width: 100%;
    padding: 0 20px;
  }
  .stat-card {
    width: 100%;
    height: 80vw;
  }
}
</style>
