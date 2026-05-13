import {
  FaUserTie,
  FaLinkedin,
  FaLaptopCode,
} from "react-icons/fa"

function CareerAdvice() {
  return (
    <div className="page-container">

      <div className="page-hero">
        <h1>Career Advice</h1>

        <p>
          Get expert career guidance,
          interview preparation tips,
          and professional strategies
          to accelerate your growth.
        </p>
      </div>

      <div className="feature-grid">

        <div className="feature-card">
          <div className="feature-icon">
            <FaUserTie />
          </div>

          <h3>Interview Skills</h3>

          <p>
            Learn how to answer HR and
            technical interview questions
            confidently.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaLinkedin />
          </div>

          <h3>LinkedIn Branding</h3>

          <p>
            Build a powerful LinkedIn profile
            that attracts recruiters globally.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaLaptopCode />
          </div>

          <h3>Tech Skills</h3>

          <p>
            Improve modern development
            skills through practical projects.
          </p>
        </div>

      </div>

      <div className="stats-section">

        <div className="stat-box">
          <h2>10K+</h2>
          <p>Career Resources</p>
        </div>

        <div className="stat-box">
          <h2>5K+</h2>
          <p>Mock Interviews</p>
        </div>

        <div className="stat-box">
          <h2>98%</h2>
          <p>User Satisfaction</p>
        </div>

      </div>

    </div>
  )
}

export default CareerAdvice