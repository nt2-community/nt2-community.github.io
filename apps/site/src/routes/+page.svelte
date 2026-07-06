<script lang="ts">
	import { base } from '$app/paths';
	import { communityProjects } from '$lib/site';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.meta.siteTitle}</title>
</svelte:head>

<section class="mb-10">
	<p class="text-sm font-medium uppercase tracking-wide text-primary">Open community for NT² Vault</p>
	<h1 class="mt-2 text-3xl font-bold text-base-content">Build, browse, and share ecosystem artifacts.</h1>
	<p class="mt-3 max-w-2xl text-base-content/70">{data.meta.tagline}</p>
	<div class="mt-4 flex flex-wrap gap-2">
		<span class="badge badge-outline">Open source</span>
		<span class="badge badge-outline">Signed micro-app catalog</span>
		<span class="badge badge-outline">.nt2tpl templates</span>
	</div>
</section>

<section aria-labelledby="projects-heading">
	<h2 id="projects-heading" class="mb-4 text-sm font-semibold uppercase tracking-wide text-base-content/60">
		Projects
	</h2>
	<ul class="grid gap-4 sm:grid-cols-2">
		{#each communityProjects as project (project.href)}
			<li>
				<a
					href={project.href}
					class="card border border-base-300 bg-base-100 shadow-sm transition hover:border-primary"
					rel={project.external ? 'noopener noreferrer' : undefined}
				>
					<div class="card-body">
						<h3 class="card-title text-lg">{project.title}</h3>
						<p class="text-sm text-base-content/70">{project.description}</p>
						<p class="text-xs text-base-content/50">{project.meta}</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>

<p class="mt-8 text-sm text-base-content/60">
	End-user help lives on <a class="link" href="https://nt2.me/help">nt2.me/help</a> — this hub is for
	authors and community contributors.
</p>
