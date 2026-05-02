import React, { useEffect } from 'react'
import Enquirylist from './enquiry/Enquirylist'
import axios from "axios";
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import Swal from 'sweetalert2/dist/sweetalert2.js';

export default function Enquiry() {
let [enquiryList,setenquiryList] = useState([])
let [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
  _id:""
});

  let saveEnquiry = (e) => {
    e.preventDefault()

    // let formData={
    //     name:e.target.name.value,
    //     email:e.target.email.value,
    //     phone:e.target.phone.value,
    //     message:e.target.message.value
    // }

    if(formData._id)
    {
          //update
          axios.put(`http://localhost:8000/api/website/enquiry/update/${formData._id}`,formData)
          .then(() => {
              toast.success('Enquiry Updated Successfully')
              setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                _id:""
              })
        getAllenquiry()
      })
    }
    else
    {
      axios.post(`http://localhost:8000/api/website/enquiry/insert`,formData)
      .then((res) => 
       {console.log(res.data)
        toast.success('Enquiry Saved Successfully')
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        })
        getAllenquiry()
      })
    }

}

let getAllenquiry = ()=>{
  axios.get(`http://localhost:8000/api/website/enquiry/view`)
  .then((res)=>{
     return res.data
  }).then((finaldata)=>{
          if(finaldata.status){
            setenquiryList(finaldata.enquiryList)         
           }
  })
}

  let getValue = (e)=>{
    let Inputname = e.target.name
    let inputvalue=e.target.value
    let oldData={...formData}
  
    oldData[Inputname]=inputvalue;
    setFormData(oldData)
//   {
//   name: "",
//   email: "",
//   phone: "",
//   message: ""
//  }
}
useEffect(()=>{
  getAllenquiry()
},[])

console.log(formData)

  return (
    <div>
      <ToastContainer/>
      <h1 className='text-center font-bold text-4xl py-5'>User Enquiry</h1>

     
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-6 items-start'>

        {/*  FORM SECTION */}
        <div className='bg-gray-200 p-4 rounded-2xl w-full'>
          <h1 className='text-[25px] font-bold mb-2'>Enquiry Form</h1>

          <form onSubmit={saveEnquiry}>
            
            <div className='py-2 text-[18px] font-semibold'>
              <label htmlFor='name'>Name</label>
              <input className='bg-white w-full rounded-[10px] p-2'
                type="text" value={formData.name}  onChange={getValue} name='name'
                placeholder="Enter your Name"
                required
              />
            </div>

            <div className='py-2 text-[18px] font-semibold'>
              <label htmlFor='email'>Email</label>
              <input className='bg-white w-full rounded-[10px] p-2'
                type="email" value={formData.email}  onChange={getValue} name='email'
                placeholder="name@gmail.com"
                required
              />
            </div>

            <div className='py-2 text-[18px] font-semibold'>
              <label htmlFor='phone'>Phone Number</label>
              <input className='bg-white w-full rounded-[10px] p-2'
                type="text" value={formData.phone} onChange={getValue} name='phone'
                placeholder="9876543210"
                required
              />
            </div>

            <div className='py-2 text-[18px] font-semibold'>
              <label htmlFor='message'>Message</label>
              <textarea
                className='bg-white w-full rounded-[10px] p-2'
                name='message'
                onChange={getValue}
                value={formData.message}
                placeholder="Enter Your Message..."
                rows={4}
                required
              />
            </div>

            {/* BUTTON FIXED */}
            <div className='py-3'>
              <button
                type='submit'
                className='w-full text-xl bg-blue-950 text-white font-bold rounded-2xl py-2 hover:bg-blue-800'
              >
                {formData._id ? 'update':'save'}
              </button>
            </div>

          </form>
        </div>

        {/*  TABLE SECTION */}
        <Enquirylist data={enquiryList} getAllenquiry={getAllenquiry}  Swal={Swal} setFormData={setFormData}/>

      </div>
    </div>
  )
}



// 5.54.24