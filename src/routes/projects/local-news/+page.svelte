<script lang="ts">
	import { lazyLoad } from '../../components/lazyLoad';

	export let data;
	const noImage = '/images/image-na.png';
	const { news } = data;
	let selectedCity = data.select_city;

	let arr = news.map((obj) => {
		return { ...obj, published: new Date(obj.published) };
	});
	const sortedDataByDate = arr.sort(
		(objA, objB) => Number(objB.published) - Number(objA.published)
	);

	// 	MULTIPLE CITIES
	let cityOptions = [
		{
			value: 'houston',
			label: 'Houston'
		},
		{
			value: 'austin',
			label: 'Austin'
		},
		{
			value: 'dallas',
			label: 'Dallas'
		}
	];

	let selectCityIndex: number;

	for (let i = 0; i < cityOptions.length; i++) {
		if (cityOptions[i].value == data.select_city) {
			selectCityIndex = i;
			// console.log(data.select_city, i);
		}
	}

	let selected: any = cityOptions[selectCityIndex];

	function handleSubmit() {
		document.cookie = `select_city=${selected.value}`;
		location.reload();
		// console.log(selected.value, selected.label);
		// console.log(news);
	}

	// let city = data.select_city;
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
			Local News : <span class="capitalize">{selectedCity}</span>
		</h1>
	</div>

	<div class="container">
		<div>
			<div class="flex justify-end mb-6">
				<form method="GET" on:change={handleSubmit} class="border rounded text-sm">
					<select class="px-6 bg-purple-100 py-1" bind:value={selected}>
						{#each cityOptions as option}
							<option class="hover:bg-purple-50 focus:bg-black" value={option}>
								{option.label}
							</option>
						{/each}
					</select>
				</form>
			</div>
			{#each sortedDataByDate as item}
				<a href={item.link} target="_blank" rel="noreferrer">
					<div class="mb-8 border rounded bg-gray-100 md:flex">
						<figure class="md:w-1/4 ">
							<img
								class="h-100 w-100 object-cover"
								use:lazyLoad={item.image ? item.image : noImage}
								alt={item.title}
							/>
						</figure>
						<!-- <figure>
						<img use:lazyLoad={item.image ? item.image : '/images/image-na.png'} alt={item.title} />
					</figure> -->
						<div class="p-2 md:w-3/4 md:pt-4 md:flex md:flex-col md:justify-between">
							<p class="font-medium mb-2">{item.title}</p>
							<p class="text-sm">{item.summary}</p>
							<div class="border-t text-xs mt-2 pt-2 md:flex md:justify-between">
								<!-- <img src={item.station} alt={item.station} class="h-4" /> -->
								<p>{item.station}</p>
								<p>{item.published}</p>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</main>
