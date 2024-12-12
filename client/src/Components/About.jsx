import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function About() {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data from the API
  const fetchFacultyData = async () => {
    try {
      const response = await fetch(
        "http://localhost:4500/api/admin/getfaculty"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setFacultyData(data.data); // Assuming the API returns { success, data, message }
      setLoading(false);
    } catch (err) {
      console.error("Error fetching faculty data:", err.message);
      setError(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchFacultyData();
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Faculty List</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">Error: {error}</p>}
        {!loading && !error && facultyData.length === 0 && (
          <p>No faculty records found.</p>
        )}
        {!loading && !error && facultyData.length > 0 && (
          <div className="container">
            <div className="row justify-content-center">
              {facultyData.map((faculty) => (
                <div className="col-lg-4 my-3" key={faculty._id}>
                  <div className="card">
                    <img
                      src="/vite.svg"
                      style={{ width: "200px" }}
                      className="card-img-top m-auto"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{faculty.name}</h5>
                      <p>Name: {faculty.name}</p>
                      <p>Age: {faculty.age}</p>
                      <p>Qualification: {faculty.qualification}</p>
                      <p>Specialization: {faculty.specialization}</p>
                      <p>Department: {faculty.department}</p>
                      <p>
                        Joining Date:{" "}
                        {new Date(faculty.joiningDate).toLocaleDateString()}
                      </p>
                      <p>Contact: {faculty.phone}</p>
                      <p>Contact: {faculty.email}</p>
                   
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
