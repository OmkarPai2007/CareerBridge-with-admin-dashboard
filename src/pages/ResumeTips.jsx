import {
  FaFileAlt,
  FaPenNib,
  FaCheckCircle,
} from "react-icons/fa"

function ResumeTips() {
  return (
    <div className="page-container">

      <div className="page-hero">
        <h1>Resume Tips</h1>

        <p>
          Create a professional resume
          that helps you stand out and
          get hired faster.
        </p>
      </div>

      <div className="feature-grid">

        <div className="feature-card">
          <div className="feature-icon">
            <FaFileAlt />
          </div>

          <h3>Professional Format</h3>

          <p>
            Learn modern resume formatting
            used by top companies.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaPenNib />
          </div>

          <h3>Powerful Summary</h3>

          <p>
            Write compelling career
            summaries that impress HR.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaCheckCircle />
          </div>

          <h3>ATS Friendly</h3>

          <p>
            Optimize resumes for Applicant
            Tracking Systems.
          </p>
        </div>

      </div>

      <div className="stats-section">

        <div className="stat-box">
          <h2>12K+</h2>
          <p>Resume Templates</p>
        </div>

        <div className="stat-box">
          <h2>7K+</h2>
          <p>Resume Reviews</p>
        </div>

        <div className="stat-box">
          <h2>92%</h2>
          <p>Hiring Success</p>
        </div>

      </div>

    </div>
  )
}

export default ResumeTips