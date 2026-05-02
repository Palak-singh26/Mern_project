let express = require('express');
const { enquiryinsert, enquiryList, enquirydelete, enquirysingleRow, enquiryUpdate } = require('../../Controllers/Web/enquiryController');
let enquiryRoutes = express.Router();

enquiryRoutes.post("/insert",enquiryinsert)
enquiryRoutes.get("/view",enquiryList)
enquiryRoutes.delete("/delete/:id",enquirydelete)
enquiryRoutes.get("/single/:id",enquirysingleRow)
enquiryRoutes.put("/update/:id",enquiryUpdate)

module.exports=enquiryRoutes

