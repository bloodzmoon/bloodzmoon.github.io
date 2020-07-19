<template>
  <div>
    <Main />
    <section class="second"></section>
  </div>
</template>

<script>
import Main from '@/components/Home/Main'

export default {
  name: 'Home',
  components: {
    Main,
  },
}
</script>

<style scoped>
.second {
  width: 100vw;
  height: 400px;
  background: white;
}
</style>