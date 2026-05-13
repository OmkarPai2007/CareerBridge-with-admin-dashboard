import { useState } from "react"

import {
  FaBriefcase,
  FaUsers,
  FaChartLine,
} from "react-icons/fa"

function PostJob() {

  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [location, setLocation] = useState("")
  const [salary, setSalary] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    if (
      !title ||
      !company ||
      !location ||
      !salary ||
      !description
    ) {
      alert("Please fill all fields")
      return
    }

    const existingJobs =
      JSON.parse(localStorage.getItem("customJobs")) || []

    const newJob = {
      id: Date.now(),
      title,
      company,
      location,
      salary,
      description,
    }

    const updatedJobs = [
      ...existingJobs,
      newJob,
    ]

    localStorage.setItem(
      "customJobs",
      JSON.stringify(updatedJobs)
    )

    alert("Job Added Successfully")

    setTitle("")
    setCompany("")
    setLocation("")
    setSalary("")
    setDescription("")
  }

  return (
    <div className="page-container">

      <div className="page-hero">

        <h1>Post a Job</h1>

        <p>
          Reach thousands of talented
          candidates and hire the best
          professionals quickly.
        </p>

      </div>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "700px",
          margin: "0 auto 60px",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >

        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) =>
            setSalary(e.target.value)
          }
          style={inputStyle}
        />

        <textarea
          placeholder="Job Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          style={{
            ...inputStyle,
            height: "140px",
            resize: "none",
          }}
        />

        <button
          type="submit"
          className="cta-btn"
          style={{
            width: "100%",
            marginTop: "10px",
          }}
        >
          Add Job
        </button>

      </form>

      {/* FEATURES */}

      <div className="feature-grid">

        <div className="feature-card">

          <div className="feature-icon">
            <FaBriefcase />
          </div>

          <h3>Easy Job Posting</h3>

          <p>
            Create and publish jobs
            in just a few minutes.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">
            <FaUsers />
          </div>

          <h3>Access Talent</h3>

          <p>
            Connect with skilled
            professionals worldwide.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">
            <FaChartLine />
          </div>

          <h3>Hiring Analytics</h3>

          <p>
            Track applications and
            improve recruitment strategy.
          </p>

        </div>

      </div>

    </div>
  )
}

const inputStyle = {
  width: "100%",
  padding: "16px",
  marginBottom: "20px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
  outline: "none",
}

export default PostJob