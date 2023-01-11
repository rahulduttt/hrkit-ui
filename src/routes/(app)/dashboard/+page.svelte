<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ul>
	{#each data.requests as request (request.id)}
		<li>
			{request.title} - {request.expand.user.id} - {request.expand.status.name}
		</li>
	{/each}
</ul>

<ul>
	{#each data.statuses as status (status.id)}
		<li>{status.name}</li>
	{/each}
</ul>
