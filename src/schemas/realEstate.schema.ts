import { z } from "zod";

export const realEstateSchema = z.object({
    id: z.number(). positive(),
    sold: z.boolean().default(false),
    value: z.string().or(z.number()).default(0),
    size: z.number().int().positive(),
    createAt: z.string(),
    updateAt: z.string(),
    address: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.string().max(8).nullish(),
        city: z.string().max(20),
        state: z.string().max(2),
    }),
    categoryId: z.number().int().positive()
})

export const createClinicSchema = realEstateSchema.omit({ id: true, createAt: true, updateAt: true })