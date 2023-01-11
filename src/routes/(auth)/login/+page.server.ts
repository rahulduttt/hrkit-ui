import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const { email, password } = Object.fromEntries(
			await request.formData()
		) as {
			email: string;
			password: string;
		};

		try {
			await locals.pb.collection('users').authWithPassword(email, password);
		} catch (e) {
			console.error(e);
			throw e;
		}

		throw redirect(303, '/');
	}
};
