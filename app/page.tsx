"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    console.log("Login:", email, password);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">🐾</div>

        <h2>Cat Adoption</h2>
        <p className="subtitle">Sign in to manage cat adoptions</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" required />

          <label>Password</label>
          <input type="password" name="password" required />

          <p className="signup-text">
            No account yet? <Link href="/register">Click here to Register</Link>
          </p>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}