//Vanilia CSS

import "./Alert.css"

const Alertsecond = ({ variant, outlined, elevated, children }) => {
    const className = ["alert", variant];

    if (outlined) className.push("is-outlined")
    if (elevated) className.push("is-elevated")

    return (
        <p className={className.join(" ")}>{children}</p>
    )
};

export default Alertsecond;