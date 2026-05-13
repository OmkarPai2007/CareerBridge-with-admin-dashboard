import {
  FaGlobe,
  FaHandshake,
  FaRocket,
} from "react-icons/fa"

function About() {
  return (
    <div className="page-container">

      <div className="page-hero">
        <h1>About CareerBridge</h1>

        <p>
          CareerBridge helps students
          and professionals connect
          with leading companies.
        </p>
      </div>

      <div className="feature-grid">

        <div className="feature-card">
          <div className="feature-icon">
            <FaGlobe />
          </div>

          <h3>Global Opportunities</h3>

          <p>
            Connect with employers
            from around the world.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaHandshake />
          </div>

          <h3>Trusted Platform</h3>

          <p>
            Secure and reliable hiring
            platform for everyone.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaRocket />
          </div>

          <h3>Career Growth</h3>

          <p>
            Empowering careers with
            modern technology solutions.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About