<script>
  import GitHubIcon from 'svelte-icons/ti/TiSocialGithub.svelte'
  import LinkedInIcon from 'svelte-icons/ti/TiSocialLinkedin.svelte'
  import LocationIcon from 'svelte-icons/ti/TiLocationArrow.svelte'

  let contacts = [
    {
      icon: GitHubIcon,
      title: 'GitHub',
      text: 'bloodzmoon',
      link: 'https://github.com/bloodzmoon',
    },
    {
      icon: LinkedInIcon,
      title: 'LinkedIn',
      text: 'Thanyathon Pornsawatchai',
      link: 'https://www.linkedin.com/in/thanyathon-pornsawatchai',
    },
    {
      icon: LocationIcon,
      title: 'Email',
      text: 'Thanyathon Dev',
      link: 'mailto:thanyathon.dev@gmail.com',
    },
  ]
</script>

<footer class="contact-section">
  <div class="content">
    <h2 class="title">Contact</h2>
    <span class="divider-line" />
    <div class="list">
      {#each contacts as contact, i (i)}
        <div class="contact">
          <div class="contact-icon">
            <svelte:component this={contact.icon} />
          </div>
          <div>
            <p class="contact-title">{contact.title}</p>
            <p class="contact-text">{contact.text}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</footer>

<style>
  .contact-section {
    width: 100%;
    color: white;
    background: #1b1e27;
    display: flex;
    flex-direction: column;
  }

  .content {
    margin: 0 auto;
    margin-top: 12rem;
    padding: 0 1rem;
    width: 100%;
    max-width: 1480px;
  }

  .title {
    font-size: 3rem;
    margin: 0;
  }

  .divider-line {
    display: block;
    width: 80px;
    height: 2px;
    background: white;
    opacity: 0.4;
  }

  .list {
    padding: 3rem 0;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
  }

  .contact {
    display: flex;
    align-items: center;
  }

  .contact-icon {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  .contact-title {
    margin: 0;
    opacity: 0.5;
  }

  .contact-text {
    margin: 0;
    font-weight: 400;
    font-size: 1.25rem;
  }
</style>
