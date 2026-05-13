import { useState } from "react"

import {
  Link,
  useNavigate,
} from "react-router-dom"

function Signup() {

  const navigate = useNavigate()

  const [user, setUser] =
    useState({
      name: "",
      email: "",
      password: "",
      role: "candidate",
    })

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]:
        e.target.value,
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    const existingUsers =
      JSON.parse(
        localStorage.getItem("users")
      ) || []

    const alreadyExists =
      existingUsers.find(
        (u) =>
          u.email === user.email
      )

    if (alreadyExists) {

      alert(
        "User already exists"
      )

      return
    }

    existingUsers.push(user)

    localStorage.setItem(
      "users",
      JSON.stringify(existingUsers)
    )

    alert(
      "Signup Successful 🚀"
    )

    navigate("/login")
  }

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #e0ecff, #f8fbff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <div
        style={{
          width: "430px",
          background: "white",
          padding: "50px",
          borderRadius: "28px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >

        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          Create Account
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Join CareerBridge today.
        </p>

        <form
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <select
            name="role"
            onChange={handleChange}
            style={inputStyle}
          >

            <option value="candidate">
              Candidate
            </option>

            <option value="employer">
              Employer
            </option>

          </select>

          <button style={buttonStyle}>
            Signup
          </button>

        </form>

        <p
          style={{
            marginTop: "25px",
          }}
        >
          Already have account?

          <Link
            to="/login"
            style={{
              marginLeft: "8px",
              color: "#2563eb",
              fontWeight: "600",
            }}
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  )
}

const inputStyle = {

  width: "100%",
  padding: "16px",
  marginBottom: "20px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "16px",
}

const buttonStyle = {

  width: "100%",
  padding: "16px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "18px",
  fontWeight: "600",
  cursor: "pointer",
}

export default Signup