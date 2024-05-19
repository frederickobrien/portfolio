<script>
	import details from '../../data/details.json';
</script>

<footer>
	<ul>
		<li>
			<a href={`https://github.com/${details.socialMediaHandles.gitHub}`}
				><img src="/images/github-icon.png" alt="GitHub icon" /></a
			>
		</li>
		<li>
			<a href={`mailto:${details.personalInfo.emailAddress}`}
				><img src="/images/email-icon.png" alt="Email icon" /></a
			>
		</li>
		<li>
			<a href={`https://twitter.com/${details.socialMediaHandles.twitter}`}
				><img src="/images/x-icon.png" alt="X icon" /></a
			>
		</li>
	</ul>
</footer>

<style>
	footer {
		margin: 2rem auto;
	}
	ul {
		display: flex;
		column-gap: 1em;
		justify-content: center;
		list-style-type: none;
		padding: 0;
	}

	img {
		width: 30px;
	}
</style>
