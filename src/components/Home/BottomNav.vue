<template>
  <nav class="footer">
    <ul class="nav-group">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/repo" class="nav-item">Repo</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BottomNav',
}
</script>

<style scoped>
.footer {
  width: 100vw;
  height: 120px;
  background: #18191d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-group {
  margin: 0;
  color: #a7abb8;
  font-size: 22px;
  display: flex;
  justify-content: space-evenly;
  width: 600px;
}

.nav-item {
  color: inherit;
  text-decoration: none;
  transition: 0.2s;
}

.nav-item:hover {
  cursor: pointer;
  color: white;
}
</style>