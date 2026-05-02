import axios from "axios";
import { Table } from "flowbite-react";
import { toast } from "react-toastify";

export default function Enquirylist({ data ,getAllenquiry,Swal ,setFormData}) {
  let deleterow=(delid)=>{
       Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
       }).then((result) => {

          if (result.isConfirmed) { 
              axios.delete(`http://localhost:8000/api/website/enquiry/delete/${delid}`)
                .then(()=>{
                  toast.success('Enquiry Deleted Successfully')
                  getAllenquiry()

                })
           }
          else if(result.isDenied) {
               Swal.fire("Changes are not saved", "", "info");
          }
        });
}

let editrow=(editid)=>{
  axios.get(`http://localhost:8000/api/website/enquiry/single/${editid}`)
  .then((res)=>{
   let data = res.data;
      setFormData(data.enquiry)
  })
}

 
  return (
    <div className="w-full">
      <h2 className="bg-gray-200 p-4 font-bold text-[22px] rounded-[10px] mb-4">
        Enquiry list
      </h2>

      <table className="bg-gray-600 text-white rounded-[10px] w-full overflow-hidden">
        <thead>
          <tr className="bg-gray-900">
            <th className="px-4 py-2 text-left">Sr.No</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-left">Message</th>
            <th className="px-4 py-2 text-left">Update</th>
            <th className="px-4 py-2 text-left">Delete</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item._id || index} className="border-t border-gray-300">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.phone}</td>
                <td className="px-4 py-2">{item.message}</td>

                <td className="px-4 py-2">
                  <button onClick={()=>editrow(item._id)} className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700">
                    Edit
                  </button>
                </td>

                <td className="px-4 py-2">
                  <button onClick={()=>deleterow(item._id)} className="px-3 py-1 bg-red-600 rounded hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

//6.25.56