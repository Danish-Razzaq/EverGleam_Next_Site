import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId:'9mctz4u5',
  dataset:"production",
apiVersion:'v2023-11-03',
useCdn : true,
})