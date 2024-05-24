//komponent klasowy zajęcia 03.js


import React,{Component} from 'react';


class Button extends Component {

    static defaultProps = {
        step: 1,
        initialValue: 0,
    };

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.initialValue,
        }
    }


    handleIncrement(evt) {
        console.log("Add this product", evt)
        console.log("this.props", this.props)
    }

    handleDecrement(evt) {
        console.log("Remove this product", evt)
        console.log("this.props", this.props)
    }

    render(){
        const {step} = this.step;

        return(
            <div>
                <span>{this.state.value}</span>
                <button 
                type="button"
                onClick={this.handleIncrement}
                >Increment by {step}</button>

                <button 
                type="button"
                onClick={this.handleDecrement}
                >Decrement by {step}</button>

            </div>
        )
    }
}



export default Button;