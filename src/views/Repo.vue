<template>
  <div class="page">
    <Profile :profile="profile" />
    <Detail :profile="profile" />

    <section class="repo">
      <div class="repo-title">Top Repos</div>
      <div class="repo-area">
        <RepoCard v-for="repo in repos" :key="repo.id" :repo="repo" />
      </div>
    </section>
  </div>
</template>

<script>
import Axios from 'axios'
import Profile from '@/components/Repo/Profile'
import Detail from '@/components/Repo/Detail'
import RepoCard from '@/components/Repo/RepoCard'

export default {
  name: 'Repo',
  components: {
    Profile,
    Detail,
    RepoCard,
  },
  data: () => ({
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

.repo {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.repo-title {
  font-size: 28px;
}

.repo-area {
  margin: 40px 0;
  display: flex;
  flex-flow: row wrap;
}
</style>
