<script>
  import Moon from "$images/moon.svg";
  import MoonGlow from "$images/moon-glow.png";
</script>

<section class="sky">
  <div class="stars" />
  <img src={Moon} class="moon" alt="moon" />
  <img src={MoonGlow} class="moon glow" alt="moon glow" />
  <main class="main">
    <slot />
  </main>
</section>

<style>
  .sky {
    width: 100vw;
    height: calc(100vh + 150px);
    background: #1d212c;
    position: relative;
  }

  .stars {
    width: 100%;
    height: 100%;
    background: url("$images/stars.svg") repeat;
    animation: flowing-sky 60s ease-in-out infinite;
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

  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

  @keyframes flowing-sky {
    0%,
    100% {
      background-position: 0 0;
    }
    50% {
      background-position: 1000px 500px;
    }
  }
</style>
