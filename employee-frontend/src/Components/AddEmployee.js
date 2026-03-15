import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService.js";
import Gender from "./Gender.js";
import "../CSS/Add.css";

const AddEmployee = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    fullName: "",
    age: "",
    gender: "MALE",
    insuranceProvider: "",
    policyNumber: "",
    doctorName: ""
  });

  function handleChange(e) {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  }

 const handleSubmit = (e) => {
    e.preventDefault();

    EmployeeService.addEmployee(employee)
      .then(() => {
        alert("Employee added successfully");
        navigate("/");
      })
      .catch(err => {
        console.error(err);
        alert("Failed to add employee");
      });
  };
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
        <div className="form-container">
          <h3>Add New Employee</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={employee.fullName}
              onChange={handleChange}
              required
            />

            <select
              name="gender"
              value={employee.gender}
              onChange={handleChange}
            >
              <option value={Gender.MALE}>Male</option>
              <option value={Gender.FEMALE}>Female</option>
              <option value={Gender.OTHER}>Other</option>
            </select>

            <input
              type="text"
              name="email"
              placeholder="email"
              value={employee.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="department"
              placeholder="department"
              value={employee.department}
              onChange={handleChange}
            />

            <input
              type="text"
              name="salary"
              placeholder="salary"
              value={employee.doctorName}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn btn-success w-100">
              Add Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
