export const allMedias: Record<string, any> = import.meta.glob(
	'/src/lib/assets/medias/**/*.{jpg,jpeg,png,gif,svg,webp,mp4,avi,mov}',
	{
		eager: true
	}
);

export function filterMedias(
	projectId: string,
	allMedias?: Record<string, any>
): Record<string, any> {
	if (!allMedias) {
		console.log('no medias');
		return {};
	}
	// Filter all media files that match the projectId (case-insensitive)
	const matchingMedias = Object.keys(allMedias).filter((m: string) =>
		m.toUpperCase().includes(projectId.toUpperCase())
	);

	// Return an object with all matching media files
	const result: Record<string, any> = {};
	matchingMedias.forEach((path) => {
		result[path] = allMedias[path];
	});

	return result;
}
