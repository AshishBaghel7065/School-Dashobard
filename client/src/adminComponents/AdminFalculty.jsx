import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function AdminFalculty() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [qualification, setQualification] = useState("");
  const [description, setDescription] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [department, setDepartment] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] =useState("")
  const [success,setSuccess]= useState("")
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:4500/api/admin/faculty",
        {
          name,
          age,
          qualification,
          description,
          specialization,
          department,
          joiningDate,
          phone,
          email,
        }
      );

      if (response.data && response.data.success) {
        navigate("/about");
        setSuccess("Data Added successful!");
      } else {
        setError(response.data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Data Added failed!");
    }
  };

  return (
    <div className="conatiner">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="age" className="form-label">
                      Age
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      value={age}
                      name="age"
                      onChange={(e) => setAge(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="qualification" className="form-label">
                      Qualification
                    </label>
                    <input
                      type="text"
                      value={qualification}
                      className="form-control"
                      id="qualification"
                      name="qualification"
                      onChange={(e) => setQualification(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      value={description}
                      name="description"
                      rows="3"
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="specialization" className="form-label">
                      Specialization
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="specialization"
                      value={specialization}
                      name="specialization"
                      onChange={(e) => setSpecialization(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="department" className="form-label">
                      Department
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="department"
                      value={department}
                      name="department"
                      onChange={(e) => setDepartment(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="joiningDate" className="form-label">
                      Joining Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="joiningDate"
                      name="joiningDate"
                      value={joiningDate}
                      onChange={(e) => setJoiningDate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="contact" className="form-label">
                      phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="contact"
                      value={phone}
                      name="contact"
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contact" className="form-label">
                      email
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="contact"
                      value={email}
                      name="contact"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="row">
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                     {/* Success/Error Messages */}
          {success && <div className="alert alert-success mt-3">{success}</div>}
          {error && <div className="alert alert-danger mt-3">{error}</div>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminFalculty;
