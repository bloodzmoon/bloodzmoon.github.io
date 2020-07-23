<template>
  <nav class="footer">
    <ul class="nav-group">
      <router-link v-for="item in routes" :key="item.path" :to="item.path" class="nav-item">
        <unicon :name="item.icon" fill="white" width="30" height="30" />
        {{ item.text }}
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HomeNav',
  data: () => ({
    routes: [
      { path: '/', icon: 'home-alt', text: 'Home' },
      { path: '/repo', icon: 'diary', text: 'Repo' },
      { path: '/about', icon: 'at', text: 'Contact' },
    ],
  }),
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
  z-index: 1;
}

.nav-group {
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 600px;
}

.nav-item {
  font-size: 24px;
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

@media screen and (max-width: 450px) {
  .footer {
    top: 70%;
  }

  .nav-item {
    font-size: 18px;
  }
}
</style>