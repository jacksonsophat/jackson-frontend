<script>
	import { onMount } from 'svelte';

	export let data;
	const { news } = data;
	console.log(news);

	// let data = [];

	// onMount(async () => {
	// 	fetch('http://127.0.0.1:8000/local-news/')
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			return data;
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 			return [];
	// 		});
	// });

	// export async function load({ fetch }) {
	// 	const res = await fetch('http://127.0.0.1:8000/local-news/');
	// 	const data = await res.json();
	// 	console.log(data);
	// 	if (res.ok) {
	// 		return {
	// 			props: { news: data.results }
	// 		};
	// 	}
	// }

	// export let news;
	// console.log(news);
</script>

<!-- <script>
</script> -->

<svelte:head>
	<title>Local News | Jackson Sophat</title>
	<meta
		name="description"
		content="This page will bring all the latest news headlines from your local news stations! Stay Informative!"
	/>
</svelte:head>

<main>
	<div>
		<h1
			class="bg-primary py-4 md:py-8 text-center text-xl md:text-2xl font-semibold  mb-6 md:mb-6 text-secondary"
		>
			Local News : Houston
		</h1>
	</div>

	<div class="container">
		{#each news as item}
			<a href={item.link} target="_blank" rel="noreferrer">
				<div class="mb-8 border rounded bg-gray-100 md:flex">
					<img
						class="md:w-1/4 object-cover"
						src={item.image ? item.image : '/images/image-na.png'}
						alt={item.title}
					/>
					<!-- <figure>
						<img use:lazyLoad={item.image ? item.image : '/images/image-na.png'} alt={item.title} />
					</figure> -->
					<div class="p-2 md:w-3/4 md:pt-4 md:flex md:flex-col md:justify-between">
						<p class="font-medium mb-2">{item.title}</p>
						<p class="text-sm">{item.summary}</p>
						<div class="flex justify-between text-xs py-2">
							<p>{item.station}</p>
							<p>{item.published}</p>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</main>
