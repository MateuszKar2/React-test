import React, {Component} from "react";

const INITIAL_STATE = {
    login: "",
    email: "",
    password: "",
    agreed: false,
};

class HardForm extends Component {

state = {...INITIAL_STATE};  //aktualizacja stanu

handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    this.setState({ [name]: type === "checbox" ? checked : value });
};

handleSubmit = evt => {  //wywoływany podczas wysyłania formularza
    evt.preventDefault();
    const { login, emeil, password, agreed } = this.state;

    console.log(`Login: ${login}, Emeil: ${emeil}, Password: ${password}, Agreed: ${agreed}`);

    this.props.onSubmit({ ...this.state});
    this.reset();
};
    render() {
        const {login, emeil, password, agreed } = this.state

        return(
            <form>
                <label>
                    Name
                    <input
                    type="text"
                    placeholder="Enter login"
                    value={login}
                    onChange={this.handleChange}
                    />
                </label>

                <label>
                    Emeil
                    <input
                    type="emeil"
                    placeholder="Enter emeil"
                    value={emeil}
                    onChange={this.handleChange}
                    />
                </label>

                <label>
                    Password
                    <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={this.handleChange}
                    />
                </label>

                <button type="submit" disabled={!agreed}>
                    Sign up as {login}
                </button>
            </form>
        )
    }
}

export default HardForm;