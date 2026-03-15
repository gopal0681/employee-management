import React from "react"; 
import "../CSS/StatsModal.css";

const StatsModal = ({ employee, onClose }) => {
  if (!employee) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Employee Details</h3>

        <div className="details-grid">
          <div><strong>Name:</strong> {employee.fullName}</div>
          <div><strong>Gender:</strong> {employee.gender}</div>
          <div><strong>Email:</strong> {employee.email}</div>
          <div><strong>Department:</strong> {employee.department}</div>
          <div><strong>Salary:</strong> {employee.salary}</div>
        </div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default StatsModal;
