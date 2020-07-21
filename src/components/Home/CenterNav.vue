<template>
  <nav class="footer">
    <ul class="nav-group">
      <router-link to="/" class="nav-item">
        <unicon name="home-alt" fill="white" width="30" height="30"></unicon>Home
      </router-link>
      <router-link to="/repo" class="nav-item">
        <unicon name="book-alt" fill="white" width="30" height="30"></unicon>Repo
      </router-link>
      <router-link to="/about" class="nav-item">
        <unicon name="at" fill="white" width="30" height="30"></unicon>Contact
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'CenterNav',
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 120px;
  background: none;
  display: grid;
  place-items: center;
  top: calc(50% + 200px);
  position: absolute;
}

.nav-group {
  padding: 0;
  font-size: 22px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 600px;
}

.nav-item {
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.6;
  transition: 0.2s;
}

.nav-item:hover {
  cursor: pointer;
  opacity: 1;
}
</style>