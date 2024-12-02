<script lang="ts">
	import { T } from '@threlte/core';
	import { GLTF, OrbitControls } from '@threlte/extras';

	export let url: string;
</script>

<T.PerspectiveCamera makeDefault position={[30, 3, 5]} fov={7}>
	<OrbitControls autoRotate enableDamping />
</T.PerspectiveCamera>
<T.AmbientLight />
<!-- <GLTF {url} /> -->

<T.Mesh>
	<T.SphereGeometry args={[1, 16, 16]} />
	<T.MeshBasicMaterial wireframe />
</T.Mesh>
