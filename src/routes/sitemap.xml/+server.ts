import { buildSitemapXml } from '$lib/buildSitemapXml';
import { mountedUrls } from '$lib/mountedRoutes';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = () => {
	const xml = buildSitemapXml(mountedUrls());
	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=0, must-revalidate'
		}
	});
};
