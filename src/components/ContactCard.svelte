<script lang="typescript">
  interface IContact {
    icon: any;
    title: string;
    text: string;
    link: string;
  }

  export let contact: IContact;
</script>

<a href={contact.link} target="_blank" class="contact-link">
  <div class="contact">
    <div class="contact-icon">
      <svelte:component this={contact.icon} />
    </div>
    <div>
      <p class="contact-title">{contact.title}</p>
      <p class="contact-text">{contact.text}</p>
    </div>
  </div>
</a>

<style>
  .contact {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .contact-link {
    text-decoration: none;
    color: inherit;
  }

  .contact-icon {
    width: 60px;
    height: 60px;
    min-width: 60px;
    min-height: 60px;
    margin-right: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
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
