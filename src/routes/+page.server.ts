// import * as db from '$lib/server/database';
import * as db from "$lib/server/db/dbManager"
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		tally: ["1", "2"],
	};
};