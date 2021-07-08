<script>
  import ContactCard from "$components/ContactCard.svelte";
  import GitHubIcon from "svelte-icons/ti/TiSocialGithub.svelte";
  import LinkedInIcon from "svelte-icons/ti/TiSocialLinkedin.svelte";
  import WorldIcon from "svelte-icons/ti/TiWorld.svelte";

  let contacts = [
    {
      icon: GitHubIcon,
      title: "GitHub",
      text: "bloodzmoon",
      link: "https://github.com/bloodzmoon",
    },
    {
      icon: LinkedInIcon,
      title: "LinkedIn",
      text: "Thanyathon Pornsawatchai",
      link: "https://www.linkedin.com/in/thanyathon-pornsawatchai",
    },
    {
      icon: WorldIcon,
      title: "Email",
      text: "Thanyathon Dev",
      link: "mailto:thanyathon.dev@gmail.com",
    },
  ];
</script>

<footer class="contact-section">
  <div class="content">
    <h2 class="title">Contact</h2>
    <span class="divider-line" />
    <div class="list">
      {#each contacts as contact, i (i)}
        <ContactCard {contact} />
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
    padding: 0 2rem;
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
  }

  @media only screen and (max-width: 850px) {
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .list {
      flex-direction: column;
    }
  }
</style>
