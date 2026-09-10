import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // 1. Check if both fields are empty
        if (user === "" && password === "") {
            setError("Please fill in the form");
            return;
        }

        // 2. Check if username is empty
        if (user === "") {
            setError("User is not found");
            return;
        }

        // 3. Check if password is empty
        if (password === "") {
            setError("Password is not found");
            return;
        }

        // 4. Correct username and password
        if (user === "admin" && password === "123") {
            setError("");
            navigate("/home");
            return;
        }

        // 5. Wrong username or password
        if (user !== "admin") {
            setError("User is not found");
            return;
        }

        if (password !== "123") {
            setError("Password is incorrect");
            return;
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>

                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        placeholder="Enter username"
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />
                </div>

                {error && <p className="error">{error}</p>}

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
