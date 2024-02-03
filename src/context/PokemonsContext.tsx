import { createContext } from "react";


export const PokemonsContext = createContext()

export const PokemonsContext = ({ children }) => {
  return <PokemonsContext.Provider>{children}</PokemonsContext.Provider>
}
