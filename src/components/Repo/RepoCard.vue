<template>
  <a class="wrapper" target="_blank" :href="repo.html_url">
    <unicon
      class="icon"
      name="github-alt"
      icon-style="monochrome"
      :fill="repoColor"
      width="30"
      height="30"
    ></unicon>
    <div class="card-detail">
      <div class="left">
        <div class="title">{{ repo.name }}</div>
        <div class="footer">{{ repo.language || 'Unknown' }}</div>
      </div>
      <div class="right">
        <div class="repo-stat">
          <unicon
            class="fix-icon"
            name="star"
            icon-style="monochrome"
            fill="#a2a2a2"
            width="16"
            height="16"
          ></unicon>
          {{ repo.stargazers_count }}
          <unicon class="fix-icon" name="code-branch" fill="#a2a2a2" width="16" height="16"></unicon>
          {{ repo.forks_count }}
        </div>
        <div class="footer">{{ repoSize }} KB</div>
      </div>
    </div>
  </a>
</template>

<script>
import Colors from '@/assets/gh-colors.json'

export default {
  name: 'RepoCard',
  props: {
    repo: Object,
  },
  data: () => ({
    colors: Colors,
  }),
  computed: {
    repoColor: function() {
      const color = this.colors[this.repo.language]?.color || '#26aefd'
      return color
    },
    repoSize: function() {
      return this.repo.size.toLocaleString('en')
    },
  },
}
</script>

<style scoped>
.wrapper {
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 90px;
  padding: 20px 30px;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  position: relative;
}

.wrapper:hover {
  background: rgb(240, 246, 251);
}

.icon {
  position: absolute;
  top: 50%;
  left: 36px;
  transform: translate(-50%, -50%);
}

.card-detail {
  height: 100%;
  margin-left: 40px;
  display: flex;
  justify-content: space-between;
}

.left {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.title {
  font-size: 18px;
  font-weight: bold;
}

.repo-stat {
  color: #a2a2a2;
}

.fix-icon {
  transform: translateY(2px);
  margin-left: 8px;
}

.footer {
  font-size: 16px;
  color: #a2a2a2;
}
</style>