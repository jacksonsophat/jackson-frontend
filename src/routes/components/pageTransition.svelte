<script lang="ts">
	import { fade } from 'svelte/transition';
	export let url: URL;
</script>

{#key url}
	<div in:fade={{ delay: 100 }}>
		<slot />
	</div>
{/key}
