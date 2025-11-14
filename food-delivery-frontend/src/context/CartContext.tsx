import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import type { Food,CartItem,CartContextType } from "../types";

const CartContext = createContext<CartContextType | undefined>(undefined);

enum CART_ACTIONS {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
  CLEAR_CART = 'CLEAR_CART',
  LOAD_CART = 'LOAD_CART'
}

type CartAction =
  | { type: CART_ACTIONS.ADD_TO_CART; payload: Food }
  | { type: CART_ACTIONS.REMOVE_FROM_CART; payload: string }
  | { type: CART_ACTIONS.UPDATE_QUANTITY; payload: { id: string; quantity: number } }
  | { type: CART_ACTIONS.CLEAR_CART }
  | { type: CART_ACTIONS.LOAD_CART; payload: CartItem[] };

interface CartState {
  items: CartItem[];
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const existingItem = state.items.find(
        item => item._id === action.payload._id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    }

    case CART_ACTIONS.UPDATE_QUANTITY: {
      return {
        ...state,
        items: state.items.map(item =>
          item._id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0)
      };
    }

    case CART_ACTIONS.CLEAR_CART: {
      return {
        ...state,
        items: []
      };
    }

    case CART_ACTIONS.LOAD_CART: {
      return {
        ...state,
        items: action.payload
      };
    }

    default:
      return state;
  }
};

const initialState: CartState = {
  items: []
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart: CartItem[] = JSON.parse(savedCart);
        dispatch({ type: CART_ACTIONS.LOAD_CART, payload: parsedCart });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = (food: Food): void => {
    dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: food });
  };

  const removeFromCart = (foodId: string): void => {
    dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: foodId });
  };

  const updateQuantity = (foodId: string, quantity: number): void => {
    dispatch({ 
      type: CART_ACTIONS.UPDATE_QUANTITY, 
      payload: { id: foodId, quantity } 
    });
  };

  const increaseQuantity = (foodId: string): void => {
    const item = state.items.find(item => item._id === foodId);
    if (item) {
      updateQuantity(foodId, item.quantity + 1);
    }
  };

  const decreaseQuantity = (foodId: string): void => {
    const item = state.items.find(item => item._id === foodId);
    if (item && item.quantity > 1) {
      updateQuantity(foodId, item.quantity - 1);
    } else if (item && item.quantity === 1) {
      removeFromCart(foodId);
    }
  };

  const clearCart = (): void => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };

  const getTotalItems = (): number => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = (): number => {
    return state.items.reduce(
      (total, item) => total + (item.price * item.quantity), 
      0
    );
  };

  const isInCart = (foodId: string): boolean => {
    return state.items.some(item => item._id === foodId);
  };

  const getItemQuantity = (foodId: string): number => {
    const item = state.items.find(item => item._id === foodId);
    return item ? item.quantity : 0;
  };

  const value: CartContextType = {
    cart: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    isInCart,
    getItemQuantity
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};