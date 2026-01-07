import sciencespoLogo from '$lib/assets/sciencespoLogo.png';
import densityLogo from '$lib/assets/densityLogo.png';
import Freelance from '$lib/assets/Freelance.png';
import archiveLogo from '$lib/assets/archiveLogo.png';
import ecologiesLogo from '$lib/assets/ecologiesLogo.png';
import bottleneckLogo from '$lib/assets/bottleneckLogo.png';
import barometerLogo from '$lib/assets/barometerLogo.png';
import osintLogo from '$lib/assets/osintLogo.png';
import sampleLogo from '$lib/assets/medias/sample/Logo/Logo.png';
import refertoLogo from '$lib/assets/medias/referto/Logo/Logo.png';
import whysteriaLogo from '$lib/assets/medias/whysteria/Logo/Logo.png';
import paoloviLogo from '$lib/assets/medias/paolovi/Logo/PAOLO VI/ICONA.png';
import editorialinoLogo from '$lib/assets/medias/editorialino/Logo/Logo.png';
import tbdLogo from '$lib/assets/medias/tbdultramagazine/Logo/Logo.png';
import fobsLogo from '$lib/assets/medias/FOBS/Logo/Logo.png';

export interface PortfolioItem {
	title: string;
	routeId?:
		| 'ECOLOGIES'
		| 'FOBS'
		| 'BOTTLENECK'
		| 'ARCHIVE'
		| 'DATA_BAROMETER'
		| 'TEDIUM'
		| 'SCIENCESPO'
		| 'DENSITY'
		| 'FREELANCING'
		| 'DATA-BAROMETER'
		| 'SAMPLE'
		| 'REFERTO'
		| 'WHYSTERIA'
		| 'PAOLOVI'
		| 'EDITORIALINO'
		| 'TBDULTRAMAGAZINE';
	timespan?: string;
	url?: string;
	description: string;
	icon: string | null;
	isHighlighted: boolean;
	payoff?: string;
	info?: string;
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
					title: 'médialab Sciences Po',
					timespan: '2024-2026',
					url: 'https://medialab.sciencespo.fr/en/people/tommaso-prinetti/',
					description:
						'Design of the research infrastructure to enable participatory research projects and their communication through a mixture of design tools.',
					icon: sciencespoLogo,
					isHighlighted: true
				},
				{
					title: 'Density Design Lab',
					timespan: '2024',
					url: 'https://dipartimentodesign.polimi.it/en/research-groups/densitydesign-lab',
					description:
						'Research design & digital method design for EMIF-IFLA project about inner stereotypes of generative AI models (images) w/ Tactical Tech.',
					icon: densityLogo,
					isHighlighted: true
				},
				{
					title: 'Freelance designer',
					timespan: '2020-2024',
					url: 'https://tommasoprinetti.com/',
					description:
						'Brand identity strategy (design-side), video direction and execution, web-design & development, anything creative I managed to get my hands on.',
					icon: Freelance,
					isHighlighted: true
				}
			]
		},
		{
			category: 'caseStudies',
			categoryTitle: 'Case studies',
			items: [
				{
					title: 'Ecologies of LLM Practices',
					timespan: '2024-2026',
					payoff: 'Design research and art direction + Technical support',
					description:
						'EL2MP is a participatory inquiry at Sciences Po medialab documenting how professionals integrate LLMs into daily work through structured exercises across Evaluation, Effort, and Perception dimensions.',
					icon: ecologiesLogo,
					routeId: 'ECOLOGIES',
					isHighlighted: true,
					info: '2024-present | Project management, Concept design, UI design | Sciences Po médialab, Tommaso Prinetti'
				},
				{
					title: 'FutureObs',
					timespan: '2024-present',
					payoff: 'Design-research project studying human impact on marine ecosystems',
					description:
						'FUTUREOBS stages field sites across French marine ecosystems, using hybrid paper-digital artifacts to prompt dialogue about human environmental impact through computational pipelines and visual data.',
					icon: fobsLogo,
					routeId: 'FOBS',
					isHighlighted: true,
					info: '2024-present | Design research, Artifact development, Digital methods | Sciences Po médialab, Tommaso Prinetti'
				},
				{
					title: 'Bottleneck',
					timespan: '2023',
					payoff: 'AI-powered notification filtering system for work-life balance',
					description:
						'Bottleneck embeds local LLM engines to filter notifications entirely on-device, creating adaptive work-life boundaries while respecting data sovereignty through privacy-first AI.',
					icon: bottleneckLogo,
					routeId: 'BOTTLENECK',
					isHighlighted: true,
					info: '2023 | Product design, AI engineering, UX research | Tommaso Prinetti'
				},
				{
					title: 'Archive of all other projects',
					timespan: '2021-Ongoing',
					payoff:
						'All the not-featured projects are stored here: between passion projects, and other work ones.',
					description:
						'These “archives” are an agglomerate of all the design projects, brand identities, graphics, visuals, photographic and art direction projects, websites, etc.. that I could put my hands on in the latest years. I’ve never been interested in fixing vertically into one expertise, but rather approaching the same object from various creative angles, forms an holistic bond with each topic, company, project I dig into..',
					icon: archiveLogo,
					routeId: 'ARCHIVE',
					isHighlighted: true
				},
				{
					title: 'SAMPLE magazine',
					timespan: '2023',
					payoff: 'Tactile magazine exploring materiality through steel and poetry',
					description:
						"SAMPLE uses a 2mm steel sheet as handle to rekindle human touch with materiality, combining curated poems and photographic reportages to explore steel's journey from mine to product.",
					icon: sampleLogo,
					routeId: 'SAMPLE',
					isHighlighted: false,
					info: '2023 | Conceptual design, Material research, Editorial design | Tommaso Prinetti, Andrea Burchiani'
				},
				{
					title: 'Referto',
					timespan: '2023',
					payoff: 'Healthcare magazine giving voice to untold medical stories',
					description:
						'Referto translates frontline healthcare testimony into 200+ pages of interviews, photographic reportages, and infographics exploring belonging within contemporary healthcare systems.',
					icon: refertoLogo,
					routeId: 'REFERTO',
					isHighlighted: false,
					info: '2023 | Editorial design, Art direction, Data visualization | Many Matters Lab, Tommaso Prinetti'
				},
				{
					title: 'Whysteria',
					timespan: '2021',
					payoff: 'Interactive storytelling platform for digital narratives',
					description:
						'Whysteria transforms the felling of a 70-year-old wisteria into a forensic digital diorama using custom pipelines combining After Effects and Python scripts to map civic resistance.',
					icon: whysteriaLogo,
					routeId: 'WHYSTERIA',
					isHighlighted: false,
					info: '2021 | Forensic design, Data visualization, Video production | Giovanni Clericetti, Tommaso Prinetti, Andrea Burchiani'
				},
				{
					title: 'Paolovi',
					timespan: '2021-2023',
					payoff: 'Personal portfolio and creative direction showcase',
					description:
						'PaoloVi repositions a school through brand system redesign, translating educational ethos into 4 icons and a purpose-built website with backend infrastructure for content updates.',
					icon: paoloviLogo,
					routeId: 'PAOLOVI',
					isHighlighted: false,
					info: '2021-2023 | Brand strategy, Web development, Visual identity design | Tommaso Prinetti'
				},
				{
					title: 'Editorialino',
					timespan: '2022-present',
					payoff: 'Editorial design and content curation platform',
					description:
						'Editorialino counters GenZ attention spans with weekly newsletters fusing irony and reliable insight, expanding into the podcast Lider for European election coverage.',
					icon: editorialinoLogo,
					routeId: 'EDITORIALINO',
					isHighlighted: false,
					info: '2022-present | Digital product design, Content strategy, Brand development | Tommaso Prinetti, Cristiano Carenzi'
				},
				{
					title: 'Tbdultramagazine',
					timespan: '2022-present',
					payoff: 'Ultra-contemporary magazine design and art direction',
					description:
						'TBD Ultramagazine pairs intriguing-brutalism interfaces with structured information architecture, rejecting decorative excess for stark typographic rhythm in contemporary art discourse.',
					icon: tbdLogo,
					routeId: 'TBDULTRAMAGAZINE',
					isHighlighted: false,
					info: '2022-present | Web design, Art direction, Digital strategy | Tommaso Prinetti, TBD Collective'
				},
				{
					title: 'STEREOTYPE MACHINE',
					timespan: '2024',
					payoff: 'Interactive installation challenging social stereotypes',
					description:
						'STEREOTYPE MACHINE generates family and worker mosaics from minimal prompts, parsing images with computer vision libraries to reveal cultural biases in Stable Diffusion models.',
					icon: densityLogo,
					isHighlighted: false,
					info: '2024 | Digital methods research, Technical development, Data visualization | DensityDesign Lab, Tactical Tech, Tommaso Prinetti'
				}
			]
		},
		{
			category: 'highlights',
			categoryTitle: 'Publications, mentions, other stuff',
			items: [
				{
					title: 'Hype Studies conf. exhibition: Tedium',
					timespan: '2025',
					description:
						'Design of the "Tedium" installation at the 2025 Hype Studies conference in Barcelona.',
					icon: null,
					routeId: 'TEDIUM',
					isHighlighted: true
				},
				{
					title: 'Global Data Barometer honorable mention',
					timespan: '2025',
					description:
						'Received for a data visualization website showcasing the 2025 dataset for Global Data Barometer ONG.',
					icon: barometerLogo,
					url: 'https://data-barometer-exp.vercel.app/',
					routeId: 'DATA-BAROMETER',
					isHighlighted: true
				},
				{
					title: 'OSINT for Ukraine: Matrix Handbook',
					timespan: '2024',
					description:
						'Conceptualization of a matrix to evaluate OSINT accounts on X and realization of a handbook to implement it.',
					icon: osintLogo,
					url: 'https://osintforukraine.com/publications/amsterdam-matrix-handbook',
					isHighlighted: true
				},
				{
					title: 'Master cum Laude in Communication Design',
					timespan: '2021-2024',
					description: 'Politecnico di Milano',
					icon: null,
					isHighlighted: false
				},
				{
					title: 'DMI Summer school 2025',
					timespan: '2025',
					description: 'UvA Amsterdam - Digital Methods Initiative',
					icon: null,
					isHighlighted: false
				},
				{
					title: 'DMI Winter school 2024',
					timespan: '2024',
					description: 'UvA Amsterdam - Digital Methods Initiative',
					icon: null,
					isHighlighted: false
				},
				{
					title: 'Bachelor in Industrial Design',
					timespan: '2018-2021',
					description: 'Politecnico di Milano',
					icon: null,
					isHighlighted: false
				},
				{
					title: 'Erasmus+ experience',
					timespan: '2020',
					description: 'Dublin NCAD university',
					icon: null,
					isHighlighted: false
				},
				{
					title: 'Panasonic Industrial design workshop',
					timespan: '2021',
					description: 'Workshop on innovative plastics',
					icon: null,
					isHighlighted: false
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
