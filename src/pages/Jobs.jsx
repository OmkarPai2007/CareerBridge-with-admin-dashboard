import { useState } from "react"
import { jobs as defaultJobs } from "../data/jobs"
import { Link } from "react-router-dom"

function Jobs() {

  const [search, setSearch] = useState("");

  const [activeMenu, setActiveMenu] =
    useState("dashboard");

  const customJobs =
    JSON.parse(localStorage.getItem("customJobs")) || []

  const jobs = [
    ...defaultJobs,
    ...customJobs.filter(
      (customJob) =>
        !defaultJobs.some(
          (defaultJob) =>
            defaultJob.id === customJob.id
        )
    ),
  ]

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(to bottom right, #eff6ff, #dbeafe)",
          padding: "60px 7%",
        }}
      >

        {/* HEADER */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >

          <h1
            style={{
              fontSize: "52px",
              color: "#0f172a",
              marginBottom: "15px",
            }}
          >
            Explore Opportunities
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#475569",
              marginBottom: "35px",
            }}
          >
            Discover top jobs from leading companies
          </p>

          {/* SEARCH BAR */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              type="text"
              placeholder="Search jobs, companies, location..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              style={{
                width: "500px",
                maxWidth: "90%",
                padding: "18px 25px",
                borderRadius: "16px",
                border: "none",
                outline: "none",
                fontSize: "18px",
                background: "white",
                boxShadow:
                  "0 10px 30px rgba(37,99,235,0.12)",
              }}
            />
          </div>

        </div>

        {/* JOB GRID */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "35px",
          }}
        >

          {filteredJobs.length > 0 ? (

            filteredJobs.map((job) => (

              <div
                key={job.id}
                className="job-card"
              >

                <div>

                  <h2 className="job-title">
                    {job.title}
                  </h2>

                  <p className="job-company">
                    {job.company}
                  </p>

                  <p className="job-location">
                    📍 {job.location}
                  </p>

                  <p className="job-salary">
                    💰 {job.salary}
                  </p>

                </div>

                <Link
                  to={`/jobs/${job.id}`}
                  className="details-btn"
                >
                  View Details
                </Link>

              </div>

            ))

          ) : (

            <div
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#64748b",
                textAlign: "center",
                gridColumn: "1/-1",
                marginTop: "40px",
              }}
            >
              No jobs found.
            </div>

          )}

        </div>

      </div>
    </>
  )
}

export default Jobs