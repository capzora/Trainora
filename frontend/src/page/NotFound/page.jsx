import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react"; // icon

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg w-full text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-20 h-20 text-red-500 animate-bounce" />
        </div>

        {/* Headings */}
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/home"
          className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-medium text-lg shadow-md hover:bg-blue-700 transition"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
