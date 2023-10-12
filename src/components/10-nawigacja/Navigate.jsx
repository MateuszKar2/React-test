import { useState } from "react"

export const Navigate = () => {
    const [ isLoginSuccess, setIsLoginSuccess ] = useState(false);

    const handleSubmit = async values => {
        const response = await FakeAPI.login(values);
        setIsLoginSuccess(response.success);
    };

if (isLoginSuccess) {
    return <Navigate to="/profile" replece />;
}

return (
    <div>
        <h1>Login page</h1>
        <LoginForm onSubmit={handleSubmit} />
    </div>
    );
}
;