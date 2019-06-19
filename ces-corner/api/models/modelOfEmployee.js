const MONGOOSE = require('mongoose');

// creating a schema to store the data 
let EmpModel = new MONGOOSE.Schema(
  {
    empName: { type: String },
    empMobile: { type: Number },
    empEmail: { type: String },
    Address: { type: String }
  },
  { collection: 'Employees' }
);

EmpModel.statics.findAllEmp = findAllEmp;
EmpModel.statics.createEmp = createEmp;
EmpModel.statics.empById = empById;
EmpModel.statics.updateEmp = updateEmp;
EmpModel.statics.deleteEmp = deleteEmp;

module.exports = MONGOOSE.model('EmpModel', EmpModel);

// function to find all employees
function findAllEmp() {

  let allEmp = this.find({}, function (err, result) {
    if (err) {
       return err;
      }
    else {
       console.log('Server responded with the list of employees');
       return result;
      }  // if else
  }); 
  return allEmp;

}


// function to create a new employee
function createEmp(req) {

  return new Promise((res,rej) => {
      this.create({
      empName: req.body.empName,
      empMobile: req.body.empMobile,
      empEmail: req.body.empEmail,
      Address: req.body.Address    
    },function(err, data){
        if(err){
          rej(err)
        }
        else{
          console.log('Employee was succesfully created');
          res(data);
        }
    })
  })

} 


// funtion to find an employee by id
function empById(empId) {

  let employee = this.findById(empId, function (err, result) {
    if (err) {
      return err;
    }else{
    console.log('Employee with the id: '+empId+' was found');
    return result;}
    // IF-ELSE
  });
  return employee;

} 


// function to update the existing employee
function updateEmp(req) {

  let id = req.params.id;  
  console.log(req.body)
  let data = {
    empName: req.body.empName,
    empMobile: req.body.empMobile,
    empEmail: req.body.empEmail,
    Address: req.body.Address
  }
  return this.findOneAndUpdate({_id:id}, {$set: data}, function(err, Emp){
    if(err){
      return err;
    }else{
    console.log("Employee has been succesfully updated in the database");
    }

})} 


// function to delete an employee
function deleteEmp(empId) {

  let id = empId;  
  return this.deleteOne({
    _id:id
  },function(err, res){
    if(err){
      return err;
    }else{
      console.log("Employee:" + empName + "has been succesfully removed from the database");
      return res;
    }

})} 