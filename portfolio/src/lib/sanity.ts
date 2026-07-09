import { createClient } from '@sanity/client';
import {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET
} from '$env/static/public';
import {createImageUrlBuilder}  from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

export const sanity = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  apiVersion: '2026-07-08',
  useCdn: true
});

const builder = createImageUrlBuilder({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET
});

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
