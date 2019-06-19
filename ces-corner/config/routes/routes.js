const EXPRESS = require('express');
let router = EXPRESS.Router();
let employeectrl = require('../../api/controllers/controller.js');

// defining the routes
router.get('/all',employeectrl.findAllEmp);
router.post('/create',employeectrl.createEmp);
router.get('/retrieve/:id',employeectrl.empById);
router.put('/update/:id',employeectrl.updateEmp);
router.delete('/delete/:id',employeectrl.deleteEmp);

module.exports = router;