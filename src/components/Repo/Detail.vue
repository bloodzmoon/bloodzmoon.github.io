<template>
  <section class="detail">
    <div class="detail-group">
      <DetailCard text="REPOSITORIES" :number="profile.public_repos" />
      <DetailCard text="FOLLOWERS" :number="profile.followers" />
      <DetailCard text="FOLLOWING" :number="profile.following" />
    </div>
  </section>
</template>

<script>
import DetailCard from './DetailCard'

export default {
  name: 'Detail',
  components: {
    DetailCard,
  },
  props: {
    profile: Object,
  },
}
</script>

<style scoped>
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
</style>