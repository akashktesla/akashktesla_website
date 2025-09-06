<script lang="ts">
	import smile from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={smile} />
</svelte:head>

{@render children?.()}
