<script>
  import DocumentCard from "./DocumentCard.svelte";
  import FolderIcon from "$images/folder-icon.png";
  import EducationIcon from "svelte-icons/ti/TiMortarBoard.svelte";
  import ImageIcon from "svelte-icons/ti/TiImage.svelte";
  import LocationArrowOutline from 'svelte-icons/ti/TiLocationArrowOutline.svelte'
  import CardIcon from "svelte-icons/ti/TiBook.svelte";
  import LockIcon from "svelte-icons/ti/TiLockClosed.svelte";
  import KeyboardIcon from "svelte-icons/ti/TiKeyboard.svelte";
  import Pencil from 'svelte-icons/ti/TiPencil.svelte'

  let cards = [
    {
      title: "Educa",
      description: "Online learning platform",
      icon: EducationIcon,
      color: "#ff6a8a",
      link: "https://educa.vercel.app",
    },
    {
      title: "Pure",
      description: "Online thesis exhibition",
      icon: ImageIcon,
      color: "#84affd",
      link: "https://pure.archlandkmitlthesis.com",
    },
    {
      title: "ONU",
      description: "UNO card game clone",
      icon: CardIcon,
      color: "#49d1a4",
      link: "https://onu-uno.netlify.app/",
    },
    {
      title: "Autoken",
      description: "Simple access & refresh token visualization",
      icon: LockIcon,
      color: "#a595ff",
      link: "https://autoken.vercel.app/",
    },
    {
      title: "Checkit",
      description: "Playground for keyboard & mouse",
      icon: KeyboardIcon,
      color: "#ffb048",
      link: "https://checkit.vercel.app/",
    },
    {
      title: "Cursor Fighter",
      description: "Multiplayer fighting game",
      icon: LocationArrowOutline,
      color: "#ed424e",
      link: "https://cursor-fighter.vercel.app/",
    },
    {
      title: "Typerr",
      description: "Clicker game but typing",
      icon: Pencil,
      color: "#6febed",
      link: "https://typerr.vercel.app/",
    }
  ];
</script>

<section class="document-section">
  <h1 class="title">
    <img src={FolderIcon} class="title-icon" alt="folder icon" />
    <span class="title-text">My Documents/</span>
  </h1>
  <div class="container">
    {#each cards as card, i (i)}
      <DocumentCard {card} />
    {/each}
  </div>
  <span class="ending-line" />
</section>

<style>
  .document-section {
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
    max-width: 1480px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    width: 100%;
    justify-content: flex-start;
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
    overflow-x: hidden;
  }

  .ending-line {
    display: block;
    width: 120px;
    height: 2px;
    background: #1b1e27;
    opacity: 0.5;
    margin: 5rem 0;
  }

  @media only screen and (max-width: 850px) {
    .title {
      width: 400px;
    }

    .container {
      justify-content: space-evenly;
    }
  }

  @media only screen and (max-width: 500px) {
    .document-section {
      padding: 1rem;
    }

    .title {
      width: 300px;
    }

    .container {
      grid-template-columns: repeat(auto-fill, 300px);
    }
  }
</style>
