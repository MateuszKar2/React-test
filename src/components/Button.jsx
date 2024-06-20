
import React, {Component} from "react"

class Button extends Component { 

handleBuyBook(evt) {
    console.log("Buy this book", evt)

}

    render() {

        return (
        <>
            <button
            type="button"
            onClick={this.handleBuyBook}
            >
                Buy this book
            </button>    
        </>
        )

    }
}

export default Button