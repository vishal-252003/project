import './Service.css';
import { useState , useEffect} from 'react';
import axios from 'axios';

function Service() {

  const  [ pDetails , setPostDetails]=useState([]);
 const [apiURL,setApiURL]=useState("https://jsonplaceholder.typicode.com/posts");

useEffect(()=>{

 axios.get(apiURL).then((result)=>{
 // console.log(result);
  setPostDetails(result.data);
 }).catch((error)=>{
  console.log(error);
});
},[]);

  return (

  <>

 {/* about section */}

 <section class="about_section layout_padding-bottom">
   <div class="container  ">
     <div class="row">
     
         <div class="detail-box">
           <div class="heading_container">
             <h2>
               View & Manage Post Details
             </h2>
           </div>
            <table>
              <tr>
                <th>UserID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
              {
                pDetails.map((row)=>(
                  <tr>
                    <td>{row.userId}</td>
                    <td>{row.id}</td>
                    <td>{row.title}</td>
                    <td>{row.body}</td>
                  </tr>  
                ))
              }
              <tr>

              </tr>
              
              </table>          

         </div>
     </div>
   </div>
 </section>

 {/* end about section */}
  </>
  );
}

export default Service;