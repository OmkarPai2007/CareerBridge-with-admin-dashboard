import { createContext, useContext, useEffect, useState } from "react"
import { initialJobs } from "../data/jobs"

const AppContext = createContext()

export function AppProvider({ children }) {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [jobs, setJobs] = useState([])
  const [applications, setApplications] = useState([])

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || []
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || initialJobs
    const savedApplications = JSON.parse(localStorage.getItem("applications")) || []
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null

    setUsers(savedUsers)
    setJobs(savedJobs)
    setApplications(savedApplications)
    setUser(currentUser)
  }, [])

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs))
  }, [jobs])

  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(applications))
  }, [applications])

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(user))
  }, [user])

  const signup = (newUser) => {
    const exists = users.find((u) => u.email === newUser.email)

    if (exists) {
      return {
        ok: false,
        message: "User already exists",
      }
    }

    setUsers([...users, newUser])
    setUser(newUser)

    return {
      ok: true,
    }
  }

  const login = (email, password) => {
    const found = users.find(
      (u) => u.email === email && u.password === password
    )

    if (!found) {
      return {
        ok: false,
        message: "Invalid credentials",
      }
}