import {
  NavLink,
  useNavigate,
} from "react-router-dom"

import {
  FaUserCircle,
  FaChartPie,
} from "react-icons/fa"

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

            {/* ADMIN DASHBOARD */}

            <NavLink
              to="/admin-dashboard"
              className={({ isActive }) =>
                isActive
                  ? "active-link"
                  : ""
              }
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaChartPie />
              Admin Dashboard
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              background: "rgba(37,99,235,0.08)",
              padding: "10px 18px",
              borderRadius: "16px",
            }}
          >

            <FaUserCircle
              size={28}
              color="#2563eb"
            />

            <span
              style={{
                fontWeight: "700",
                color: "#0f172a",
              }}
            >
              {user.name}
            </span>

            <button
              onClick={logout}
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding:
                  "10px 18px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "700",
                transition: "0.3s",
              }}
            >
              Logout
            </button>

          </div>

        )}

      </div>

    </nav>
  )
}

export default Navbar