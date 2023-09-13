import React, {Component} from 'react';
import css from "./Events.module.css";

class Events extends Component {

    static defaultProps = {
        step: 1,
        initialValue: 0,
    };

    static propptypes = {};




        state = {
            value: this.props.initialValue,

        };
        // this.handleIncrement = this.handleIncrement.bind(this);
        // this.handleDecrement = this.handleDecrement.bind(this);


    handleIncrement(evt) {
        console.log("Increment button was clicked!", evt);
        console.log("this.props: ", this.props);
    }

    handleDecrement(evt) {
        console.log("Increment button was clicked!", evt);
        console.log("this.props: ", this.props);
    }

    render() {

        const step = this.step;

        return (
            <>
                <span>{this.state.value}</span>
                <button
                    className={css.button}
                    type="button"
                    onClick={this.handleIncrement}
                >
                    Increment by {step}
                </button>

                <span>0</span>

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