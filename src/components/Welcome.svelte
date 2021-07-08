<script>
  import NightSky from '$components/NightSky.svelte'
</script>

<NightSky>
  <div class="title-wrapper">
    <h2 class="sub-title">Welcome to</h2>
    <h1 class="title">MY WORLD</h1>
  </div>
  <div class="scroll-wrapper">
    <div class="scroll-text">Dive into my world</div>
    <div class="scroll-arrow" />
  </div>
</NightSky>

<style>
  .title-wrapper {
    text-align: center;
  }

  .sub-title {
    color: #9d9d9d;
    font-size: 2.5rem;
    font-weight: 200;
    white-space: nowrap;
    margin: 0;
    margin-bottom: -1rem;
  }

  .title {
    color: white;
    font-size: 3rem;
    letter-spacing: 0.5rem;
    font-weight: 400;
    white-space: nowrap;
    margin: 0;
  }

  .scroll-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(180px);
  }

  .scroll-text {
    color: white;
    font-size: 1.25rem;
    animation: blinking linear infinite 2s;
  }

  .scroll-arrow {
    margin-top: 20px;
    animation: scrolling infinite 1s;
  }

  .scroll-arrow::before {
    position: absolute;
    content: '';
    width: 12px;
    height: 2px;
    background: white;
    transform: rotate(45deg) translateX(-5px);
  }

  .scroll-arrow::after {
    position: absolute;
    content: '';
    width: 12px;
    height: 2px;
    background: white;
    transform: rotate(-45deg) translateX(5px);
  }

  @keyframes blinking {
    0%,
    100% {
      opacity: 0.8;
    }

    50% {
      opacity: 0.4;
    }
  }

  @keyframes scrolling {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
</style>
