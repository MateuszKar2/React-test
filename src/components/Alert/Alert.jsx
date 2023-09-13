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

const getBgColor = variant => {
    switch (variant) {
        case "info":
            return "blue";
        case "success":
            return "green";
        case "error":
            return "orange";
        default:
            throw new Error(`Unsupported variant prop value - ${variant}`);
    }
}

export const Alert = ({ children, variant }) => {
    return (
        <p
        style={{...alertStyle, backgroundColor: getBgColor(variant) }}>
            {children}
        </p>
    )
}

export default alertStyle;