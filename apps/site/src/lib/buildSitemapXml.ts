export function escapeXml(unsafe: string): string {
	return unsafe
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

/**
 * Build a sitemap.xml document from absolute URLs.
 * @param urls fully-qualified URLs (canonical domain already applied)
 */
export function buildSitemapXml(urls: string[]): string {
	const body = urls
		.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`)
		.join('\n');
	return [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		body,
		'</urlset>',
		''
	].join('\n');
}
