package com.assignment.employeemanagement.repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.assignment.patientmanagement.modals.Patient;

public interface EmployeeRepository extends JpaRepository<Patient, Long> {
}