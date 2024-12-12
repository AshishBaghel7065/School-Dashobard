import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../store/TokenSlice";
import { Link } from "react-router-dom";
function Dashboard() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    dispatch(clearToken());
    navigate("/");
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20%" }}>
        <div className="spinner-border" role="status" />
        <p>Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-primary">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
        
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
               
                </ul>
            
                <button className="btn btn-outline-danger"  onClick={handleLogout}>
                  Logout
                </button>
           
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 bg-white">
              <div>
                <Link className="nav-link border px-5  py-3" to={"/dashboard"}>
                  Dashboard
                </Link>
                <Link
                  className="nav-link border px-5  py-3"
                  to={"/dashboard/service"}
                >
                  Service
                </Link>
                <Link className="nav-link border px-5  py-3" to={"/dashboard/faculty"}>falculty</Link>
                <Link className="nav-link border px-5  py-3">Extra</Link>
                <Link className="nav-link border px-5  py-3">Extra</Link>
                <Link className="nav-link border px-5  py-3">Etxra</Link>
              </div>
            </div>
            <div className="col-lg-10 p-5">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
