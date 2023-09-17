const { Component } = require("react");



class Toggle extends Component {

        state = { value: 0 };


        toogle = () => {
            this.setState(state => ({ isOpen: !state.isOpen }));
        }

    render() {

        const { isOpen } = this.state;
        const { children } = this.props;

        return (
            <>
                <button onClick={this.toogle}>{isOpen ? "Hide" : "Show"}</button>
                {isOpen && children}
            </>
        )
    }

}


export default Toggle;