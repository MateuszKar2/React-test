import React, {Component} from 'react';
import css from "./Events.module.css";



class Events extends Component {

        static defaultProps = {
            step: 1,
            initialValue: 0
        } 
 
        state = {
            value: this.props.initialValue,

        };


    handleIncrement = () => {
        this.setState((state, props) => ({
            value: state.value + props.step
        }))
    }

    handleDecrement = () => {
        this.setState((state, props) => ({
            value: state.value - props.step
        }))
    }

    render() {

        const { step } = this.props;

        return (
            <>
                <button
                    className={css.button}
                    type="button"
                    onClick={this.handleIncrement}
                >
                    Increment by {step}
                </button>
                <span>{this.state.value}</span>
                <button
                    className={css.button}
                    type="button"
                    onClick={this.handleDecrement}
                >
                    Decrement by {step}
                </button>
            </>
        )
    }
}


export default Events