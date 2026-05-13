import { useState } from "react"

import {
  Link,
  useNavigate,
} from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || []

    const validUser = users.find(
      (u) =>
        u.email === form.email &&
        u.password === form.password
    )

    if (!validUser) {

      alert("Invalid Credentials")

      return
    }

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(validUser)
    )

    alert(
      `Welcome ${validUser.name} 🚀`
    )

    if (
      validUser.role === "candidate"
    ) {

      navigate(
        "/candidate-dashboard"
      )

    } else {

      navigate(
        "/employer-dashboard"
      )
    }
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
          Welcome Back
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Login to continue your
          journey.
        </p>

        <form
          onSubmit={handleSubmit}
        >

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

          <button style={buttonStyle}>
            Login
          </button>

        </form>

        <p
          style={{
            marginTop: "25px",
          }}
        >
          Don't have an account?

          <Link
            to="/signup"
            style={{
              marginLeft: "8px",
              color: "#2563eb",
              fontWeight: "600",
            }}
          >
            Signup
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

export default Login