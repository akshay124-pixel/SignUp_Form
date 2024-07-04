import React, { useState } from "react";
import "../App.css";

function SignUp() {
  const [count, setCount] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCount({ ...count, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/form/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(count),
      });

      if (response.ok) {
        setCount({
          name: "",
          email: "",
          password: "",
        });
        alert(`${count.name} Successfully Submitted`);
      } else {
        console.error("Failed to submit the form");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div
      className="Box"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
          <span className="title">Sign up</span>
          <span className="subtitle">
            Create a free account with your email.
          </span>
          <div className="form-container">
            <input
              type="text"
              className="input"
              placeholder="Full Name"
              name="name"
              value={count.name}
              onChange={handleInput}
            />
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              value={count.email}
              onChange={handleInput}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              value={count.password}
              onChange={handleInput}
            />
          </div>
          <button type="submit">Sign up</button>
        </form>
        <div className="form-section">
          <p>
            Have an account? <a href="/">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
