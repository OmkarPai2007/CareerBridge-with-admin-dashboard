import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {job.title}
          </h3>

          <p className="text-sm text-gray-500">
            {job.company}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
          💼
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-3 text-xs text-gray-500">
        <span>📍 {job.location}</span>
        <span>💰 {job.salary}</span>
        <span>🏷️ {job.category}</span>
      </div>

      <div className="mt-auto flex items-center justify-between gap-2">
        
        <span
          className={`px-3 py-1 rounded-full text-xs ${
            job.active
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {job.active ? "Active" : "Closed"}
        </span>

        <Link
          to={`/job/${job.id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default JobCard;