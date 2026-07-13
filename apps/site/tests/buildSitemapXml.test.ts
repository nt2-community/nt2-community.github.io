import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSitemapXml } from '../src/lib/buildSitemapXml.ts';

const CANONICAL = 'https://community.nt2.me';

test('emits a valid xml declaration and urlset root', () => {
	const xml = buildSitemapXml([]);
	assert.match(xml, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
	assert.match(xml, /<urlset[^>]*xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/);
});

test('wraps every mounted path in a <loc> under the canonical domain', () => {
	const paths = ['/', '/contribute', '/micro-apps-catalog/apps/nt2-app-hello'];
	const xml = buildSitemapXml(paths.map((p) => `${CANONICAL}${p}`));
	for (const p of paths) {
		assert.ok(xml.includes(`<loc>${CANONICAL}${p}</loc>`), `missing loc for ${p}`);
	}
});

test('escapes reserved xml characters in urls', () => {
	const xml = buildSitemapXml([`${CANONICAL}/search?q=a&b=c`]);
	assert.ok(xml.includes('&amp;'), 'expected & to be escaped as &amp;');
	assert.ok(!xml.includes('<loc>https://community.nt2.me/search?q=a&b=c</loc>'));
});

test('lists every expected community path for the canonical domain', () => {
	const all = [
		'/',
		'/contribute',
		'/micro-apps-catalog',
		'/micro-apps-catalog/contribute',
		'/micro-apps-catalog/apps/nt2-app-demo-notes',
		'/micro-apps-catalog/apps/nt2-app-hello',
		'/developer-docs',
		'/developer-docs/micro-apps/overview',
		'/developer-docs/micro-apps/quick-start',
		'/developer-docs/micro-apps/sdk',
		'/developer-docs/micro-apps/security',
		'/developer-docs/micro-apps/catalog',
		'/developer-docs/templates/nt2tpl',
		'/developer-docs/templates/catalog',
		'/developer-docs/field-packs/overview',
		'/category-templates-catalog',
		'/category-templates-catalog/contribute',
		'/category-templates-catalog/templates/community-demo-ssh-key',
		'/category-templates-catalog/templates/community-gym-membership'
	];
	const xml = buildSitemapXml(all.map((p) => `${CANONICAL}${p}`));
	for (const p of all) {
		assert.ok(xml.includes(`<loc>${CANONICAL}${p}</loc>`), `missing loc for ${p}`);
	}
});
