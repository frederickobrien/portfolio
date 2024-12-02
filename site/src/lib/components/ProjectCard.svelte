<script lang="ts">
	let {
		meta,
		path
	}: {
		meta: {
			title: string;
			description: string;
			heroImage: string;
			heroImageAlt: string;
		};
		path: string;
	} = $props();
</script>

<a href={path}>
	<div class="project-card">
		<div class="project-image">
			<img src={meta.heroImage} alt={meta.heroImageAlt} />
		</div>
		<div class="project-details">
			<div class="project-details-content">
				<h3>{meta.title}</h3>
				<div class="description">{meta.description}</div>
			</div>
		</div>
	</div>
</a>

<style>
	.project-card {
		background-color: #323232;
		color: white;
		display: flex;
		flex-direction: column;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
		&:hover {
			opacity: 0.9;
		}
		max-width: 800px;
	}
	.project-image {
		flex: 1;
	}
	.project-details {
		flex: 1;
		font-size: 1rem;
		padding: 1rem 0;
	}
	.project-details-content {
		padding: 0.5rem 1rem;
	}
	img {
		aspect-ratio: 3/2;
		width: 100%;
		filter: grayscale(100%);
	}
	h3 {
		font-size: 1rem;
		line-height: 1.2;
		margin-bottom: 0rem;
	}
	.description {
		font-size: 0.9rem;
	}
	a {
		text-decoration: none;
	}
</style>
