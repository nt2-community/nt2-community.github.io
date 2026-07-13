export const CANONICAL_ORIGIN = 'https://community.nt2.me';

/**
 * Hub-local manifest of every path mounted under the canonical community domain.
 * The three project sites (micro-apps-catalog, developer-docs, category-templates-catalog)
 * are served as path-scoped sites under this same origin and inherit the hub's
 * sitemap + favicon. Keep this in sync when a catalog adds/removes an entry.
 */
export const mountedPaths: string[] = [
	// hub
	'/',
	'/contribute',
	// micro-apps-catalog
	'/micro-apps-catalog',
	'/micro-apps-catalog/contribute',
	'/micro-apps-catalog/apps/nt2-app-demo-notes',
	'/micro-apps-catalog/apps/nt2-app-hello',
	// developer-docs
	'/developer-docs',
	'/developer-docs/micro-apps/overview',
	'/developer-docs/micro-apps/quick-start',
	'/developer-docs/micro-apps/sdk',
	'/developer-docs/micro-apps/security',
	'/developer-docs/micro-apps/catalog',
	'/developer-docs/templates/nt2tpl',
	'/developer-docs/templates/catalog',
	'/developer-docs/field-packs/overview',
	// category-templates-catalog
	'/category-templates-catalog',
	'/category-templates-catalog/contribute',
	'/category-templates-catalog/templates/community-demo-ssh-key',
	'/category-templates-catalog/templates/community-gym-membership'
];

export function mountedUrls(): string[] {
	return mountedPaths.map((p) => `${CANONICAL_ORIGIN}${p}`);
}
