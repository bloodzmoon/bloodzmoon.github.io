<script lang="typescript">
  interface ICard {
    title: string;
    description: string;
    icon: any;
    color: string;
    link: string;
  }

  export let card: ICard;
</script>

<a href={card.link} target="_blank" class="card-link">
  <div class="card">
    <div class="icon-wrapper" style={`background: ${card.color}`}>
      <div class="icon">
        <svelte:component this={card.icon} />
      </div>
    </div>
    <p class="title">{card.title} //</p>
    <p class="description">{card.description}</p>
  </div>
</a>

<style>
  .card {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .card-link {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.25s;
  }

  .card-link:hover {
    opacity: 0.75;
  }

  .icon-wrapper {
    --size: 400px;
    width: var(--size);
    height: var(--size);
    background: gray;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    --size: 140px;
    width: var(--size);
    height: var(--size);
    color: black;
  }

  .title {
    margin: 0.5rem 0;
    width: 100%;
    font-size: 1.25rem;
    font-weight: 400;
  }

  .description {
    margin: 0;
  }

  @media only screen and (max-width: 500px) {
    .card {
      padding: 0 0.5rem;
    }

    .icon-wrapper {
      --size: 300px;
    }
  }
</style>
