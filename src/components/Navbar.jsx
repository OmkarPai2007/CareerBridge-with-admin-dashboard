import {
  NavLink,
  useNavigate,
} from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

  const user =
    JSON.parse(
      localStorage.getItem("loggedInUser")
    )

  const logout = () => {

    localStorage.removeItem(
      "loggedInUser"
    )

    navigate("/login")
  }

  return (

    <nav>

      <h1>CareerBridge</h1>

      <div className="nav-links">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Jobs
        </NavLink>

        {user?.role === "candidate" && (

          <NavLink
            to="/candidate-dashboard"
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : ""
            }
          >
            Candidate Dashboard
          </NavLink>

        )}

        {user?.role === "employer" && (

          <>
            <NavLink
              to="/employer-dashboard"
              className={({ isActive }) =>
                isActive
                  ? "active-link"
                  : ""
              }
            >
              Employer Dashboard
            </NavLink>

            <NavLink
              to="/applicants"
              className={({ isActive }) =>
                isActive
                  ? "active-link"
                  : ""
              }
            >
              Applicants
            </NavLink>
          </>

        )}

        {!user ? (

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : ""
            }
          >
            Login
          </NavLink>

        ) : (

          <button
            onClick={logout}
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding:
                "10px 18px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Logout
          </button>

        )}

      </div>

    </nav>
  )
}

export default Navbar