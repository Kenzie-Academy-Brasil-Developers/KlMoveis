import { z } from 'zod'

const categoriesSchema = z.object({
    id: z.number().int().positive(),
    name: z.string().max(45)
})

export const createCategoriesSchema = categoriesSchema.omit({ id: true })
export const readAllCategoriesSchema = categoriesSchema.array()