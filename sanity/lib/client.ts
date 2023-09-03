import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  token: process.env.ACCESS_SANITY_TOKEN,
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
