//Vanilia CSS
import clsx from "clsx";
import "./Alert.css"

// const Alertsecond = ({ variant, outlined, elevated, children }) => {
//     const className = ["alert", variant];

//     if (outlined) className.push("is-outlined")
//     if (elevated) className.push("is-elevated")

//     return (
//         <p className={className.join(" ")}>{children}</p>
//     )
// };

const Alertsecond = ({ variant, outlined, elevated, children }) => {
    return (
        <p
            className={clsx(
                "alert",
                variant,
                outlined && "is-outlined",
                elevated && "is-elevated",
            )}
         >
            {children}
        </p>
    )
}

export default Alertsecond;