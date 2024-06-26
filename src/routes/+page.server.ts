import type { PageServerLoad } from './$types';
import { db } from '$lib/db/';

export const load: PageServerLoad = async () => {
	return {
		ramais: await db.selectFrom('Ramais').selectAll().execute()
	};
};
