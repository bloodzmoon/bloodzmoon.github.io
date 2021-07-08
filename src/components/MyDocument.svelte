<script>
  import FolderIcon from '/images/folder-icon.png'
  import EducationIcon from 'svelte-icons/ti/TiMortarBoard.svelte'
  import ImageIcon from 'svelte-icons/ti/TiImage.svelte'
  import CardIcon from 'svelte-icons/ti/TiBook.svelte'
  import LockIcon from 'svelte-icons/ti/TiLockClosed.svelte'
  import KeyboardIcon from 'svelte-icons/ti/TiKeyboard.svelte'

  let cards = [
    {
      title: 'Educa // Online learning platform',
      icon: EducationIcon,
      iconColor: 'black',
      backgroundColor: '#ff6a8a',
      link: 'https://educa.vercel.app',
    },
    {
      title: 'Pure // Online thesis exhibition',
      icon: ImageIcon,
      iconColor: 'black',
      backgroundColor: '#84affd',
      link: 'https://pure.archlandkmitlthesis.com',
    },
    {
      title: 'ONU // UNO card game clone',
      icon: CardIcon,
      iconColor: 'black',
      backgroundColor: '#49d1a4',
      link: 'https://onu-uno.netlify.app/',
    },
    {
      title: 'Autoken // Simple access & refresh token visualization',
      icon: LockIcon,
      iconColor: 'black',
      backgroundColor: '#a595ff',
      link: 'https://autoken.vercel.app/',
    },
    {
      title: 'Checkit // Playground for keyboard & mouse',
      icon: KeyboardIcon,
      iconColor: 'black',
      backgroundColor: '#ffb048',
      link: 'https://checkit.vercel.app/',
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
          <div class="card-img" style={`background: ${card.backgroundColor}`}>
            <div class="card-icon" style={`color: ${card.iconColor}`}>
              <svelte:component this={card.icon} />
            </div>
          </div>
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
    margin-right: 0.5rem;
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
    background: gray;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-icon {
    --size: 140px;
    width: var(--size);
    height: var(--size);
  }

  .card-title {
    width: fit-content;
    margin: 0.5rem 0;
    font-size: 1.25rem;
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
