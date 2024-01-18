import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Fake Movie API',
			social: {
				github: 'https://github.com/enzo-lopez/api-movies',
				linkedin: 'https://www.linkedin.com/in/enzofabianlopez/',
			},
			sidebar: [
				{
					label: 'Inicio',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Características', link: '/caracteristicas/' },
						{ label: 'Instalación e Implementación', link: '/instalacion/' },
					],
				},
				{
					label: 'API REST',
					items: [
						{ label: 'Uso', link: '/uso/' },
						{ label: 'GET', link: '/get/' },
						{ label: 'POST', link: '/post/' },
						{ label: 'PUT', link: '/put/' },
						{ label: 'PATCH', link: '/patch/' },
						{ label: 'DELETE', link: '/delete/' },
					],
					//autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
