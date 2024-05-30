//komponent klasowy zajęcia 03.js


import React,{Component} from 'react';


class Button extends Component {

    state = {isOpen: false};

    toggle = () => {
        this.setState(state => ({ isOpen: !state.isOpen}))
    }


    render(){
        const {isOpen} = this.state;
        const {children} = this.props;

        return(
            <div>
                <button onClick={this.toggle}>{isOpen ? "Now" : "Later"}</button>
                {isOpen && children}
            </div>
        )
    }
}



export default Button;