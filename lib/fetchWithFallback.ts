import { sanityClient } from './sanity'

/**
 * Fetch from Sanity with a static fallback.
 * If Sanity is unavailable or the project ID is not set, returns the fallback array.
 */
export async function fetchWithFallback<T>(
  query: string,
  fallback: T[]
): Promise<T[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return fallback
  }

  try {
    const data = await sanityClient.fetch<T[]>(query)
    return data && data.length > 0 ? data : fallback
  } catch (err) {
    console.warn('[Sanity] Fetch failed, using static fallback:', err)
    return fallback
  }
}
