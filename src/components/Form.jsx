import React,{Component} from 'react';


const INITIALSTATE = {
    login: "",
    email: "",
    password: "",
};
class Form extends Component {

    state = {...INITIALSTATE};

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    };

    handleSubmit = e => {
        e.preventDefault();
        const { login, email, password } = this.state;

        console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);

        this.props.onSubmit({ ...this.state });
        this.reset();
    };

    reset = () => {
        this.setState({...INITIALSTATE})
    };

    render() {
        const { login, email, password } = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
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
                    Email
                        <input
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
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

                <button type="submit">Sign up as</button>
            </form>
        )
    }

    // state = {
    //     initialValue: "",
    // }

    // handleChange = e => {
    //     this.setState({ inputValue: e.target.value });
    // };
    // render() {
    //     const {inputValue} = this.state;
    //     return(
    //         <input type="text" value={inputValue} onChange={this.handleChange}/>
    //     )
    // }
}

export default Form;