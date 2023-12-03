//Obiekt, który zawiera pełen status aplikacji, metody dostępu do statusu i wysyłania akcji.
//Do utworzenia store istnieje funkcja createStore()
//która przyjmuje kilka parametrów i zwraca nowy obiekt store.

import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";

const initialStore = {
    tasks: [
        { id: 0, text: "Learn HTML and CSS", completed: true },
        { id: 1, text: "Get good at JavaScript", completed: true },
        { id: 2, text: "Master React", completed: false },
        { id: 3, text: "Discover Redux", completed: false },
        { id: 4, text: "Build amazing apps", completed: false },
      ],
      filters: {
        status: "all",
      },
}


const rootReducer = (state = initialStore, action) => {
    return state;
}

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);


//Po utworzeniu store należy związać go z komponentami React, aby mogły otrzymywać dostęp do store i jego metod.
//  W tym celu w bibliotece React Redux istnieje komponent Provider, który oczekuje jednoimiennego propsu store. 
// Aby dowolny komponent w aplikacji mógł być wykorzystany przez store, owijamy w Provider całe drzewo komponentów.