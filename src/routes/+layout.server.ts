import type { SiteMeta } from '$lib/site';

export const prerender = true;

const meta: SiteMeta = {
	siteTitle: 'NT² Community',
	tagline: 'Open community projects for NT² Vault — micro-apps, templates, and developer docs.',
	vaultMarketingUrl: 'https://nt2.me',
	communityDiscordUrl: 'https://discord.gg/MRRmbBe48'
};

export function load() {
	return { meta };
}
