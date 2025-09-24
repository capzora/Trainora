import axios from "axios";
import { createContext, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const AuthContext = createContext(); // ✅ export add किया

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // login method
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  // logout method with API
  const logout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log("Logout response:", res.data); // debug
      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
      toast.error("Logout failed");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
      {/* ✅ Toaster globally mounted */}
      <Toaster position="top-center" reverseOrder={false} />
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
