import { Outlet } from "react-router-dom"

import Navbar from "../components/Navbar"

function DashboardLayout() {
  return (
    <>
      <Navbar />

      <div className="dashboard-layout">
        <Outlet />
      </div>
    </>
  )
}

export default DashboardLayout