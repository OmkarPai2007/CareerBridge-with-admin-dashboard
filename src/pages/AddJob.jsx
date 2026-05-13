import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"

function AddJob() {

    const navigate = useNavigate()

    const [searchParams] =
        useSearchParams()

    const jobId =
        searchParams.get("id")

    const existingJobs =
        JSON.parse(localStorage.getItem("customJobs")) || []

    const editJob =
        existingJobs.find(
            (job) =>
                job.id === Number(jobId)
        )

    const [job, setJob] = useState({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
    })

    useEffect(() => {

        if (editJob) {

            setJob(editJob)
        }

    }, [])

    const handleChange = (e) => {

        setJob({
            ...job,
            [e.target.name]:
                e.target.value,
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const loggedInUser =
            JSON.parse(
                localStorage.getItem("loggedInUser")
            )

        let updatedJobs = [...existingJobs]

        if (editJob) {

            updatedJobs =
                updatedJobs.map((j) =>
                    j.id === editJob.id
                        ? job
                        : j
                )

            alert("Job Updated Successfully 🚀")

        } else {

            updatedJobs.push({
                ...job,
                id: Date.now() + Math.random(),
                employerEmail:
                    loggedInUser.email,
            })

            alert("Job Added Successfully 🚀")
        }

        localStorage.setItem(
            "customJobs",
            JSON.stringify(updatedJobs)
        )

        navigate("/employer-dashboard")
    }

    return (

        <div className="page-container">

            <div className="page-hero">

                <h1>
                    {editJob
                        ? "Edit Job"
                        : "Add New Job"}
                </h1>

                <p>
                    Post opportunities for candidates.
                </p>

            </div>

            <div
                style={{
                    maxWidth: "750px",
                    margin: "auto",
                    background: "white",
                    padding: "45px",
                    borderRadius: "24px",
                    boxShadow:
                        "0 10px 30px rgba(0,0,0,0.08)",
                }}
            >

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="title"
                        placeholder="Job Title"
                        value={job.title}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />

                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={job.company}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />

                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={job.location}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />

                    <input
                        type="text"
                        name="salary"
                        placeholder="Salary"
                        value={job.salary}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />

                    <textarea
                        name="description"
                        placeholder="Job Description"
                        value={job.description}
                        onChange={handleChange}
                        required
                        style={textareaStyle}
                    />

                    <button
                        type="submit"
                        style={buttonStyle}
                    >
                        {editJob
                            ? "Update Job"
                            : "Add Job"}
                    </button>

                </form>

            </div>

        </div>
    )
}

const inputStyle = {
    width: "100%",
    padding: "16px",
    marginBottom: "22px",
    borderRadius: "14px",
    border: "1px solid #cbd5e1",
    fontSize: "16px",
    outline: "none",
}

const textareaStyle = {
    width: "100%",
    height: "150px",
    padding: "16px",
    marginBottom: "22px",
    borderRadius: "14px",
    border: "1px solid #cbd5e1",
    fontSize: "16px",
    outline: "none",
}

const buttonStyle = {
    width: "100%",
    padding: "17px",
    borderRadius: "14px",
    border: "none",
    background:
        "linear-gradient(to right,#2563eb,#3b82f6)",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
}

export default AddJob