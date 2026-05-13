import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const items = [
    { to: "/candidate-dashboard", label: "Dashboard" },
    { to: "/jobs", label: "Jobs" },
    { to: "/manage-jobs", label: "Manage Jobs" },
    { to: "/add-job", label: "Add Job" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-5">
      
      <h2 className="text-2xl font-bold mb-8">
        CareerBridge
      </h2>

      <nav className="flex flex-col gap-3">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="bg-gray-800 hover:bg-blue-500 px-4 py-3 rounded transition"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="mt-10 w-full bg-red-500 hover:bg-red-600 px-4 py-3 rounded"
      >
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;