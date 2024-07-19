<script lang="ts">
	import { T } from '@threlte/core';
	import { GLTF, OrbitControls } from '@threlte/extras';

	export let url: string;
</script>

<T.PerspectiveCamera makeDefault position={[3, 3, 5]} fov={7}>
	<OrbitControls autoRotate enableDamping />
</T.PerspectiveCamera>
<T.AmbientLight />
<GLTF {url} />
