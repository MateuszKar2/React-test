//Stylizacja

//Istnieją trzy sposoby dodawania stylów

//Style wbudowane- (najprostsze i najbardziej ograniczone)
//style używane w komponencie
//notacja camelCase np.bacgroundColor


//VanillaCSS - Boks.css
//w arkuszu styliz rozszerzeniem .css
//Problem jest powtarzanie się klas (rozwiązaniem problemu jest biblioteke clsx)


//CSS-moduły - Boks.module.css
//wygląda jak zwykły css, ale jest kompilowany do formatu ICSS
//moduł css posiada domyślny eksport
//unikalna nazwa [filename]_[classname]__[hash].
//właściwość composes  (nie trzeba biblioteki clsx)


//Normalize - należy dodać do głównego CSS aby znormalizować style