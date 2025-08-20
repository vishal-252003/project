import './EPAdmin.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../APIurls';
import {useNavigate} from 'react-router-dom';

function EPAdmin() {

  
const [ name , setName ] = useState();
const [ email , setEmail ] = useState();
const [ mobile , setMobile ] = useState();
const [ address , setAddress ] = useState();
const [ city , setCity ] = useState();
const [ gender , setGender ] = useState();

const [ m , setM ] = useState();
const [ f , setF ] = useState();

const [ output , setOutput ] = useState();

useEffect(()=>{
  axios.get(_userapiurl+"fetch?email="+localStorage.getItem("email")).then((response)=>{
    var user=response.data[0];
    setName(user.name);
    setEmail(user.email);
    setMobile(user.mobile);
    setAddress(user.address);
    setCity(user.city);
  
    if(user.gender=="male")
      setM("checked");
    else
      setF("checked");

  });
 
},[]);


const handleSubmit=()=>{
  var userDetails={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}};
  console.log(userDetails)
  axios.patch(_userapiurl+"update",userDetails).then(()=>{
    alert("Profile edited Successfully...");
  }).
  catch((error)=>{
    setOutput("Profile not edited, Please try again...");
  }); 
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
         <h2 style={{"color":"blue"}}>Edit Profile Here!!!</h2>
         <font style={{"color":"blue"}} >{output}</font>
           </div>
           <form>
           <div class="form-group">
    <label for="name">Name:</label>
    <input type="name" class="form-control"  value={name} onChange={e=> setName(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" value={email} onChange={e=> setEmail(e.target.value)}  />
  </div>
  <br/>
  <div class="form-group">
    <label for="mob">Mobile:</label>
    <input type="text" class="form-control"  value={mobile} onChange={e=> setMobile(e.target.value)} />
  </div>
  <div class="form-group">
    <label for="add">Address:</label>
    <textarea cols={8} class="form-control" value={address} onChange={e=> setAddress(e.target.value)} ></textarea> 
  </div>
  <div class="form-group">
    <label for="city">City:</label>
    <select class="form-control" value={city} onChange={e=> setCity(e.target.value)}>
      <option>Select City</option>
      <option>Indore</option>
      <option>Ujjain</option>
      <option>Dewas</option>
    </select>
  </div>
  <div class="form-group">
    <label for="gender">Gender:</label>
    &nbsp;&nbsp;
   Male <input type="radio" name="gender"  value="male" checked={m} onChange={e=> setGender(e.target.value)} />
   &nbsp;&nbsp;
   &nbsp;&nbsp;
   Female <input type="radio"  name="gender"  value="female" checked={f} onChange={e=> setGender(e.target.value)} />
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-danger">Submit</button>
</form>
           </div>
          
           </div>
          


         </div>
     
     </div>
   
 </section>

 {/* end about section */}
  </>
  );
}

export default EPAdmin;