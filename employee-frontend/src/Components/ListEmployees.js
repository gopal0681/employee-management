import React, { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService.js";
import StatsModal from "./StatsModal.js";
import "../CSS/List.css";

const ListEmployees = () => {
  const [Employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const loadEmployees = () => {
    EmployeeService.getEmployees()
      .then(res => setEmployees(res.data))
      .catch(err => console.error("Error fetching Employees:", err));
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleView = (Employee) => {
    setSelectedEmployee(Employee);
    setShowModal(true);
  };
  
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this Employee?");
    if (confirmDelete) {
      EmployeeService.deleteEmployee(id)
        .then(() => {
          alert("Employee deleted successfully!");
          loadEmployees();
        })
        .catch(err => console.error("Error deleting Employee:", err));
    }
  };

  return (
    <div className="table-wrapper">
      <div className="tsble">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9">
            <h2> Employee List</h2>

          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Doctor</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {Employees.map(Employee => (
                <tr key={Employee.id}>
                  <td>{Employee.fullName}</td>
                  <td>{Employee.email}</td>
                  <td>{Employee.gender}</td>
                  <td>{Employee.department}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="view-button" onClick={() => handleView(Employee)}>
                      View
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(Employee.id)}>
                      Delete
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showModal && (
            <StatsModal
              Employee={selectedEmployee}
              onClose={() => setShowModal(false)}
            />
          )}
        </div>
      </div>
    </div>        
  </div>
      
    
      
  );
};

export default ListEmployees;
