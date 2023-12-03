//Aby otrzymać dane ze store, komponenty powinny subskrybować niezbędne dla nich części statusu Redux. 
//W tym celu w bibliotece React Redux istnieje hook useSelector()


export const statusFilters = Object.freeze({  all: "all",  active: "active",  completed: "completed",});

//Wykorzystujemy metodę aby "zamrozić" obiekt wartości filtra i zapobiec jego przypadkowej zmianie po odnośniku w miejscach importu.