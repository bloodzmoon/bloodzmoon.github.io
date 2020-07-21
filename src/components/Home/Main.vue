<template>
  <section class="sky">
    <img :src="moon" class="moon" />
    <img :src="moonGlow" class="moon glow" />
    <header class="title">Bloodzmoon</header>
    <span class="sub-title">
      Hi, I’m Than. A computer engineering
      student at KMITL University
    </span>
    <CenterNav />
    <div class="stars"></div>
    <img :src="ground" class="ground" />
  </section>
</template>

<script>
import moon from '@/assets/home/moon.svg'
import moonGlow from '@/assets/home/moon-glow.png'
import ground from '@/assets/home/ground.svg'
import CenterNav from '@/components/Home/CenterNav'

export default {
  name: 'Main',
  components: {
    CenterNav,
  },
  data: () => ({
    moon,
    moonGlow,
    ground,
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
}

.sub-title {
  text-align: center;
  color: #a7abb8;
  font-size: 24px;
  width: 480px;
  line-height: 150%;
  top: calc(50% + 100px);
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.stars {
  width: 100%;
  height: 100%;
  background: url('../../assets/home/stars.svg') repeat;
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
  height: auto;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  z-index: 2;
}
</style>