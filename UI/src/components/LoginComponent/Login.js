import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../APIurls';
import {useNavigate} from 'react-router-dom';


function Login() {

  const navigate = useNavigate();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [output,setOutput] =useState();

  
const handleSubmit=()=>{
  const userDetails={"email":email,"password":password};

  axios.post(_userapiurl + "login" ,userDetails).then((response)=>{
    const user=response.data.userDetails;
    localStorage.setItem("token",response.data.token);
    localStorage.setItem("_id",user._id);
    localStorage.setItem("email",user.email);
    localStorage.setItem("role",user.role);
   (user.role=="admin")?navigate('/admin'):navigate("/user");
    setOutput("User login successfully...");
   
    
  }).catch((err)=>{
   setOutput("Invalid User or Verify your account....");
   setEmail("");
   setPassword("");
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
               Login Here
             </h2>
            {<font style={{"color":"blue"}} >{output}</font>} 
           </div>
           <form>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" value={email} onChange={e=> setEmail(e.target.value)}  />
  </div>
  <br/>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" value={password} onChange={e=> setPassword(e.target.value)}/>
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

export default Login;