<template>
  <div>
    <Main />
    <BottomNav />
  </div>
</template>

<script>
import Main from '@/components/Home/Main'
import BottomNav from '@/components/Home/BottomNav'

export default {
  name: 'Home',
  components: {
    Main,
    BottomNav,
  },
}
</script>
