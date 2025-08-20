import './CPAdmin.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../APIurls';
import {useNavigate} from 'react-router-dom';

function CPAdmin() {

  const navigate = useNavigate();
  const [ opassword , setOldPassword ] = useState();
  const [ npassword , setNewPassword ] = useState();
  const [ cnpassword , setConfirmNewPassword ] = useState();
  const [output,setOutput] =useState();
  const [err1 , setError1] = useState();
  const [err2 , setError2] = useState();
  const [err3 , setError3] = useState();



  const handleSubmit=()=>{
   var flag=true;

   if(opassword==undefined)
   {
    setError1("old password is required*");
    flag=false;
   }
   else
    setError1("");
   

   if(npassword==undefined)
    {
     setError2("new password is required*");
     flag=false;
    }
    else
    setError2("");

    if(cnpassword==undefined)
      {
       setError3("confirm new password is required*");
       flag=false;
      }
      else
      setError3("");



if(flag==true)
{

    axios.get(_userapiurl +"fetch?email="+localStorage.getItem("email")+"&password="+opassword).then((response)=>{
     if(npassword==cnpassword)
     {
      var userDetails={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cnpassword}};
      console.log(userDetails)
      axios.patch(_userapiurl+"update",userDetails).then(()=>{
        alert("password changes, please login again...");
        navigate("/logout");
      }).
      catch((error)=>{
        setOutput("Password Not Changed, Please try again...");
      }); 
     }
     else
     {
      setOutput("New & Confirm new password mismatch...");
      setNewPassword("");
      setConfirmNewPassword("");
     }
    }).catch((err)=>{
   setOutput("Invalid old password, please try again...")
   setOldPassword("")
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
         <h2 style={{"color":"blue"}}>Change Password Here!!!</h2>
          
           </div>
           {<font style={{"color":"blue"}} >{output}</font>} 
           </div>
           <form>
  
  <div class="form-group">
    <label for="opwd">Old Password:</label>
    <input type="password" class="form-control" value={opassword} onChange={e=> setOldPassword(e.target.value)}/>
    <font style={{"color":"red"}}>{err1}</font>
  </div>
  <div class="form-group">
    <label for="npwd">New Password:</label>
    <input type="password" class="form-control" value={npassword} onChange={e=> setNewPassword(e.target.value)}/>
    <font style={{"color":"red"}}>{err2}</font>
  </div>
  <div class="form-group">
    <label for="cnpwd">Confirm New Password:</label>
    <input type="password" class="form-control" value={cnpassword} onChange={e=> setConfirmNewPassword(e.target.value)}/>
   <font style={{"color":"red"}}>{err3}</font>
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

export default CPAdmin;