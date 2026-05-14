import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"

import AdminDashboard from "./pages/AdminDashboard";

import { useEffect } from "react"

import MainLayout from "./layouts/MainLayout"
import DashboardLayout from "./layouts/DashboardLayout"

import ProtectedRoute from "./routes/ProtectedRoute"

import Home from "./pages/Home"
import Jobs from "./pages/Jobs"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import CareerAdvice from "./pages/CareerAdvice"
import ResumeTips from "./pages/ResumeTips"
import AddJob from "./pages/AddJob"
import FindTalent from "./pages/FindTalent"
import Pricing from "./pages/Pricing"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Privacy from "./pages/Privacy"

import CandidateDashboard from "./pages/CandidateDashboard"
import EmployerDashboard from "./pages/EmployerDashboard"
import Applicants from "./pages/Applicants"
import ManageJobs from "./pages/ManageJobs"

import JobDetails from "./pages/JobDetails"

function ScrollToTop() {

  const { pathname } = useLocation()

  useEffect(() => {

    window.scrollTo(0, 0)

  }, [pathname])

  return null
}

function App() {

  return (

    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute role="employer">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* MAIN WEBSITE ROUTES */}

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/jobs"
            element={<Jobs />}
          />

          {/* IMPORTANT */}
          <Route
            path="/jobs/:id"
            element={<JobDetails />}
          />

          <Route
            path="/career-advice"
            element={<CareerAdvice />}
          />

          <Route
            path="/resume-tips"
            element={<ResumeTips />}
          />

          <Route
            path="/find-talent"
            element={<FindTalent />}
          />

          <Route
            path="/pricing"
            element={<Pricing />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/privacy"
            element={<Privacy />}
          />

        </Route>

        {/* AUTH */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* DASHBOARD */}

        <Route element={<DashboardLayout />}>

          {/* CANDIDATE */}

          <Route
            path="/candidate-dashboard"
            element={
              <ProtectedRoute role="candidate">
                <CandidateDashboard />
              </ProtectedRoute>
            }
          />

          {/* EMPLOYER */}

          <Route
            path="/employer-dashboard"
            element={
              <ProtectedRoute role="employer">
                <EmployerDashboard />
              </ProtectedRoute>
            }
          />

          {/* FIXED HERE */}

          <Route
            path="/post-job"
            element={
              <ProtectedRoute role="employer">
                <AddJob />
              </ProtectedRoute>
            }
          />

          <Route
            path="/manage-jobs"
            element={
              <ProtectedRoute role="employer">
                <ManageJobs />
              </ProtectedRoute>
            }
          />

          <Route
            path="/applicants"
            element={
              <ProtectedRoute role="employer">
                <Applicants />
              </ProtectedRoute>
            }
          />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App