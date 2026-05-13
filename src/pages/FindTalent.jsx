import {
  FaSearch,
  FaUserFriends,
  FaBolt,
} from "react-icons/fa"

function FindTalent() {
  return (
    <div className="page-container">

      <div className="page-hero">
        <h1>Find Talent</h1>

        <p>
          Discover top candidates and
          simplify recruitment using
          modern hiring tools.
        </p>
      </div>

      <div className="feature-grid">

        <div className="feature-card">
          <div className="feature-icon">
            <FaSearch />
          </div>

          <h3>Advanced Search</h3>

          <p>
            Filter candidates based on
            skills and experience.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaUserFriends />
          </div>

          <h3>Verified Profiles</h3>

          <p>
            Access trusted professional
            candidate profiles.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaBolt />
          </div>

          <h3>Quick Hiring</h3>

          <p>
            Hire faster with smart
            applicant management tools.
          </p>
        </div>

      </div>

      <div className="stats-section">

        <div className="stat-box">
          <h2>50K+</h2>
          <p>Candidate Profiles</p>
        </div>

        <div className="stat-box">
          <h2>20K+</h2>
          <p>Successful Hires</p>
        </div>

        <div className="stat-box">
          <h2>97%</h2>
          <p>Recruiter Satisfaction</p>
        </div>

      </div>

    </div>
  )
}

export default FindTalent