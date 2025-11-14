import { createContext } from "react";

export const MenuContext = createContext({});

export function MenuProvider ({children}: any) {
  return (
    <MenuContext.Provider value={{}}>
      {children}
    </MenuContext.Provider>
  )
}



export default MenuContext;