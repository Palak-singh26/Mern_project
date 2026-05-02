
const enquiryModel = require("../../Models/enquiry.model")


let enquiryinsert=(req,res)=>
{
    let { name, email, phone, message } = req.body;
    // console.log(name,email,phone,message)
    let enquirydata = new  enquiryModel({
        name: name,
        email: email,
        phone: phone,
        message: message
    });

    enquirydata.save().then(() => {
        res.send({
            status: 1,
            msg: "saved Successfully"
        });
    }).catch((err) => {
        res.send({
            status: 0,
            msg: "Error while saving data in Enquiry",
            error: err
        })
    })
}

let enquirydelete=async(req,res)=>{
     let enId = req.params.id;
    let enquirydel = await enquiryModel.deleteOne({ _id: enId });
    res.send({
        status: 1,
        message: "Data Deleted Successfully",
        data: enId,
        delRes: enquirydel
    })
}

let enquirysingleRow=async(req,res)=>{
    let enid=req.params.id;
    let enquiry = await enquiryModel.findOne ({ _id: enid})
    res.send({
        status: 1,
        enquiry
    });

}

let enquiryUpdate = async(req,res)=>{
    let updateid=req.params.id;
   let { name, email, phone, message } = req.body;
    let updateobj={
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    let updateenquiry = await enquiryModel.updateOne({ _id: updateid}, updateobj)

    res.send({
        status: 1,
        message: " Enquriy Updated Successfully",
         updateenquiry
    })

}


let enquiryList = async(req,res)=>{
    // enquiryModel.find().then((enquiry)=>{
    //     res.send({status:1,enquiry:enquiry});  // manual
    // }).catch((err)=>{
    //     res.send({status:0,message:"Error while fetching enquiry",error:err});
    // })
    
    let enquiry = await enquiryModel.find();  // using async 
    res.send({status:1,enquiryList:enquiry}); 
}
module.exports={enquiryinsert,enquiryList,enquirydelete,enquirysingleRow,enquiryUpdate};



//5.26