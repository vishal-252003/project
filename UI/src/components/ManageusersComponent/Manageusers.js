import './Manageusers.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../APIurls';
import { Navigate, useNavigate } from 'react-router-dom';


function Manageusers() {
  const navigate=useNavigate();
  const [userDetails , setUserDetails ] = useState([]);


  useEffect(()=>{
    axios.get(_userapiurl+"fetch?role=user").then((result)=>{
      setUserDetails(result.data)
    }).catch((error)=>{
      console.log(error);
    });
  });

  var changestatususer = (_id,s)=>{
    if(s=="verify")
    {
      var update_details={"condition_obj":{"_id":_id} ,"content_obj":{"status":1}};
      axios.patch(_userapiurl+"update",update_details).then((response)=>{
        alert("User verified successfully....");
        navigate("/manageusers");
      });
    }

    else if (s=="block")
    {
      var update_details={"condition_obj":{"_id":_id} ,"content_obj":{"status":0}};
      axios.patch(_userapiurl+"update",update_details).then((response)=>{
        alert("User blocked successfully....");
        navigate("/manageusers");
      });
    }
    else
    {
      var delete_details={"condition_obj":{"_id":_id}};
      axios.delete(_userapiurl+"delete",delete_details).then((response)=>{
        alert("User deleted successfully");
        navigate("/manageusers");
      });
    }
  };


  return (
  <>
  
 
 {/* about section */}

 <section class="about_section layout_padding-bottom">
   <div class="container  ">
     <div class="row">
       <div>
         <div class="detail-box">
         <div class="heading_container">      
             <h2>
              View & Manage users here!!!
             </h2>
           </div>
          <table class="table table-bordered">
            <tr>
              <th>RegID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>City</th>
              <th>Gender</th>
              <th>Info</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            
            {
              userDetails.map((row)=>(
                <tr>
                  <td>{row._id}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.mobile}</td>
                  <td>{row.address}</td>
                  <td>{row.city}</td>
                  <td>{row.gender}</td>
                  <td>{row.info}</td>
                  <td>
                    {row.status==1?<font color="green">Verified</font>:<font color="orange">Blocked</font>}
                  </td>
                  <td>
      {row.status==1?<font onClick={()=> changestatususer(row._id,'block')} color="blue">Change Status</font>:<font onClick={()=> changestatususer(row._id,'verify')} color="blue">Change Status</font>}
      
      <br/>
      <font onClick={()=> changestatususer(row._id,'delete')} color="red">Delete</font>
      </td>
                  
                </tr>
              ))
            }


          </table>

         </div>
       </div>
     
     </div>
   </div>
 </section>

 {/* end about section */}
  </>
  );
}

export default Manageusers;