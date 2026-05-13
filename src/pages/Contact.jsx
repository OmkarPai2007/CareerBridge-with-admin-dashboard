import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa"

function Contact() {
  return (
    <div className="page-container">

      <div className="page-hero">
        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you.
          Reach out anytime.
        </p>
      </div>

      <div className="feature-grid">

        <div className="feature-card">
          <div className="feature-icon">
            <FaEnvelope />
          </div>

          <h3>Email Us</h3>

          <p>
            support@careerbridge.com
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaPhone />
          </div>

          <h3>Call Us</h3>

          <p>
            +91 9876543210
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaMapMarkerAlt />
          </div>

          <h3>Location</h3>

          <p>
            📍 Bangalore, India
          </p>
        </div>

      </div>

    </div>
  )
}

export default Contact