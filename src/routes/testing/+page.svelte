<script lang="ts">
	let testImg: string = 'https://www.jacksonsophat.com/images/og-img-2.png';

	console.log(testImg);
</script>

<h1>Testing</h1>

<!-- <img 
srcset=``
src={testImg} alt="" /> -->

<img
	srcset="https://www.jacksonsophat.com/images/og-img-2.png 480w, https://www.jacksonsophat.com/images/og-img-2.png 800w"
	sizes="(max-width: 600px) 480px,
         800px"
	src="https://www.jacksonsophat.com/images/og-img-2.png"
	alt="Elva dressed as a fairy"
/>
