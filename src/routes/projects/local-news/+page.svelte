<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		fetch('https://abc13.com/feed/')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	});
</script>

<h1>Local News</h1>
<hr />
