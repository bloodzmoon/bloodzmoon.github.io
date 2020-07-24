<template>
  <a class="wrapper" target="_blank" :href="html_url">
    <unicon
      class="icon"
      name="github-alt"
      icon-style="monochrome"
      :fill="repoColor"
      width="24"
      height="24"
    />
    <div class="card-detail">
      <div class="left">
        <div class="title">{{ name }}</div>
        <div class="footer">{{ language }}</div>
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
          {{ repoStar }}
          <unicon class="fix-icon" name="code-branch" fill="#a2a2a2" width="16" height="16"></unicon>
          {{ repoFolk }}
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
    name: { type: String, required: true },
    language: { type: String, default: 'Unknown' },
    html_url: { type: String, required: true },
    stargazers_count: { type: Number, required: true },
    forks_count: { type: Number, required: true },
    size: { type: Number, required: true },
  },
  data: () => ({
    colors: Colors,
  }),
  computed: {
    repoColor() {
      const color = this.colors[this.language]?.color || '#26aefd'
      return color
    },
    repoSize() {
      return this.size.toLocaleString('en')
    },
    repoStar() {
      return this.stargazers_count.toLocaleString('en')
    },
    repoFolk() {
      return this.forks_count.toLocaleString('en')
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
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.title {
  font-size: 18px;
  font-weight: bold;
  width: 35vw;
  max-width: 500px;
  height: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  /* background: lightblue; */
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

@media screen and (max-width: 450px) {
  .wrapper {
    padding: 20px 10px;
  }

  .icon {
    left: 26px;
  }
}
</style>