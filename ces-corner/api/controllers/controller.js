const model = require('../models/modelOfEmployee.js');

let controller = {
    findAllEmp : findAllEmp,
    createEmp : createEmp,
    empById : empById,
    updateEmp : updateEmp,
    deleteEmp : deleteEmp
}

// controller to print for all employees
function findAllEmp(req, res){

    console.log('The request to retrive all the employees has been made');
    model.findAllEmp().then(response => {        
        res.send(response);
    });
}

// controller to create a new employee
function createEmp(req, res){

    console.log('The request to create an employee has been made.....');
    model.createEmp(req).then(response => {
        res.send(response);
    });
}

// controller to find the existing employee details
function empById(req, res){

    console.log('The request to find the employee has been made......');
    model.empById(req.params.id).then(response => {        
        res.send(response);
    });

}

// controller to update an existing employee 
function updateEmp(req, res){

    console.log('The request to update the existing employee has been made......');
    model.updateEmp(req).then(response => {        
        res.send(response);
    });

}

// controller to delete the employee
function deleteEmp(req, res){

    console.log('The request to delete the existing employee has been made......');
    model.deleteEmp(req.params.id).then(response => {        
        res.send(response);
    });

}

module.exports = controller;