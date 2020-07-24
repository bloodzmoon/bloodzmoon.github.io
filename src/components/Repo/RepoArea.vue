<template>
  <section class="repo">
    <div class="area">
      <RepoCard v-for="repo in repos" :key="repo.id" v-bind="repo" />
    </div>
  </section>
</template>

<script>
import RepoCard from './RepoCard'

export default {
  name: 'RepoArea',
  components: {
    RepoCard,
  },
  props: {
    repos: { type: Array, required: true },
  },
}
</script>

<style scoped>
.repo {
  width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
}

.area {
  background: white;
  margin: 20px 0;
  padding: 6px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 768px) {
  .repo {
    width: 100%;
  }
}
</style>