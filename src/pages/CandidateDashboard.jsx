import { Link } from "react-router-dom"

function CandidateDashboard() {

  const appliedJobs =
    JSON.parse(localStorage.getItem("appliedJobs")) || []

  // FIXED HERE
  const currentUser =
    JSON.parse(localStorage.getItem("loggedInUser")) || {}

  const userJobs = appliedJobs.filter(
    (job) => job.userEmail === currentUser.email
  )

  const customJobs =
    JSON.parse(localStorage.getItem("customJobs")) || []

  const validJobs = userJobs.filter((appliedJob) => {

    // keep default jobs
    if (appliedJob.defaultJob) {
      return true
    }

    // keep only existing custom jobs
    return customJobs.some(
      (job) => job.id === appliedJob.id
    )
  })

  return (
    <div className="page">

      {/* HERO SECTION */}
      <section className="hero-section">

        <h1>Candidate Dashboard</h1>

        <p>
          Track your applied jobs and career progress.
        </p>

      </section>

      {/* APPLIED JOBS */}
      <section className="jobs-section">

        <h2 className="section-title">
          Applied Jobs
        </h2>

        {validJobs.length === 0 ? (

          <div className="empty-box">

            <h3>No jobs applied yet</h3>

            <Link to="/jobs">

              <button className="primary-btn">
                Browse Jobs
              </button>

            </Link>

          </div>

        ) : (

          <div className="jobs-grid">

            {validJobs.map((job, index) => (

              <div className="job-card" key={index}>

                <h3>{job.title}</h3>

                <p>
                  <strong>Company:</strong>{" "}
                  {job.company}
                </p>

                <p>
                  <strong>Location:</strong>{" "}
                  {job.location}
                </p>

                <p>
                  <strong>Salary:</strong>{" "}
                  {job.salary}
                </p>

                <Link to={`/jobs/${job.id}`}>

                  <button
                    style={{
                      marginTop: "15px",
                      background: "#2563eb",
                      color: "white",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    View Details
                  </button>

                </Link>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>
  )
}

export default CandidateDashboard