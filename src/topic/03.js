`// Zdarzenia i stany`
//Do tego momentu komponenty były ograniczone do otrzymywania propsów
//Jednak nie jest to prawdą od momentu gdy weszły hooki


`//Komponenty klasowe`
//konstruktor - wywołuje się jeden raz
//metody - do obsługi zdarzeń, na górze i przekazane jako referencje do danej metody w render, należy powiązać z this
//kontekst this - otrzymuje props ale dostęp do props odbywa się poprzez this.props(nie przypisywać w render)
//render - wywołuje się za każdym razem przy zmianie props lub state
//state - zmiana stanu nie aktualizuje jego rodziców czy sąsiadów, tylko dzieci. Deklaruje się w konstruktorze


`//Zdarzenia`
//addEventListener nie jest praktycznie wykorzystywane
//propsy zdarzeń nazwane są np.: onClick, onChange, onSubmit, onMouseEnter
//do propsu zdarzenia przekazujemy referencje do funkcji - funkcje deklaruje się na górze i przekazuje na dół jako zmienną


`//Zmiana stanu komponentu/Aktualizacja stanu komponentu`
//metoda setState(pierwszy argument, drugi argument)
//pierwszy argument - część stanu którą chcemy zmienić
//drugi argument - funkcja callback która wykona się po zmianie stanu ( nie obowiążkowa )
//Obiekt stanu to właśćiwość klasy, ale nigdy nie można jej zmieniać bezpośrednio !!!
//Aktualizacja stanu jest asynchroniczna (jeżeli używasz this, pamiętaj że kod synchroniczny zwróci wartość stanu przed aktualizacją)
