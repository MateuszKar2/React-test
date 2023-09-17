import React, {Component} from "react";

const Button = ({ changeMessage, label }) => {
    <button onClick={changeMessage} type="button">{label}</button>
}

class Message extends Component {

    state = {
        message: new Date().toLocaleTimeString()
    }

    updateMessage = evt => {
        console.log(evt)

        this.setState({
            message: new Date().toLocaleTimeString()
        })
    }

    render() {
        return(
            <>
            <span>{this.state.message}</span>
            <Button label="Change message" changeMessage={this.updateMessage}/>
            </>
        )
    }
}

export default Message;