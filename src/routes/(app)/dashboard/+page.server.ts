import type { PageServerLoad } from './$types';
import type { Request, Status } from '$lib/interfaces';

export const load = (async ({ locals }) => {
	const [requestsCollection, statusesCollection] = await Promise.all([
		locals.pb.collection('requests').getList<Request>(1, 50, {
			sort: '-created',
			expand: 'user, status'
		}),
		locals.pb.collection('statuses').getList<Status>(1, 50, {
			sort: 'displayorder'
		})
	]);

	return {
		requests: structuredClone(requestsCollection.items),
		statuses: structuredClone(statusesCollection.items)
	};
}) satisfies PageServerLoad;
