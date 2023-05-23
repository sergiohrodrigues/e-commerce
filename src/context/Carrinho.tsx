import React, { createContext, useState, useEffect } from "react";
import { Item } from "../utilidade/Item";

type CarrinhoProviderProps = {
  children: React.ReactNode;
}

const CarrinhoContext = createContext([] as Item[]);
CarrinhoContext.displayName = 'Carrinho'
const CarrinhoDispatchContext = createContext((item: Item[]) => {});

function CarrinhoProvider({ children }: CarrinhoProviderProps) {
  const [carrinho, SetCarrinho] = useState<Item[]>([]);

  // useEffect(() => {
  // }, [])

  return (
    <CarrinhoContext.Provider value={carrinho}>
      <CarrinhoDispatchContext.Provider value={SetCarrinho}>
        {children}
      </CarrinhoDispatchContext.Provider>
    </CarrinhoContext.Provider>
  );
}

export { CarrinhoProvider, CarrinhoContext, CarrinhoDispatchContext };