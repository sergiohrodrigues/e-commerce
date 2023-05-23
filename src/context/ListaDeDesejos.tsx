import React, { createContext, useState, useEffect } from "react";
import { Item } from "../utilidade/Item";

type ListaDeDesejosProviderProps = {
  children: React.ReactNode;
}

const ListaDeDesejosContext = createContext([] as Item[]);
ListaDeDesejosContext.displayName = 'Lista de Desejos'
const ListaDeDesejosDispatchContext = createContext((item: Item[]) => {});

function ListaDeDesejosProvider({ children }: ListaDeDesejosProviderProps) {
  const [listaDesejos, setListaDesejos] = useState<Item[]>([]);

  // useEffect(() => {
  // }, [])

  return (
    <ListaDeDesejosContext.Provider value={listaDesejos}>
      <ListaDeDesejosDispatchContext.Provider value={setListaDesejos}>
        {children}
      </ListaDeDesejosDispatchContext.Provider>
    </ListaDeDesejosContext.Provider>
  );
}

export { ListaDeDesejosProvider, ListaDeDesejosContext, ListaDeDesejosDispatchContext };