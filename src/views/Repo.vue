<template>
  <div class="page">
    <section class="profile">
      <img class="profile-img" :src="profile.avatar_url" />
      <span class="name">{{ profile.name }}</span>
      <span class="mention">@{{ profile.login }}</span>
      <span class="joined">
        Joined
        {{ new Date(profile.created_at).toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'}) }}
      </span>
    </section>

    <section class="detail">
      <div class="detail-group">
        <div class="detail-card">
          <span class="detail-number">{{ profile.public_repos }}</span>
          <span class="detail-text">REPOSITORIES</span>
        </div>
        <div class="detail-card">
          <span class="detail-number">{{ profile.followers }}</span>
          <span class="detail-text">FOLLOWERS</span>
        </div>
        <div class="detail-card">
          <span class="detail-number">{{ profile.following }}</span>
          <span class="detail-text">FOLLOWING</span>
        </div>
      </div>
    </section>

    <section class="repo">
      <div class="repo-title">Top Repos</div>
      <div class="repo-area">
        <Card v-for="repo in repos" :key="repo.id" :repo="repo" />
      </div>
    </section>
  </div>
</template>

<script>
import Card from '@/components/Repo/Card'
import Axios from 'axios'

export default {
  name: 'Repo',
  components: {
    Card,
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

.profile {
  width: 100%;
  height: 480px;
  color: white;
  background: #1a1e22;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile-img {
  width: 180px;
  height: 180px;
  background: darkslategray;
  border-radius: 50%;
  border: 4px solid #26aefd;
  display: block;
  margin: 20px;
}

.name {
  font-size: 36px;
  margin: 10px;
}

.mention {
  color: #26aefd;
  font-size: 24px;
}

.joined {
  color: rgb(149, 155, 175);
  font-size: 18px;
  margin: 20px;
}

.detail {
  position: relative;
  display: flex;
  justify-content: center;
  height: 140px;
}

.detail-group {
  position: absolute;
  display: flex;
  top: -40px;
}

.detail-card {
  width: 200px;
  height: 120px;
  margin: 6px;
  padding: 4px 0;
  border-radius: 4px;
  background: white;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.detail-number {
  font-size: 28px;
}

.detail-text {
  font-size: 16px;
  color: gray;
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
