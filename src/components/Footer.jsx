import { Link } from "react-router-dom"
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa"

function Footer() {
  return (
    <footer
      style={{
        background: "#020617",
        color: "white",
        padding: "70px 8%",
      }}
    >
      <div className="footer-grid">
        <div>
          <h3>CareerBridge</h3>

          <p>
            Helping students and professionals
            build successful careers.
          </p>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: "18px",
              fontSize: "22px",
            }}
          >
            <a href="#">
              <FaEnvelope color="white" />
            </a>

            <a href="#">
              <FaInstagram color="white" />
            </a>

            <a href="#">
              <FaLinkedin color="white" />
            </a>

            <a href="#">
              <FaGithub color="white" />
            </a>
          </div>
        </div>

        <div>
          <h3>For Candidates</h3>

          <ul>
            <li>
              <Link
                to="/jobs"
                className="footer-link"
              >
                Browse Jobs
              </Link>
            </li>

            <li>
              <Link
                to="/career-advice"
                className="footer-link"
              >
                Career Advice
              </Link>
            </li>

            <li>
              <Link
                to="/resume-tips"
                className="footer-link"
              >
                Resume Tips
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>For Employers</h3>

          <ul>
            <li>
              <Link
                to="/post-job"
                className="footer-link"
              >
                Post a Job
              </Link>
            </li>

            <li>
              <Link
                to="/find-talent"
                className="footer-link"
              >
                Find Talent
              </Link>
            </li>

            <li>
              <Link
                to="/pricing"
                className="footer-link"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Company</h3>

          <ul>
            <li>
              <Link
                to="/about"
                className="footer-link"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="footer-link"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/privacy"
                className="footer-link"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          marginTop: "60px",
          textAlign: "center",
          color: "#94a3b8",
          borderTop: "1px solid #1e293b",
          paddingTop: "25px",
          fontSize: "17px",
        }}
      >
        © 2026 CareerBridge — Built for learning and project demonstration.
      </div>
    </footer>
  )
}

export default Footer