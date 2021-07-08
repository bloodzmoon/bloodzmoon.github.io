<script>
  import { onMount } from 'svelte'

  $: profileUrl = ''

  async function getProfileFromGitHub() {
    const res = await fetch('https://api.github.com/users/bloodzmoon')
    const data = await res.json()
    profileUrl = data.avatar_url
  }

  onMount(getProfileFromGitHub)
</script>

<section class="profile-section">
  <img src={profileUrl} class="img" alt="profile" />
  <div class="title">
    <p class="name">Thanyathon Pornsawatchai</p>
    <p class="role">Software developer</p>
  </div>
</section>

<style>
  .profile-section {
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img {
    --size: 240px;
    border-radius: 50%;
    width: var(--size);
    height: var(--size);
    position: relative;
  }

  .title {
    text-align: center;
  }

  .name {
    font-size: 2rem;
    font-weight: 400;
  }

  .role {
    color: #0088eb;
    font-size: 2rem;
    margin-top: -2rem;
  }
</style>
