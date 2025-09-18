import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-4 mb-3">404 - Page Not Found</h1>
        <p className="mb-4">Sorry! The page you are looking for does not exist.</p>
        <Link to="/home" className="btn btn-primary">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
