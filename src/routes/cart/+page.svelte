<script>
  export let data;
  $: ({ cart } = data);
</script>

<header class="header">
  <a class="header-title" href="/">Svelte EC</a>
  <nav>
    <ul class="header-links">
      <li>ようこそゲストさん</li>
      <li>
        <!-- <a href="/cart">カート（0）</a> -->
        <a href="/cart">カート（{cart.length}）</a>
      </li>
    </ul>
  </nav>
</header>

<article class="product">
  <h3>カート内のアイテム</h3>
  {#each cart as product}
    <li>{product}</li>
  {/each}
  <div>
    {#if cart.length !== 0}
      <form method="POST">
        <input type="hidden" name="clearCart" value="dummy" />
        <button>カートをクリアする</button>
      </form>
    {:else}
      <button disabled>カートは空です</button>
    {/if}
  </div>
</article>

<style>
  :global(body) {
    margin: 0;
    background-color: #eee;
    padding: 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    background-color: #fff;
    padding: 0 15px;
    width: 100%;
    max-width: 800px;
    height: 50px;
  }

  .header-title {
    font-weight: bold;
  }

  .header-links {
    display: flex;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .product {
    margin: 0 auto;
    background-color: #fff;
    padding: 15px;
    width: 100%;
    max-width: 800px;
  }

  .product-main {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .image-container {
    width: 100%;
    max-width: 400px;
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
  }
</style>
