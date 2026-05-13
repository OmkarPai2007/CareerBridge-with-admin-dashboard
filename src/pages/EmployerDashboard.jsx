import { Link, useNavigate } from "react-router-dom"
import {
  FaBriefcase,
  FaUsers,
  FaChartLine,
} from "react-icons/fa"

import { jobs as defaultJobs } from "../data/jobs"

function EmployerDashboard() {

  const navigate = useNavigate()

  const loggedInUser =
    JSON.parse(localStorage.getItem("loggedInUser"))

  const customJobs =
    JSON.parse(
      localStorage.getItem("customJobs")
    ) || []

  // MERGE DEFAULT + CUSTOM JOBS
  const allJobs = [
    ...defaultJobs,
    ...customJobs,
  ]

  // SHOW ALL JOBS FOR EMPLOYER
  const employerJobs = allJobs.filter((job) => {

    // old jobs from jobs.js
    if (!job.employerEmail) {
      return true
    }

    // newly added jobs
    return (
      job.employerEmail === loggedInUser?.email
    )
  })

  const applicants =
    JSON.parse(localStorage.getItem("appliedJobs")) || []

  const employerApplicants = applicants.filter(
    (applicant) =>
      applicant.employerEmail === loggedInUser?.email
  )

  const handleDelete = (id) => {

    const updatedJobs = customJobs.filter(
      (job) => job.id !== id
    )

    localStorage.setItem(
      "customJobs",
      JSON.stringify(updatedJobs)
    )

    window.location.reload()
  }

  return (

    <div className="page-container">

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >

        <h1
          style={{
            fontSize: "60px",
          }}
        >
          Employer Dashboard
        </h1>

      </div>

      <div className="stats-section">

        <div className="stat-box">

          <FaBriefcase
            size={40}
            color="#2563eb"
          />

          <h2>{employerJobs.length}</h2>

          <p>Jobs Posted</p>

        </div>

        <div className="stat-box">

          <FaUsers
            size={40}
            color="#2563eb"
          />

          <h2>{employerApplicants.length}</h2>

          <p>Total Applicants</p>

        </div>

        <div className="stat-box">

          <FaChartLine
            size={40}
            color="#2563eb"
          />

          <h2>95%</h2>

          <p>Hiring Success</p>

        </div>

      </div>

      <div className="cta-section">

        <h2>
          Hire Smarter 💼
        </h2>

        <p>
          Post jobs and connect with top candidates quickly.
        </p>

        <Link to="/post-job">

          <button className="cta-btn">
            Add New Job
          </button>

        </Link>

      </div>

      <div
        style={{
          marginTop: "80px",
        }}
      >

        <h2
          style={{
            marginBottom: "30px",
            fontSize: "42px",
          }}
        >
          Manage Jobs
        </h2>

        <div className="feature-grid">

          {employerJobs.length > 0 ? (

            employerJobs.map((job) => (

              <div
                key={job.id}
                className="feature-card"
              >

                <h3>{job.title}</h3>

                <p>
                  <strong>Company:</strong> {job.company}
                </p>

                <p>
                  <strong>Location:</strong> {job.location}
                </p>

                <p>
                  <strong>Salary:</strong> {job.salary}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    marginTop: "25px",
                  }}
                >

                  <button
                    onClick={() =>
                      navigate(
                        `/post-job?id=${job.id}`
                      )
                    }
                    style={{
                      padding: "12px 22px",
                      border: "none",
                      borderRadius: "10px",
                      background: "#2563eb",
                      color: "white",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Edit
                  </button>

                  {/* DELETE ONLY CUSTOM JOBS */}

                  {job.employerEmail && (

                    <button
                      onClick={() =>
                        handleDelete(job.id)
                      }
                      style={{
                        padding: "12px 22px",
                        border: "none",
                        borderRadius: "10px",
                        background: "#ef4444",
                        color: "white",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Delete
                    </button>

                  )}

                </div>

              </div>

            ))

          ) : (

            <h2>No Jobs Added Yet.</h2>

          )}

        </div>

      </div>

    </div>
  )
}

export default EmployerDashboard