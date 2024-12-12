import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import AdminFalculty from "./adminComponents/AdminFalculty";
import AdminService from "./adminComponents/AdminService";
import { Provider } from "react-redux";
import store from "./store/store.js";
import ProtectedRoute from "./ProtectedRoute.jsx";
import DashboadHome from "./Components/DashboadHome.jsx";

function App() {
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate a 3-second delay
    const timer = setTimeout(() => {
      setLoading(false);
    },0);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Show loading spinner before the app fully loads
    return (
      <div style={{ textAlign: "center", marginTop: "20%" }}>
        <div className="spinner-border" role="status" />
        <p>Loading App...</p>
      </div>
    );
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>

          {/* Protected Dashboard route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
             <Route path="" element={<DashboadHome />} />
            <Route path="service" element={<AdminService />} />
            <Route path="faculty" element={<AdminFalculty />} />
          </Route>

          {/* Login route */}
          <Route path="/admin" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
