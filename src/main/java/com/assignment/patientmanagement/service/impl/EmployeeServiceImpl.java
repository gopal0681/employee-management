package com.assignment.eemployeemanagement.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.eemployeemanagement.modals.Employee;
import com.assignment.eemployeemanagement.repositary.EmployeeRepository;
import com.assignment.eemployeemanagement.service.EmployeeService;


@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository res;

    public EmployeeServiceImpl(EmployeeRepository eemployeeRepository) {
        this.res = eemployeeRepository;
    }
    @Override
    public Employee addEmployee(Employee eemployee) {
        return res.save(eemployee);
    }


    @Override
    public List<Employee> getEmployees() {
        return res.findAll();
    }

    
    @Override
    public Employee getEmployeeById(Long id) {
        return res.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
    }
    
    @Override
    public void deleteEmployee(Long id) {

        Employee eemployee = res.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Employee not found with id: " + id));

        		res.delete(eemployee);
    }

}
