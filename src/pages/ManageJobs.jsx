import { useEffect, useState } from "react"

function ManageJobs() {

    const [jobs, setJobs] = useState([])

    useEffect(() => {

        const customJobs =
            JSON.parse(localStorage.getItem("customJobs")) || []

        setJobs(customJobs)

    }, [])

    const deleteJob = (id) => {

        const updatedJobs = jobs.filter(
            (job) => job.id !== id
        )

        setJobs(updatedJobs)

        localStorage.setItem(
            "customJobs",
            JSON.stringify(updatedJobs)
        )

        alert("Job Deleted")
    }

    return (

        <div className="page-container">

            <div className="page-hero">

                <h1>Manage Jobs</h1>

            </div>

            <div className="feature-grid">

                {jobs.map((job) => (

                    <div
                        key={job.id}
                        className="feature-card"
                    >

                        <h3>{job.title}</h3>

                        <p>{job.company}</p>

                        <button
                            className="cta-btn"
                            onClick={() => deleteJob(job.id)}
                        >
                            Delete Job
                        </button>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default ManageJobs