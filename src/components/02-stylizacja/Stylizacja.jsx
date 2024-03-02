

export const Stylizacja = () => {
    return(
        <>
        <p
           style={{
            margin: 8,
            padding: "15px",
            backgroundColor: "red",
            color: "blue",
            textAlign: "center",
           }}
           >
            Style wbudowane
        </p>
        <div>Nazwy właściwości składające się z dwóch lub więcej słów, takie jak background-color, muszą być zapisane w notacji camelCase </div>
        <div>Przyrostek px zostanie automatycznie dodany do wartości liczbowych większości właściwości.</div>
        </>
    )
}