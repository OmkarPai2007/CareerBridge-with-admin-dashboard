function Applicants() {

  const loggedInUser =
    JSON.parse(localStorage.getItem("loggedInUser"))

  const applicants =
    JSON.parse(localStorage.getItem("appliedJobs")) || []

  const filteredApplicants =
    applicants.filter(
      (applicant) =>
        applicant.employerEmail === loggedInUser?.email
    )

  return (

    <div className="page-container">

      <div className="page-hero">

        <h1>Applicants</h1>

        <p>
          View all candidates who applied.
        </p>

      </div>

      <div className="feature-grid">

        {filteredApplicants.length > 0 ? (

          filteredApplicants.map((applicant, index) => (

            <div
              key={index}
              className="feature-card"
            >

              <h3>
                {applicant.applicantName}
              </h3>

              <p>
                <strong>Email:</strong>{" "}
                {applicant.applicantEmail}
              </p>

              <p>
                <strong>Applied For:</strong>{" "}
                {applicant.title}
              </p>

              <p>
                <strong>Company:</strong>{" "}
                {applicant.company}
              </p>

            </div>

          ))

        ) : (

          <h2>No Applicants Yet.</h2>

        )}

      </div>

    </div>
  )
}

export default Applicants