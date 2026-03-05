"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }

    console.log("Login:", username, password);
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="logo">🐾</div>

        <h2>Cat Adoption</h2>
        <p className="subtitle">Sign in to manage cat adoptions</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" placeholder="" />

          <label>Password</label>
          <input type="password" name="password" placeholder="" />

          <p className="signup-text">
            No Account yet?{" "}
            <Link href="/register">Click here to Register</Link>
          </p>

          <button type="submit">Login</button>
        </form>

      </div>
    </div>
  );
}