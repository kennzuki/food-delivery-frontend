import {  z } from 'zod'

export type Menu = {
  _id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
};

export type Testimonial = {
    id: number;
    name: string;
    role?: string;
    rating: string;
    text: string;
    avatarColor?: string;
};

export const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().min(1, { message: 'Email is required' }),
  rating: z.string().min(1, { message: 'Rating is required' }),
  review: z.string().min(1, { message: 'Review is required' }),
});

export type TFormSchemaType = z.infer<typeof formSchema>;