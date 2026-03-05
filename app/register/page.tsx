"use client";

import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    console.log("Register:", email, password);
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="logo">🐾</div>

        <h2>Create Account</h2>
        <p className="subtitle">Register to adopt lovely cats</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" placeholder="user@email.com" />

          <label>Password</label>
          <input type="password" name="password" placeholder="password" />

          <button type="submit">Register</button>
        </form>

        <p className="switch-link">
          Already have an account?{" "}
          <Link href="/">Login</Link>
        </p>

      </div>
    </div>
  );
}