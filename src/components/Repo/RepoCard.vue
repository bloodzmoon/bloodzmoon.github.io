<template>
  <a class="wrapper" target="_blank" :href="repo.html_url">
    <div class="title">{{ repo.name }}</div>
    <div class="footer">
      <span class="icon" :style="{background: getColor(repo.language)}"></span>
      {{ repo.language || 'Unknown' }}
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
  methods: {
    getColor(language) {
      const color = this.colors[language]?.color || '#26aefd'
      return color
    },
  },
}
</script>

<style scoped>
.wrapper {
  text-decoration: none;
  color: inherit;
  width: 30%;
  height: 140px;
  margin: 12px;
  padding: 30px;
  border-radius: 4px;
  background: white;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.wrapper:hover {
  box-shadow: 0 10px 30px -25px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 18px;
  font-weight: bold;
}

.footer {
  font-size: 16px;
  color: grey;
}

.icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 6px;
}
</style>