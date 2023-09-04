import { Component } from "react";



class LoginForm extends Component {

    render() {
        return(
            <form>
                <input type="text" name="login" />
                <input type="password" name="password" />
                <button type="submit">Login</button>

            </form>
        )
    }
}

export default LoginForm