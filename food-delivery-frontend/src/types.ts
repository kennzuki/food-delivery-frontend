import {  z } from 'zod'

export interface Food {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  featured?: boolean;
}

export interface CartItem extends Food {
  quantity: number;
}

export interface FoodDetailModalProps {
  food: Food;
  isOpen: boolean;
  onClose: () => void;
}

export interface Testimonial {
  id: string | number;
  name: string;
  role?: string;
  rating: number;
  text: string;
  avatarColor: string;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (food: Food) => void;
  removeFromCart: (foodId: string) => void;
  updateQuantity: (foodId: string, quantity: number) => void;
  increaseQuantity: (foodId: string) => void;
  decreaseQuantity: (foodId: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  isInCart: (foodId: string) => boolean;
  getItemQuantity: (foodId: string) => number;
}

export type Category = 'Salads' | 'Rolls' | 'Deserts' | 'Sandwiches' | 'Cakes' | 'Vegetarian' | 'Pastas'

export const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().min(1, { message: 'Email is required' }),
  rating: z.string().min(1, { message: 'Rating is required' }),
  review: z.string().min(1, { message: 'Review is required' }),
});

export type TFormSchemaType = z.infer<typeof formSchema>;

export const contactForm= z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().min(1, { message: 'Email is required' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  message: z.string().min(1, { message: 'Message is required' }),
});

export type TContactSchemaType = z.infer<typeof contactForm>;