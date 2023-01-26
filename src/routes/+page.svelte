<!-- src/lib/Canvas.svelte -->
<script lang="ts">
	import * as THREE from 'three';
	import { onMount } from 'svelte';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
	import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

	let canvasElement: HTMLCanvasElement;

	onMount(() => {
		// Scene
		const scene = new THREE.Scene();

		/**
		 * Textures
		 */
		const textureLoader = new THREE.TextureLoader();
		const matcapTeture = textureLoader.load('/three/textures/matcaps/8.png');

		const textGroup = new THREE.Group();
		scene.add(textGroup);

		const donutGroup = new THREE.Group();
		scene.add(donutGroup);

		const cubeGroup = new THREE.Group();
		scene.add(cubeGroup);

		/**
		 * Fonts
		 */
		const fontLoader = new FontLoader();
		fontLoader.load('/three/fonts/helvetiker_regular.typeface.json', (font) => {
			// Global Material
			const material = new THREE.MeshMatcapMaterial({ matcap: matcapTeture });

			// Jackson Sophat
			const jacksonTextGeometry = new TextGeometry('Jackson Sophat', {
				font: font,
				size: 0.5,
				height: 0.2,
				curveSegments: 12,
				bevelEnabled: true,
				bevelThickness: 0.03,
				bevelSize: 0.02,
				bevelOffset: 0,
				bevelSegments: 5
			});

			jacksonTextGeometry.center();
			const jacksonText = new THREE.Mesh(jacksonTextGeometry, material);
			jacksonText.position.y = 1;
			textGroup.add(jacksonText);
			// scene.add(jacksonText)

			// Web Developer
			const webDeveloperTextGeometry = new TextGeometry('Web Developer', {
				font: font,
				size: 0.5,
				height: 0.2,
				curveSegments: 12,
				bevelEnabled: true,
				bevelThickness: 0.03,
				bevelSize: 0.02,
				bevelOffset: 0,
				bevelSegments: 5
			});

			webDeveloperTextGeometry.center();
			const webDeveloper = new THREE.Mesh(webDeveloperTextGeometry, material);
			webDeveloper.position.y = 0;
			scene.add(webDeveloper);

			// open for work
			const openForWorkTextGeometry = new TextGeometry('#OpenForWork', {
				font: font,
				size: 0.5,
				height: 0.2,
				curveSegments: 12,
				bevelEnabled: true,
				bevelThickness: 0.03,
				bevelSize: 0.02,
				bevelOffset: 0,
				bevelSegments: 5
			});

			openForWorkTextGeometry.center();
			const openForWork = new THREE.Mesh(openForWorkTextGeometry, material);
			openForWork.position.y = -1;
			scene.add(openForWork);

			const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);

			for (let i = 0; i <= 100; i++) {
				const donut = new THREE.Mesh(donutGeometry, material);
				donut.position.x = (Math.random() - 0.5) * 30;
				donut.position.y = (Math.random() - 0.5) * 30;
				donut.position.z = (Math.random() - 0.5) * 30;

				donut.rotation.x = Math.random() * Math.PI;
				donut.rotation.y = Math.random() * Math.PI;

				const donutScale = Math.random();
				donut.scale.set(donutScale, donutScale, donutScale);
				donutGroup.add(donut);
			}

			const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
			for (let i = 0; i <= 100; i++) {
				const cube = new THREE.Mesh(cubeGeometry, material);
				cube.position.x = (Math.random() - 0.5) * 30;
				cube.position.y = (Math.random() - 0.5) * 30;
				cube.position.z = (Math.random() - 0.5) * 30;

				cube.rotation.x = Math.random() * Math.PI;
				cube.rotation.y = Math.random() * Math.PI;

				const cubeScale = Math.random();
				cube.scale.set(cubeScale, cubeScale, cubeScale);
				cubeGroup.add(cube);
			}
		});

		/**
		 * Sizes
		 */
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight
		};

		window.addEventListener('resize', () => {
			// Update sizes
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			// Update camera
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			// Update renderer
			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		});

		/**
		 * Camera
		 */
		// Base camera
		const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
		camera.position.x = 1;
		camera.position.y = 1;
		camera.position.z = 8;
		scene.add(camera);

		// Controls
		const controls = new OrbitControls(camera, canvasElement);
		controls.enableDamping = true;

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas: canvasElement
		});
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		/**
		 * Animate
		 */
		const clock = new THREE.Clock();

		const tick = () => {
			const elapsedTime = clock.getElapsedTime();

			//Update Object
			donutGroup.rotation.y = elapsedTime * 0.05;
			cubeGroup.rotation.y = -elapsedTime * 0.05;

			// Update controls
			controls.update();

			// Render
			renderer.render(scene, camera);

			// Call tick again on the next frame
			window.requestAnimationFrame(tick);
		};

		tick();
	});
</script>

<svelte:head>
	<title>Jackson Sophat | Open For Work</title>
	<meta
		name="description"
		content="I am opening to be hired. Please hit me up if you are looking for a web developer based in Houston, Texas."
	/>
	<!-- <title>Hello</title> -->
</svelte:head>

<div class="relative">
	<canvas bind:this={canvasElement} class="fixed top-0 left-0" />
	<a
		href="/projects/local-news"
		class="fixed bottom-4 left-4 bg-white/50 px-2 py-1 text-sm rounded text-white no-underline"
		>Local News</a
	>
	<div
		class="fixed bottom-4 right-4 bg-white/50 px-2 py-2 text-sm rounded flex items-center justify-center text-white"
	>
		<a href="/" class=" mr-2 flex items-center" target="_blank" rel="noreferrer">
			<iconify-icon icon="mdi:linkedin" />
		</a>
		<a href="mailto:vichetsophat@gmail.com" class="flex items-center">
			<iconify-icon icon="material-symbols:mark-email-unread" />
		</a>
	</div>
</div>
