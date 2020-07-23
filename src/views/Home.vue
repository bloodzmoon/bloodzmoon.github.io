<template>
  <section class="sky">
    <img :src="Moon" class="moon" />
    <img :src="MoonGlow" class="moon glow" />
    <header class="title">Bloodzmoon</header>
    <span class="sub-title">
      Hi, I’m Than. A computer engineering
      student at KMITL University
    </span>
    <HomeNav />
    <div class="stars"></div>
    <img :src="Ground" class="ground" />
  </section>
</template>

<script>
import HomeNav from '@/components/HomeNav'
import { Moon, MoonGlow, Ground } from '@/assets/home'

export default {
  name: 'Home',
  components: {
    HomeNav,
  },
  data: () => ({
    Moon,
    MoonGlow,
    Ground,
  }),
}
</script>

<style scoped>
.sky {
  width: 100vw;
  height: 100vh;
  background: #1d212c;
  position: relative;
}

.moon {
  width: 160px;
  height: 160px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 2;
}

.glow {
  z-index: 1;
  animation: glowing 4s linear infinite;
}

@keyframes glowing {
  0%,
  100% {
    width: 140px;
    height: 140px;
  }
  50% {
    width: 160px;
    height: 160px;
  }
}

.title {
  color: white;
  font-size: 72px;
  letter-spacing: 30px;
  text-transform: uppercase;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 1;
}

.sub-title {
  text-align: center;
  color: #a7abb8;
  font-size: 24px;
  width: 90%;
  max-width: 480px;
  line-height: 150%;
  top: calc(50% + 100px);
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 1;
}

.stars {
  width: 100%;
  height: 100%;
  background: url('../assets/home/stars.svg') repeat;
  animation: flowing-sky 60s ease-in-out infinite;
}

@keyframes flowing-sky {
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 1000px 500px;
  }
}

.ground {
  width: 80%;
  min-width: 600px;
  height: auto;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  z-index: 0;
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 56px;
    letter-spacing: 20px;
  }
}

@media screen and (max-width: 450px) {
  .title {
    font-size: 36px;
    letter-spacing: 10px;
  }

  .sub-title {
    font-size: 18px;
    top: calc(50% + 70px);
  }
}
</style>
