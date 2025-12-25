import sciencespoLogo from '$lib/assets/sciencespoLogo.png';
import densityLogo from '$lib/assets/densityLogo.png';
import Freelance from '$lib/assets/Freelance.png';
import archiveLogo from '$lib/assets/archiveLogo.png';
import ecologiesLogo from '$lib/assets/ecologiesLogo.png';
import bottleneckLogo from '$lib/assets/bottleneckLogo.png';
import barometerLogo from '$lib/assets/barometerLogo.png';
import osintLogo from '$lib/assets/osintLogo.png';

export interface PortfolioItem {
	title: string;
	url?: string;
	route?: string;
	description: string;
	icon: string | null;
}

export interface PortfolioSection {
	category: string;
	categoryTitle: string;
	items: PortfolioItem[];
}

export interface PortfolioHeader {
	name: string;
	title: string;
	description: string;
	email: string;
}

export interface FooterLink {
	label: string;
	url: string;
}

export interface PortfolioData {
	header: PortfolioHeader;
	sections: PortfolioSection[];
	footer: {
		links: FooterLink[];
	};
}

export const portfolioData: PortfolioData = {
	header: {
		name: 'Tommaso Prinetti',
		title: 'product/digital designer & researcher.',
		description:
			'Designer focused on innovation and emerging technologies, working in interdisciplinary teams to bring a human-centered and use-oriented perspective to complex projects. I design both products and the infrastructure around them. My effort is oriented towards enabling people to actually do, explore and act through carefully designed tools.',
		email: 'tommi.prinetti@gmail.com'
	},
	sections: [
		{
			category: 'mainExperiences',
			categoryTitle: 'Main Experiences',
			items: [
				{
					title: 'médialab Sciences Po (2024-2026)',
					url: 'https://medialab.sciencespo.fr/en/',
					description:
						'Design of the research infrastructure to enable participatory research projects and their communication through a mixture of design tools.',
					icon: sciencespoLogo
				},
				{
					title: 'Density Design Lab (2024)',
					url: 'https://densitydesign.org/',
					description:
						'Research design & digital method design for EMIF-IFLA project about inner stereotypes of generative AI models (images) w/ Tactical Tech.',
					icon: densityLogo
				},
				{
					title: 'Freelance designer (2020-2024)',
					url: 'https://tommasoprinetti.com/',
					description:
						'Brand identity strategy (design-side), video direction and execution, web-design & development, anything creative I managed to get my hands on.',
					icon: Freelance
				}
			]
		},
		{
			category: 'foregroundProjects',
			categoryTitle: 'Foreground Projects',
			items: [
				{
					title: 'Ecologies of LLM Practices',
					route: '/ecologies',
					description:
						'Design of the research infrastructure to enable participatory research projects and their communication through a mixture of design tools.',
					icon: ecologiesLogo
				},
				{
					title: 'FutureObs',
					route: '/futureobs',
					description:
						'Design of the research infrastructure to enable participatory research projects and their communication through a mixture of design tools.',
					icon: null
				},
				{
					title: 'Bottleneck',
					route: '/bottleneck',
					description:
						'AI powered notification filtering service concept, from service concept and strategic innovation research.',
					icon: bottleneckLogo
				}
			]
		},
		{
			category: 'archives',
			categoryTitle: 'The archives: other projects',
			items: [
				{
					title: 'Archive',
					route: '/archive',
					description:
						'All the not-featured projects are stored here: between passion projects, and other work ones.',
					icon: archiveLogo
				}
			]
		},
		{
			category: 'highlights',
			categoryTitle: 'Highlights',
			items: [
				{
					title: 'Hype Studies conf. exhibition: Tedium -',
					description:
						'Design of the "Tedium" installation at the 2025 Hype Studies conference in Barcelona.',
					icon: null,
					route: '/tedium'
				},
				{
					title: 'Global Data Barometer honorable mention',
					description:
						'Received for a data visualization website showcasing the 2025 dataset for Global Data Barometer ONG.',
					icon: barometerLogo,
					url: 'https://data-barometer-exp.vercel.app/'
				},
				{
					title: 'OSINT for Ukraine: Matrix handbook -',
					description:
						'Conceptualization of a matrix to evaluate OSINT accounts on X and realization of a handbook to implement it.',
					icon: osintLogo,
					url: 'https://osintforukraine.com/publications/amsterdam-matrix-handbook'
				}
			]
		}
	],
	footer: {
		links: [
			{ label: 'CV', url: 'https://tommasoprinetti.com/Cv.pdf' },
			{ label: 'GitHub', url: 'https://github.com/TommasoPrinetti' },
			{ label: 'Are.na', url: 'https://www.are.na/tommaso-prinetti/channels' },
			{ label: 'Contact me', url: 'mailto:tommi.prinetti@gmail.com' }
		]
	}
};
