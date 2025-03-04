<script>
	import details from '../../../data/details.json';
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
			<a href={`https://bsky.app/profile/${details.socialMediaHandles.bluesky}`}
				><img src="/images/bluesky-icon.png" alt="Bluesky icon" /></a
			>
		</li>
	</ul>
</footer>

<style>
	footer {
		margin: 4rem auto;
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
