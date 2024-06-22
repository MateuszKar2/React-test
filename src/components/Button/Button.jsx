
import React, {Component} from "react"
import css from "./Button.module.css"


class Button extends Component { 
    state = {
        isOpen: 'false'
    };

toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen}));
};

    render() {
        const {isOpen} = this.state;
        const {children} = this.props; 

        return (
        <>
            <button className={css.button}
            onClick={this.toggle}
            > 
                {isOpen ? "Buy book" : "Not buy"}
            </button>    
        </>
        )

    }
}

export default Button