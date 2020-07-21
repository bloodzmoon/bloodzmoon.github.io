<template>
  <section class="profile">
    <img class="profile-img" :src="profile.avatar_url" />
    <span class="name">{{ profile.name }}</span>
    <a class="mention" :href="profile.html_url" target="_blank">@{{ profile.login }}</a>
    <span class="joined">Joined {{ joinedDate }}</span>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    profile: Object,
  },
  computed: {
    joinedDate: function() {
      const date = new Date(this.profile.created_at)
      const options = { day: 'numeric', month: 'long', year: 'numeric' }
      return date.toLocaleDateString('en-US', options)
    },
  },
}
</script>

<style scoped>
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
  text-decoration: none;
  color: #26aefd;
  font-size: 24px;
}

.joined {
  color: rgb(149, 155, 175);
  font-size: 18px;
  margin: 20px;
}
</style>