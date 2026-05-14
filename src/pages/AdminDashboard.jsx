import React, { useState } from "react";

import {
    FaChartPie,
    FaBriefcase,
    FaUsers,
    FaMapMarkerAlt,
    FaSearch,
} from "react-icons/fa";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
} from "recharts";

const AdminDashboard = () => {

    const [search, setSearch] = useState("");

    const [activeMenu, setActiveMenu] =
        useState("dashboard");

    const [filterLocation, setFilterLocation] =
        useState("All");

    const jobs =
        JSON.parse(localStorage.getItem("customJobs")) || [];

    const applications =
        JSON.parse(localStorage.getItem("appliedJobs")) || [];

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    const loggedInUser =
        JSON.parse(
            localStorage.getItem("loggedInUser")
        );

    const filteredJobs = jobs.filter((job) => {

        const matchesSearch =
            job.title
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesLocation =
            filterLocation === "All" ||
            job.location === filterLocation;

        return matchesSearch && matchesLocation;
    });

    const applicationChartData = jobs.map((job) => {

        const count = applications.filter(
            (app) => app.title === job.title
        ).length;

        return {
            name: job.title,
            applications: count,
        };
    });

    const locationData = [
        ...new Set(jobs.map((job) => job.location))
    ].map((location) => {

        const count = jobs.filter(
            (job) => job.location === location
        ).length;

        return {
            name: location,
            value: count,
        };
    });

    const COLORS = [
        "#2563eb",
        "#16a34a",
        "#9333ea",
        "#ea580c",
        "#ef4444",
    ];

    const tableHead = {
        padding: "15px",
        textAlign: "left",
    };

    const tableData = {
        padding: "15px",
        borderBottom: "1px solid #e2e8f0",
    };

    return (

        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                background: "#f1f5f9",
            }}
        >

            {/* Sidebar */}

            <div
                style={{
                    width: "260px",
                    background: "#0f172a",
                    color: "white",
                    padding: "30px 20px",
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                }}
            >

                <h1
                    style={{
                        marginBottom: "40px",
                        fontSize: "28px",
                    }}
                >
                    CareerBridge
                </h1>

                <ul
                    style={{
                        listStyle: "none",
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        fontSize: "18px",
                    }}
                >

                    <li
                        onClick={() => {

                            setActiveMenu("dashboard");

                            document
                                .getElementById("dashboard-section")
                                .scrollIntoView({
                                    behavior: "smooth",
                                });
                        }}
                        style={{
                            padding: "14px 18px",
                            borderRadius: "12px",
                            background:
                                activeMenu === "dashboard"
                                    ? "#2563eb"
                                    : "transparent",
                            cursor: "pointer",
                            transition: "0.3s",
                            fontWeight: "600",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                    >
                        <FaChartPie />
                        Dashboard
                    </li>

                    <li
                        onClick={() => {

                            setActiveMenu("jobs");

                            document
                                .getElementById("applicants-section")
                                .scrollIntoView({
                                    behavior: "smooth",
                                });
                        }}
                        style={{
                            padding: "14px 18px",
                            borderRadius: "12px",
                            background:
                                activeMenu === "jobs"
                                    ? "#2563eb"
                                    : "transparent",
                            cursor: "pointer",
                            transition: "0.3s",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            fontWeight: "600",
                        }}
                    >
                        <FaBriefcase />
                        Jobs & Applicants
                    </li>

                    <li
                        onClick={() => {

                            setActiveMenu("analytics");

                            document
                                .getElementById("analytics-section")
                                .scrollIntoView({
                                    behavior: "smooth",
                                });
                        }}
                        style={{
                            padding: "14px 18px",
                            borderRadius: "12px",
                            background:
                                activeMenu === "analytics"
                                    ? "#2563eb"
                                    : "transparent",
                            cursor: "pointer",
                            transition: "0.3s",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            fontWeight: "600",
                        }}
                    >
                        <FaUsers />
                        Analytics
                    </li>

                </ul>

            </div>

            {/* Main Content */}

            <div
                style={{
                    flex: 1,
                    padding: "40px",
                }}
            >

                {/* Top Navbar */}

                <div
                    style={{
                        background: "white",
                        padding: "20px 30px",
                        borderRadius: "15px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "40px",
                    }}
                >

                    <div>
                        <h2>
                            Admin Analytics Dashboard
                        </h2>

                        <p
                            style={{
                                color: "#64748b",
                                marginTop: "5px",
                            }}
                        >
                            Welcome back, {""}
                            {loggedInUser?.name || "Employer"}!
                        </p>
                    </div>

                    <button
                        onClick={() => {

                            localStorage.removeItem(
                                "loggedInUser"
                            );

                            window.location.href = "/";
                        }}
                        style={{
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "10px",
                            background: "#2563eb",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Logout
                    </button>

                </div>

                {/* Dashboard Heading */}

                <h1
                    id="dashboard-section"
                    style={{
                        fontSize: "40px",
                        marginBottom: "40px",
                    }}
                >
                    Admin Analytics Dashboard
                </h1>

                {/* Stats Cards */}

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: "25px",
                    }}
                >

                    <div
                        style={{
                            background:
                                "linear-gradient(135deg,#2563eb,#1d4ed8)",
                            padding: "30px",
                            borderRadius: "24px",
                            color: "white",
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >

                            <div>

                                <p>Total Jobs</p>

                                <h1
                                    style={{
                                        fontSize: "48px",
                                    }}
                                >
                                    {jobs.length}
                                </h1>

                            </div>

                            <FaBriefcase size={45} />

                        </div>

                    </div>

                    <div
                        style={{
                            background:
                                "linear-gradient(135deg,#16a34a,#15803d)",
                            padding: "30px",
                            borderRadius: "24px",
                            color: "white",
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >

                            <div>

                                <p>Applications</p>

                                <h1
                                    style={{
                                        fontSize: "48px",
                                    }}
                                >
                                    {applications.length}
                                </h1>

                            </div>

                            <FaChartPie size={45} />

                        </div>

                    </div>

                    <div
                        style={{
                            background:
                                "linear-gradient(135deg,#9333ea,#7e22ce)",
                            padding: "30px",
                            borderRadius: "24px",
                            color: "white",
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >

                            <div>

                                <p>Users</p>

                                <h1
                                    style={{
                                        fontSize: "48px",
                                    }}
                                >
                                    {users.length}
                                </h1>

                            </div>

                            <FaUsers size={45} />

                        </div>

                    </div>

                    <div
                        style={{
                            background:
                                "linear-gradient(135deg,#ea580c,#c2410c)",
                            padding: "30px",
                            borderRadius: "24px",
                            color: "white",
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >

                            <div>

                                <p>Active Jobs</p>

                                <h1
                                    style={{
                                        fontSize: "48px",
                                    }}
                                >
                                    {jobs.length}
                                </h1>

                            </div>

                            <FaBriefcase size={45} />

                        </div>

                    </div>

                </div>

                {/* Search Filter */}

                <div
                    style={{
                        marginTop: "50px",
                        marginBottom: "20px",
                        background: "white",
                        padding: "25px",
                        borderRadius: "20px",
                        display: "flex",
                        gap: "20px",
                        flexWrap: "wrap",
                        alignItems: "center",
                    }}
                >

                    <div
                        style={{
                            flex: 1,
                            minWidth: "280px",
                            position: "relative",
                        }}
                    >

                        <FaSearch
                            style={{
                                position: "absolute",
                                left: "18px",
                                top: "18px",
                                color: "#64748b",
                            }}
                        />

                        <input
                            type="text"
                            placeholder="Search jobs by title..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            style={{
                                width: "100%",
                                padding: "15px 18px 15px 50px",
                                borderRadius: "14px",
                                border: "1px solid #cbd5e1",
                                fontSize: "16px",
                                outline: "none",
                            }}
                        />

                    </div>

                    <div
                        style={{
                            minWidth: "260px",
                            position: "relative",
                        }}
                    >

                        <FaMapMarkerAlt
                            style={{
                                position: "absolute",
                                left: "18px",
                                top: "18px",
                                color: "#64748b",
                                zIndex: 1,
                            }}
                        />

                        <select
                            value={filterLocation}
                            onChange={(e) =>
                                setFilterLocation(
                                    e.target.value
                                )
                            }
                            style={{
                                width: "100%",
                                padding: "15px 18px 15px 50px",
                                borderRadius: "14px",
                                border: "1px solid #cbd5e1",
                                fontSize: "16px",
                                outline: "none",
                            }}
                        >

                            <option value="All">
                                All Locations
                            </option>

                            {[...new Set(
                                jobs.map(
                                    (job) => job.location
                                )
                            )].map((location, index) => (

                                <option
                                    key={index}
                                    value={location}
                                >
                                    {location}
                                </option>

                            ))}

                        </select>

                    </div>

                </div>



                {/* Jobs + Applicants Section */}

                <div
                    id="applicants-section"
                    style={{
                        marginTop: "50px",
                    }}
                >

                    <h2
                        style={{
                            marginBottom: "25px",
                            fontSize: "34px",
                        }}
                    >
                        Jobs & Applicants
                    </h2>

                    {filteredJobs.length === 0 ? (

                        <div
                            style={{
                                background: "white",
                                padding: "40px",
                                borderRadius: "20px",
                                textAlign: "center",
                                fontWeight: "600",
                                fontSize: "18px",
                            }}
                        >
                            No Jobs Found
                        </div>

                    ) : (

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fit,minmax(340px,1fr))",
                                gap: "25px",
                            }}
                        >

                            {filteredJobs.map((job, index) => (

                                <div
                                    key={index}
                                    style={{
                                        background: "white",
                                        borderRadius: "24px",
                                        padding: "25px",
                                        boxShadow:
                                            "0 10px 25px rgba(0,0,0,0.06)",
                                        transition: "0.3s",
                                        borderTop: "5px solid transparent",
                                    }}
                                    onMouseEnter={(e) => {

                                        e.currentTarget.style.transform =
                                            "translateY(-8px)";

                                        e.currentTarget.style.boxShadow =
                                            "0 18px 35px rgba(37,99,235,0.18)";

                                        e.currentTarget.style.borderTop =
                                            "5px solid #2563eb";
                                    }}
                                    onMouseLeave={(e) => {

                                        e.currentTarget.style.transform =
                                            "translateY(0px)";

                                        e.currentTarget.style.boxShadow =
                                            "0 10px 25px rgba(0,0,0,0.06)";

                                        e.currentTarget.style.borderTop =
                                            "5px solid transparent";
                                    }}
                                >

                                    {/* TOP */}

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent:
                                                "space-between",
                                            alignItems: "center",
                                            marginBottom: "25px",
                                        }}
                                    >

                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "15px",
                                            }}
                                        >

                                            <div
                                                style={{
                                                    width: "65px",
                                                    height: "65px",
                                                    borderRadius: "50%",
                                                    background:
                                                        "linear-gradient(135deg,#2563eb,#1d4ed8)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "white",
                                                    fontSize: "24px",
                                                    fontWeight: "700",
                                                }}
                                            >
                                                {job.company
                                                    ?.charAt(0)
                                                    ?.toUpperCase()}
                                            </div>

                                            <div>

                                                <h3>
                                                    {job.title}
                                                </h3>

                                                <p
                                                    style={{
                                                        color: "#64748b",
                                                        marginTop: "4px",
                                                    }}
                                                >
                                                    {job.company}
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                    {/* DETAILS */}

                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px",
                                            marginBottom: "25px",
                                            color: "#334155",
                                        }}
                                    >

                                        <p>
                                            📍 {job.location}
                                        </p>

                                        <p>
                                            💼 {job.type || "Full Time"}
                                        </p>

                                        <p>
                                            💰 {job.salary || "Not Mentioned"}
                                        </p>

                                    </div>

                                    {/* BUTTONS */}

                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "15px",
                                            marginBottom: "25px",
                                        }}
                                    >

                                        <button
                                            style={{
                                                flex: 1,
                                                padding: "12px",
                                                border: "none",
                                                borderRadius: "12px",
                                                background: "#2563eb",
                                                color: "white",
                                                cursor: "pointer",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => {

                                                const updatedJobs =
                                                    jobs.filter(
                                                        (_, i) =>
                                                            i !== index
                                                    );

                                                localStorage.setItem(
                                                    "customJobs",
                                                    JSON.stringify(
                                                        updatedJobs
                                                    )
                                                );

                                                window.location.reload();
                                            }}
                                            style={{
                                                flex: 1,
                                                padding: "12px",
                                                border: "none",
                                                borderRadius: "12px",
                                                background: "#ef4444",
                                                color: "white",
                                                cursor: "pointer",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Delete
                                        </button>

                                    </div>

                                    {/* APPLICANTS */}

                                    <div
                                        style={{
                                            borderTop:
                                                "1px solid #e2e8f0",
                                            paddingTop: "20px",
                                        }}
                                    >

                                        <h4
                                            style={{
                                                marginBottom: "15px",
                                            }}
                                        >
                                            Applicants
                                        </h4>

                                        {applications.filter(
                                            (app) =>
                                                app.title === job.title
                                        ).length === 0 ? (

                                            <p
                                                style={{
                                                    color: "#64748b",
                                                }}
                                            >
                                                No Applicants Yet
                                            </p>

                                        ) : (

                                            applications
                                                .filter(
                                                    (app) =>
                                                        app.title ===
                                                        job.title
                                                )
                                                .map((app, idx) => (

                                                    <div
                                                        key={idx}
                                                        style={{
                                                            display:
                                                                "flex",
                                                            alignItems:
                                                                "center",
                                                            gap: "12px",
                                                            background:
                                                                "#f8fafc",
                                                            padding:
                                                                "12px",
                                                            borderRadius:
                                                                "14px",
                                                            marginBottom:
                                                                "12px",
                                                        }}
                                                    >

                                                        <div
                                                            style={{
                                                                width:
                                                                    "45px",
                                                                height:
                                                                    "45px",
                                                                borderRadius:
                                                                    "50%",
                                                                background:
                                                                    "#2563eb",
                                                                color:
                                                                    "white",
                                                                display:
                                                                    "flex",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "center",
                                                                fontWeight:
                                                                    "700",
                                                            }}
                                                        >
                                                            {app.name
                                                                ?.charAt(0)
                                                                ?.toUpperCase() ||
                                                                "C"}
                                                        </div>

                                                        <div>

                                                            <h5>
                                                                {app.name ||
                                                                    "Candidate"}
                                                            </h5>

                                                            <p
                                                                style={{
                                                                    color:
                                                                        "#64748b",
                                                                    fontSize:
                                                                        "14px",
                                                                }}
                                                            >
                                                                Applied for{" "}
                                                                {
                                                                    app.title
                                                                }
                                                            </p>

                                                        </div>

                                                    </div>

                                                ))

                                        )}

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

                {/* Charts */}

                <div
                    id="analytics-section"
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit,minmax(400px,1fr))",
                        gap: "30px",
                        marginTop: "40px",
                    }}
                >

                    <div
                        style={{
                            background: "white",
                            padding: "25px",
                            borderRadius: "20px",
                        }}
                    >

                        <h2
                            style={{
                                marginBottom: "20px",
                            }}
                        >
                            Job Applications Analytics
                        </h2>

                        <ResponsiveContainer
                            width="100%"
                            height={300}
                        >

                            <BarChart
                                data={applicationChartData}
                            >

                                <XAxis dataKey="name" />

                                <YAxis />

                                <Tooltip />

                                <Bar
                                    dataKey="applications"
                                    fill="#2563eb"
                                />

                            </BarChart>

                        </ResponsiveContainer>

                    </div>

                    <div
                        id="users-section"
                        style={{
                            background: "white",
                            padding: "25px",
                            borderRadius: "20px",
                        }}
                    >

                        <h2
                            style={{
                                marginBottom: "20px",
                            }}
                        >
                            Jobs By Location
                        </h2>

                        <ResponsiveContainer
                            width="100%"
                            height={300}
                        >

                            <PieChart>

                                <Pie
                                    data={locationData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    dataKey="value"
                                    label
                                >

                                    {locationData.map(
                                        (entry, index) => (

                                            <Cell
                                                key={`cell-${index}`}
                                                fill={
                                                    COLORS[
                                                    index %
                                                    COLORS.length
                                                    ]
                                                }
                                            />

                                        )
                                    )}

                                </Pie>

                                <Tooltip />

                                <Legend />

                            </PieChart>

                        </ResponsiveContainer>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AdminDashboard;