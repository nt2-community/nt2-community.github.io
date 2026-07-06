<script lang="ts">
	import { base } from '$app/paths';
	import { contributeRows } from '$lib/site';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Contribute · {data.meta.siteTitle}</title>
</svelte:head>

<article class="space-y-6">
	<h1 class="text-3xl font-bold">Contribute</h1>
	<p class="max-w-2xl text-base-content/70">
		Each community site is an independent Git repository with its own CI and CONTRIBUTING workflow.
		Pick the repo that matches what you want to change.
	</p>

	<div class="overflow-x-auto rounded-box border border-base-300 bg-base-100">
		<table class="table">
			<thead>
				<tr>
					<th>Topic</th>
					<th>Repository</th>
					<th>Guide</th>
				</tr>
			</thead>
			<tbody>
				{#each contributeRows as row (row.repository)}
					<tr>
						<td>{row.topic}</td>
						<td><code>{row.repository}</code></td>
						<td><a class="link" href={row.url} rel="noopener noreferrer">CONTRIBUTING</a></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<p>
		Questions? Join
		<a class="link" href={data.meta.communityDiscordUrl} rel="noopener noreferrer">NT² Community on Discord</a>.
	</p>
	<p>
		<a class="link" href="{base}/">← Back to hub</a>
	</p>
</article>
