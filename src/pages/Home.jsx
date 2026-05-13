import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h2>Find Your Dream Job Today</h2>

          <p>
            Discover thousands of opportunities from top companies worldwide.
          </p>

          <Link to="/jobs">
            <button>Explore Jobs</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;