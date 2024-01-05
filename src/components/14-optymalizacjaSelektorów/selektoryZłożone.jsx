//Selektory to zwykłe funkcje, co znaczy, że można wykonywać w nich jakieś działania poza zwracaniem wartości. 
//Selektor może obliczać wartość, wykorzystując części statusu i zwracać wyniki obliczeń.

const selectTotalValue = state => {
    const a = state.values.a;
    const b = state.values.b;
    return a + b;
};