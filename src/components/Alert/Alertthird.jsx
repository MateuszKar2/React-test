//CSS-moduły
import clsx from "clsx";
import css from "./Alert.module.css";

const Alertthird = ({ variant, outlined, elevated, children }) => {
    return (
        <p
        className={clsx(css[variant], {
            [css.isOutlined]: outlined,
            [css.isElevated]: elevated,
          })}
        >
          {children}
        </p>
    )
}

export default Alertthird;