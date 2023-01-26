<script>
	import '../app.css';
	import 'iconify-icon';
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
</script>

<!-- <MetaTags /> -->

<svelte:head>
	<!-- SEO -->
	<meta
		name="description"
		content="Jackson Sophat is a web developer who specializes in building (and occasionally designing) interactive web experiences."
	/>
	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="http://jacksonsophat.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Jackson Sophat | Welcome" />
	<meta
		property="og:description"
		content="Jackson Sophat is a web developer who specializes in building (and occasionally designing) interactive web experiences."
	/>
	<meta property="og:image" content="%sveltekit.assets%/images/og-img-2.png" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="http://jacksonsophat.com/" />
	<meta property="twitter:url" content="http://jacksonsophat.com/" />
	<meta name="twitter:title" content="Jackson Sophat | Welcome" />
	<meta
		name="twitter:description"
		content="Jackson Sophat is a web developer who specializes in building (and occasionally designing) interactive web experiences."
	/>
	<meta name="twitter:image" content="%sveltekit.assets%/images/og-img-2.png" />
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />
