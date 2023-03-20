import type { PageServerLoad } from "./$types";
import {redirect} from '@sveltejs/kit'

export const load = (async () => {
  let user=false;
  if (!user) {
    throw redirect(300,'/signin?signedin=false')
  }
  return {};
}) satisfies PageServerLoad;
