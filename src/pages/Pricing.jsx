function Pricing() {
  return (
    <div className="page-container">

      <div className="page-hero">
        <h1>Pricing Plans</h1>

        <p>
          Flexible pricing plans for
          startups, businesses, and
          enterprises.
        </p>
      </div>

      <div className="feature-grid">

        <div className="pricing-card">
          <h2>Starter</h2>

          <h1
            style={{
              fontSize: "60px",
              margin: "20px 0",
              color: "#2563eb",
            }}
          >
            ₹999
          </h1>

          <p>1 Job Posting</p>
          <p>Basic Support</p>
          <p>7 Days Visibility</p>

          <button className="cta-btn">
            Choose Plan
          </button>
        </div>

        <div className="pricing-card">
          <h2>Professional</h2>

          <h1
            style={{
              fontSize: "60px",
              margin: "20px 0",
              color: "#2563eb",
            }}
          >
            ₹2999
          </h1>

          <p>10 Job Postings</p>
          <p>Priority Support</p>
          <p>30 Days Visibility</p>

          <button className="cta-btn">
            Choose Plan
          </button>
        </div>

        <div className="pricing-card">
          <h2>Enterprise</h2>

          <h1
            style={{
              fontSize: "60px",
              margin: "20px 0",
              color: "#2563eb",
            }}
          >
            ₹9999
          </h1>

          <p>Unlimited Jobs</p>
          <p>Dedicated Manager</p>
          <p>Premium Visibility</p>

          <button className="cta-btn">
            Choose Plan
          </button>
        </div>

      </div>

    </div>
  )
}

export default Pricing