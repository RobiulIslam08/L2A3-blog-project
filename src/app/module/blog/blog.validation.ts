import { z } from 'zod';

const createBlogSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: 'Title is required' })
      .min(3, { message: 'Title must be at least 3 characters long' })
      .max(100, { message: 'Title must be less than 100 characters' }),

    content: z
      .string({ required_error: 'Content is required' })
      .min(10, { message: 'Content must be at least 10 characters long' }),

    isPublished: z
      .boolean()
      .optional(), // Optional, default is true
  }),
});

const updateBlogSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(3, { message: 'Title must be at least 3 characters long' })
      .max(100, { message: 'Title must be less than 100 characters' })
      .optional(),

    content: z
      .string()
      .min(10, { message: 'Content must be at least 10 characters long' })
      .optional(),

    isPublished: z
      .boolean()
      .optional(),
  }),
});

export const blogValidation = {
  createBlogSchema,
  updateBlogSchema,
};
