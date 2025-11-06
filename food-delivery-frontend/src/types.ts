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
    rating: number;
    text: string;
    avatarColor?: string;
};