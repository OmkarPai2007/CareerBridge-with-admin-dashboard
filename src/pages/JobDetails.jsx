import { useParams, Link } from "react-router-dom"
import { jobs as defaultJobs } from "../data/jobs"

function JobDetails() {

  const { id } = useParams()

  const customJobs =
    JSON.parse(localStorage.getItem("customJobs")) || []

  const allJobs = [
    ...defaultJobs,
    ...customJobs.filter(
      (customJob) =>
        !defaultJobs.some(
          (defaultJob) =>
            defaultJob.id === customJob.id
        )
    ),
  ]

  const job = allJobs.find(
    (j) => Number(j.id) === Number(id)
  )

  if (!job) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        Job Not Found
      </div>
    )
  }

  const applyJob = () => {

    const user =
      JSON.parse(
        localStorage.getItem("loggedInUser")
      )

    if (!user) {
      alert("Please login first")
      return
    }

    const appliedJobs =
      JSON.parse(
        localStorage.getItem("appliedJobs")
      ) || []

    const alreadyApplied =
      appliedJobs.find(
        (j) =>
          j.id === job.id &&
          j.userEmail === user.email
      )

    if (alreadyApplied) {
      alert("Already Applied")
      return
    }

    const updatedJobs = [
      ...appliedJobs,
      {
        ...job,
        applicantName: user.name,
        applicantEmail: user.email,
        userEmail: user.email,

        // IMPORTANT FIX
        employerEmail: job.employerEmail,
      },
    ]

    localStorage.setItem(
      "appliedJobs",
      JSON.stringify(updatedJobs)
    )

    alert("Applied Successfully 🚀")
  }

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #eff6ff, #dbeafe)",
        padding: "60px 8%",
      }}
    >

      <div
        style={{
          background: "white",
          padding: "50px",
          borderRadius: "25px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >

        <h1
          style={{
            fontSize: "50px",
            color: "#0f172a",
            marginBottom: "10px",
          }}
        >
          {job.title}
        </h1>

        <h2
          style={{
            color: "#2563eb",
            marginBottom: "25px",
          }}
        >
          {job.company}
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "#475569",
            marginBottom: "15px",
          }}
        >
          📍 {job.location}
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#475569",
            marginBottom: "25px",
          }}
        >
          💰 {job.salary}
        </p>

        <h3
          style={{
            fontSize: "28px",
            marginBottom: "15px",
          }}
        >
          Job Description
        </h3>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#475569",
          }}
        >
          {job.description}
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "20px",
          }}
        >

          <button
            onClick={applyJob}
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "16px 35px",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Apply Now
          </button>

          <Link to="/jobs">

            <button
              style={{
                background: "#e2e8f0",
                color: "#0f172a",
                border: "none",
                padding: "16px 35px",
                borderRadius: "12px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Back
            </button>

          </Link>

        </div>

      </div>

    </div>
  )
}

export default JobDetails