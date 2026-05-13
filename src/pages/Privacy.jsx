import {
  FaShieldAlt,
  FaLock,
  FaUserSecret,
} from "react-icons/fa"

function Privacy() {
  return (
    <div className="page-container">

      <div className="page-hero">
        <h1>Privacy Policy</h1>

        <p>
          Your privacy and security
          are our top priorities.
        </p>
      </div>

      <div className="feature-grid">

        <div className="feature-card">
          <div className="feature-icon">
            <FaShieldAlt />
          </div>

          <h3>Data Security</h3>

          <p>
            All user information is
            securely protected.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaLock />
          </div>

          <h3>Encrypted Access</h3>

          <p>
            Your account and data
            remain fully encrypted.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaUserSecret />
          </div>

          <h3>User Privacy</h3>

          <p>
            We never share personal
            data with third parties.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Privacy