<script lang="ts">
	export let data: any;
	const { news } = data;

	console.log(data.news);
	console.log('select_city: ', data.select_city);

	let cityOptions = [
		{
			value: 'houston',
			label: 'Houston'
		},
		{
			value: 'austin',
			label: 'Austin'
		}
	];

	let selectCityIndex: number;

	for (let i = 0; i < cityOptions.length; i++) {
		if (cityOptions[i].value == data.select_city) {
			selectCityIndex = i;
			console.log(data.select_city, i);
		}
	}

	let selected: any = cityOptions[selectCityIndex];

	function handleSubmit() {
		document.cookie = `select_city=${selected.value}`;
		console.log(selected.value, selected.label);
		console.log(news);
	}

	// data-sveltekit-reload
</script>

<div>
	<h1 class="text-center text-3xl font-semibold">Testing Page</h1>
	<hr class="my-6" />

	<form method="GET" on:change={handleSubmit}>
		<select bind:value={selected}>
			{#each cityOptions as option}
				<option value={option}>
					{option.label}
				</option>
			{/each}
		</select>
	</form>

	<div class="mt-8 text-center text-red-600">
		<p class="uppercase">City: {data.select_city}</p>
	</div>
</div>
