import React, {Component} from "react";


class LifeCycle extends Component {

    props = {
         colorAlicji: "red",
         colorMarka: "blue",
         colorTomka: "green",
    }   

    state = {
        favoriteColor: "red"
    }

    constructor() {
        super()
        console.log("Wywołam błąd")
    }

    render() {
        return(
            <>
                <h1>Hello world</h1>
            </>
        )
    }
}

export default LifeCycle;