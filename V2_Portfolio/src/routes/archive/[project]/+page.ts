import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { portfolioData } from '$lib/data/portfolio';
import { filterMedias } from '$lib/data/media';
import { allMedias } from '$lib/data/media';

const allProjects = portfolioData.sections.flatMap((section) => section.items);

export const load: PageLoad = ({ params }) => {
	//params.project is the slug received from the navigation
	const project = allProjects.find((project) => project.routeId === params.project);

	if (project) {
		console.log('project', project);
		return {
			project,
			medias: filterMedias(params.project, allMedias)
		};
	} else {
		error(404, 'Not found');
	}
};
