import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import api from '../lib/axios';
import type { Food, Category } from '../types';

export const useFoods = (category: Category | null = null): UseQueryResult<Food[], Error> => {
  return useQuery({
    queryKey: ['foods', category],
    queryFn: async () => {
      const url = category ? `/foods?category=${category}` : '/foods';
      const response = await api.get<Food[]>(url);
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useFeaturedFoods = (): UseQueryResult<Food[], Error> => {
  return useQuery({
    queryKey: ['foods', 'featured'],
    queryFn: async () => {
      const response = await api.get<Food[]>('/foods?featured=true');
      return response.data;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export const useFoodById = (id: string): UseQueryResult<Food, Error> => {
  return useQuery({
    queryKey: ['food', id],
    queryFn: async () => {
      const response = await api.get<Food>(`http://localhost:5000/foods/${id}`);
      return response.data;
    },
    // staleTime: 5 * 60 * 1000,
    // gcTime: 10 * 60 * 1000,
    enabled: !!id, // Only run query if id exists
  });
};