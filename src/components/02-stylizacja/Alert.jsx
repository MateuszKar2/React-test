

const alertStyle = {
    margin: 20,
    padding: 0,
    backgroundColor: "yellow",
    color: "black",
    textAlign: "center",
    fontSize: 20,
}

const getBgColor = variant => {
    switch (variant) {
        case "info":
            return "blue";
        case "success":
            return "green";
        case "error":
            return "orange";
        default:
            return "purple";
    }
}


export const Alert = ({variant, children}) => {
    return(
        <>  
            <button className="btn">
                Available
            </button>

            <button>
                Not Available
            </button>
            
            <p style={{...alertStyle, backgroundColor: getBgColor(variant)}}>
                {children}
            </p>      
        </>
    )
}