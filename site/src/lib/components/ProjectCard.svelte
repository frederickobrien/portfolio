<script lang="ts">
	export let meta: {
		title: string;
		description: string;
		heroImage: string;
		heroImageAlt: string;
	};
	export let path: string;
</script>

<a href={path}>
	<div class="project-card">
		<div class="project-image">
			<img src={meta.heroImage} alt={meta.heroImageAlt} />
		</div>
		<div class="project-details">
			<div class="project-details-content">
				<h3>{meta.title}</h3>
				<div>{meta.description}</div>
			</div>
		</div>
	</div>
</a>

<style>
	.project-card {
		background-color: #323232;
		border: 3px solid #323232;
		color: white;
		border-radius: 10px;
		margin-bottom: 1rem;
		display: flex;
		flex-direction: column;
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
	}
	.project-details-content {
		padding: 0.5rem 1rem;
	}
	img {
		aspect-ratio: 3/2;
		width: 100%;
		border-radius: 7px 7px 0 0;
	}
	h3 {
		font-size: 1.4rem;
		line-height: 1.2;
		margin-bottom: 0rem;
	}
	a {
		text-decoration: none;
	}
</style>
