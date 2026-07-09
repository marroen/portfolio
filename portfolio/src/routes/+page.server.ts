import { sanity } from '$lib/sanity';

export async function load() {
  const projects = await sanity.fetch(`*[_type == "project"] `);

  return {
    projects
  };
}