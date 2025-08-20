import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import {_userapiurl} from '../../APIurls'

function Register() {

const [ name , setName ] = useState();
const [ email , setEmail ] = useState();
const [ password , setPassword ] = useState();
const [ mobile , setMobile ] = useState();
const [ address , setAddress ] = useState();
const [ city , setCity ] = useState();
const [ gender , setGender ] = useState();
const [ output , setOutput ] = useState();

const handleSubmit=()=>{
  const userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};
  

  axios.post(_userapiurl + "save" ,userDetails).then((_response)=>{
    
    setOutput("User registered successfully...");
    setName("");
    setEmail("");
    setPassword("");
    setMobile("");
    setAddress("");
    setCity("");
  
  }).catch((err)=>{
    setOutput("User registration failed, try again....");
  });

};

  return (
  <>
  
 
 {/* about section */}

 <section class="about_section layout_padding-bottom">
   <div class="container  ">
     <div class="row">
      
         <div class="detail-box">
           <div class="heading_container">
             <h2>
               Register Here
             </h2>
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
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" value={password} onChange={e=> setPassword(e.target.value)}/>
  </div>
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
   Male <input type="radio" name="gender"  value="male" onChange={e=> setGender(e.target.value)} />
   &nbsp;&nbsp;
   &nbsp;&nbsp;
   Female <input type="radio"  name="gender"  value="female" onChange={e=> setGender(e.target.value)} />
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-danger">Submit</button>
</form>



         </div>
     </div>
   </div>
 </section>

 {/* end about section */}
  </>
  );
}

export default Register;