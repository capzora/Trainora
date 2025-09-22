import { Component } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }


  static getDerivedStateFromError() {
    return { hasError: true };
  }


  componentDidCatch(error, errorInfo) {
    console.error("Error Caught by Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold text-red-600">
            Something went wrong!
          </h2>
          <p>Please refresh the page or contact support.</p>
        </div>
      );
    }
    return this.props.children || null;
  }
}

// ✅ Add PropTypes for validation
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
