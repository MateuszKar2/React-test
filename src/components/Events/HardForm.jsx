import React, {Component} from "react";

const Gender = {
    MALE: "male",
    FEMALE: "femele"
};

const INITIAL_STATE = {
    login: "",
    email: "",
    password: "",
    agreed: false,
    gender:null,
    age: "",
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
        const {login, emeil, password, agreed, gender, age } = this.state

        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                    type="text"
                    placeholder="Enter login"
                    name="login"
                    value={login}
                    onChange={this.handleChange}
                    />
                </label>

                <label>
                    Emeil
                    <input
                    type="emeil"
                    placeholder="Enter emeil"
                    name="email"
                    value={emeil}
                    onChange={this.handleChange}
                    />
                </label>

                <label>
                    Password
                    <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    />
                </label>

                <section>
                    <h2>Choose your gender</h2>
                    <label>
                        Male
                        <input
                        type="radio"
                        checked={gender === Gender.MALE}
                        name="gender"
                        value={Gender.MALE}
                        onChnage={this.handleChange}
                        />
                    </label>
                    <label>
                        Male
                        <input
                        type="radio"
                        checked={gender === Gender.FEMALE}
                        name="gender"
                        value={Gender.FEMALE}
                        onChnage={this.handleChange}
                        />
                    </label>
                    <label>
                        Choose your age
                        <select name="age" value={age} onChange={this.handleChange}>
                            <option value="" disabled></option>
                            <option value="18-25">18-25</option>
                            <option value="26-35">26-35</option>
                            <option value="36+">36+</option>
                        </select>
                    </label>
                </section>

                <button type="submit" disabled={agreed}>
                    Sign up as {login}
                </button>
            </form>
        )
    }
}

export default HardForm;