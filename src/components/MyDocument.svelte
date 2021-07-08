<script>
  import FolderIcon from '/images/folder-icon.png'

  let cards = [
    {
      title: 'Project: ONU',
      img: '',
      link: 'https://google.com',
    },
    {
      title: 'Project: ONU',
      img: '',
      link: '',
    },
    {
      title: 'Project: ONU',
      img: '',
      link: '',
    },
    {
      title: 'Project: ONU',
      img: '',
      link: '',
    },
  ]
</script>

<section class="document-section">
  <h1 class="title">
    <img src={FolderIcon} class="title-icon" alt="folder icon" />
    <span class="title-text">My Documents/</span>
  </h1>
  <div class="container">
    {#each cards as card, i (i)}
      <a href={card.link} target="_blank" class="card-link">
        <div class="card">
          <img src={card.img} class="card-img" alt="card" />
          <p class="card-title">{card.title}</p>
        </div>
      </a>
    {/each}
  </div>
  <span class="ending-line" />
</section>

<style>
  .document-section {
    margin: 0 auto;
    padding: 1rem;
    width: 100%;
    max-width: 1480px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    width: 100%;
    justify-self: flex-start;
    display: flex;
    align-items: center;
  }

  .title-icon {
    width: 28px;
    margin-right: 1rem;
  }

  .title-text {
    font-size: 1.25rem;
  }

  .container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    justify-content: space-between;
    overflow: auto;
  }

  .card {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .card-link {
    text-decoration: none;
    color: inherit;
  }

  .card-img {
    --size: 400px;
    width: var(--size);
    height: var(--size);
    background: lightskyblue;
  }

  .card-title {
    width: fit-content;
    margin: 0.5rem 0;
    font-weight: 400;
  }

  .ending-line {
    display: block;
    width: 120px;
    height: 2px;
    background: #1b1e27;
    opacity: 0.5;
    margin: 5rem 0;
  }
</style>
