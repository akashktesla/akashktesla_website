<script lang="ts">
  import PageBase from "$lib/components/PageBase.svelte";
  export let data;
  const  post = data.post;
</script>

<PageBase>
    {#if post}
      <svelte:component this={post} />
    {:else}
      <h1>404 — Post not found</h1>
    {/if}
</PageBase>
