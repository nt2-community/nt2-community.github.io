import '../app.css';

export interface SiteMeta {
	siteTitle: string;
	tagline: string;
	vaultMarketingUrl: string;
	communityDiscordUrl: string;
}

export interface CommunityProject {
	title: string;
	description: string;
	href: string;
	meta: string;
	external?: boolean;
}

export const communityProjects: CommunityProject[] = [
	{
		title: 'Micro-apps catalog',
		description:
			'App Store–style catalog for Vault-compatible micro-apps. Browse signed listings and open PRs to publish your app.',
		href: 'https://community.nt2.me/micro-apps-catalog/',
		meta: 'community.nt2.me/micro-apps-catalog'
	},
	{
		title: 'Developer docs',
		description:
			'Public author guides for micro-apps, .nt2tpl templates, and field packs — SDK, security, and catalog workflows.',
		href: 'https://community.nt2.me/developer-docs/',
		meta: 'community.nt2.me/developer-docs'
	},
	{
		title: 'Template catalog',
		description:
			'Browse and download community .nt2tpl category templates for offline import in NT² Vault Settings.',
		href: 'https://community.nt2.me/category-templates-catalog/',
		meta: 'community.nt2.me/category-templates-catalog'
	},
	{
		title: 'Discord',
		description: 'Chat with authors and maintainers — questions, feedback, and catalog updates.',
		href: 'https://discord.gg/K3YmGgwvV',
		meta: 'discord.gg/K3YmGgwvV',
		external: true
	}
];

export interface ContributeRow {
	topic: string;
	repository: string;
	url: string;
}

export const contributeRows: ContributeRow[] = [
	{
		topic: 'List a micro-app',
		repository: 'nt2-community/micro-apps-catalog',
		url: 'https://github.com/nt2-community/micro-apps-catalog/blob/main/CONTRIBUTING.md'
	},
	{
		topic: 'List a .nt2tpl template',
		repository: 'nt2-community/category-templates-catalog',
		url: 'https://github.com/nt2-community/category-templates-catalog/blob/main/CONTRIBUTING.md'
	},
	{
		topic: 'Fix developer documentation',
		repository: 'nt2-community/developer-docs',
		url: 'https://github.com/nt2-community/developer-docs/blob/main/CONTRIBUTING.md'
	},
	{
		topic: 'Hub landing copy',
		repository: 'nt2-community/nt2-community.github.io',
		url: 'https://github.com/nt2-community/nt2-community.github.io'
	}
];
