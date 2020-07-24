<template>
  <section class="profile">
    <router-link to="/" class="back-icon">
      <unicon name="angle-left" fill="#75a2da" width="36" height="36" />
      <span class="m-hide">Back</span>
    </router-link>
    <img class="profile-img" :src="avatar_url" />
    <span class="name">{{ name }}</span>
    <a class="mention" :href="html_url" target="_blank">@{{ login }}</a>
    <span class="joined">Joined {{ joinedDate }}</span>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    name: { type: String, required: true },
    login: { type: String, required: true },
    created_at: { type: String, required: true },
    avatar_url: { type: String, required: true },
    html_url: { type: String, required: true },
  },
  computed: {
    joinedDate() {
      const date = new Date(this.created_at)
      const options = { day: 'numeric', month: 'long', year: 'numeric' }
      return date.toLocaleDateString('en-US', options)
    },
  },
}
</script>

<style scoped>
.back-icon {
  color: #75a2da;
  position: absolute;
  top: 5%;
  left: 5%;
  font-size: 22px;
  display: flex;
  align-items: center;
  text-decoration: none;
  opacity: 0.6;
  transition: 0.2s;
}

.back-icon:hover {
  opacity: 1;
}

.m-hide {
  transform: translateY(-3.5px);
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
  position: relative;
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
  text-align: center;
  font-size: 36px;
  margin: 10px;
}

.mention {
  text-decoration: none;
  color: #26aefd;
  font-size: 24px;
}

.joined {
  color: rgb(149, 155, 175);
  font-size: 18px;
  margin: 20px;
}

@media screen and (max-width: 450px) {
  .m-hide {
    display: none;
  }
}
</style>