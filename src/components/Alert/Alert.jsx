//STYLIZACJA - style wbudowane
 const alertStyle = {
    color: "red",
    margin: 100,
    padding: 20,
    backgroundColor: "yellow",
    textAlign: "center",
    fontSize: 35,
    fontWeight: 700,
};


export const Alert = ({ children, variant }) => {
    return (
        <p
        style={{...alertStyle, backgroundColor: getBgColor(variant) }}>
            {children}
        </p>
    )
}

export default alertStyle;