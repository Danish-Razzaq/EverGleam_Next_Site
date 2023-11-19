import category from "./category";
import heroImages from "./heroImages";
import product from "./product";

import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category , heroImages],
}