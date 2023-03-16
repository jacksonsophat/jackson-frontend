<!-- <script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		const tl = gsap.timeline();
		const duration = 1;

		tl.from('.box', {
			duration,
			opacity: 0
		}).from(
			'.box',
			{
				duration,
				xPercent: 100,
				rotation: -90,
				yPercent: 100,
				ease: 'bounce.out'
			},
			`-=${duration * 0.75}`
		);
	});
</script>

<div>
	<p>Testing</p>
	<div class="box" />
</div>

<style>
	.box {
		width: 100px;
		height: 100px;
		background: black;
	}
</style> -->
<script>
	let count = 0;
	$: remaining = 10 - count;

	const increment = () => {
		if (remaining > 0) {
			count++;
		}
	};
</script>

<div>
	<div>Count: {count}</div>
	<div>Remaining: {remaining}</div>
	<button on:click={increment}>Click</button>
</div>
