<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let startingCount = 3;
	let count = 4;
	let startingText = true;
	let howTo = '';

	onMount(() => {
		const interval = setInterval(function () {
			startingCount--;
			console.log(startingCount);
			if (startingCount == 0) {
				startingText = false;
				startBreathing();
				clearInterval(interval);
			}
		}, 1000);
	});

	function startBreathing() {
		const tl = gsap.timeline({
			repeat: -1,
			ease: 'none'
		});
		let element = document.querySelector('#AnimationCircle');

		let inhale = 4;
		let hold = 7;
		let exhale = 8;

		// func hold
		//func exhale

		// function counting() {
		// 	setInterval(function () {
		// 		console.log(count++);
		// 	}, 1000);
		// }

		tl.to(
			element,
			{
				scale: 5,
				duration: inhale,
				onStart: () => {
					document.querySelector('#MovingCircle')?.setAttribute('fill', '#7F22FD');
					howTo = 'Inhale...';
				}
			},
			1
		)
			.to(element, {
				duration: hold,
				onStart: () => {
					document.querySelector('#MovingCircle')?.setAttribute('fill', '#f472b6');
					howTo = 'Hold...';
				}
			})
			.to(element, {
				duration: exhale,
				scale: 1,
				onStart: () => {
					document.querySelector('#MovingCircle')?.setAttribute('fill', '#818cf8');
					howTo = 'Exhale...';
				}
			});
	}
</script>

<section class="h-screen w-full bg-primary text-white py-4">
	<div class="py-8 h-full">
		<div class="animation h-full">
			<div class="h-10">
				<h1 class="text-center text-2xl pt-10 ">
					{#if startingText}
						<span>
							Breathing exercise starts in {startingCount}
						</span>
					{:else}
						<span>
							{howTo}
						</span>
					{/if}
				</h1>
			</div>

			<div class="animation-border flex items-center w-full justify-center pt-28 relative">
				<svg
					id="CircleBorder"
					width="500"
					height="500"
					viewBox="0 0 500 500"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="250" cy="250" r="249" stroke="#FFF" stroke-width="2" />
				</svg>

				<svg
					class="absolute"
					id="AnimationCircle"
					width="100"
					height="100"
					viewBox="0 0 100 100"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle id="MovingCircle" cx="50" cy="50" r="50" fill="#7F22FD" />
				</svg>

				<!-- <p class="absolute text-2xl" id="Counting">{count}</p> -->
			</div>
		</div>
	</div>
</section>
