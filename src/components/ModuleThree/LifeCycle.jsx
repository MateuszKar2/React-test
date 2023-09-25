import React, {Component} from "react";


class LifeCycle extends Component {
state = { hasError: false }

// Jeśli ta metoda została wywołana to gdzieś niżej w drzewie musiał wystąpić błąd
    componentDidCatch(error, info) { //Metoda do wyłapywania błędów

// Ustanawiamy stan
        this.setState({ hasError: true });
    }

    render() {
        //Jeżeli wystapił błąd...
        if(this.setState.hasError) {
            return <h1>Something went wrong, please try again later</h1>;
        }
        
        // Jeśli wszystko OK, renderujemy dzieci
            return this.props.children
    }
}

//FAZA...    
//MONTOWANIA
//componentDidMount
//  async componentDidMount() {
//     const response = await axios.get('/some-url')
//     this.setState({ dats: response.data })
//  }

// AKTUALIZACJI
// shouldComponentUpdate(nextProps, nextState) {
//     const oldProps = this.props
//     if (nextProps.someProp === oldProps.someProp) {
//         return false;
//     }
//     return true;
// }    

//ODMONTOWANIA
//componentWillUnmount() {
//    console.log("Clock", "componentWillUnmount");
// clearInterval(this.timerID);
// }

export default LifeCycle;