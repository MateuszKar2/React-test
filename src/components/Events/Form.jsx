import React, {Component} from "react";


class Form extends Component {

    handleSubmit = evt => {
        evt.preventDefault();
    

    const form = evt.currentTarget;
    const login = form?.elements?.login?.value;
    const password = form?.elements?.password?.value;

    console.log(login, password)

    this.props.onSubmit({ login, password });

    form.reset();
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="login" />
                <input type="password" name="password" />
                <button type="subit">Login</button>
            </form>
        )
    }
}

export default Form;