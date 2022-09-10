import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
	site: 'https://barabasakos.hu',
	integrations: [preact(), robotsTxt()],
});
