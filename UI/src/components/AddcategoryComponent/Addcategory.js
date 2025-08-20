import './Addcategory.css';
import {useState , useEffect} from 'react';
import axios from 'axios';
import { _categoryapiurl } from '../../APIurls';

function Addcategory() {

 const [file , setFile] = useState();
 const [catName , setCatName] = useState();
 const [output , setOutput] = useState();

 const handleChange=(event)=>{
  setFile(event.target.files[0]);
 }

 const handleSubmit=(event)=>{
  event.preventDefault();
  var formData= new FormData();
  formData.append('catnm',catName);
  formData.append('caticon',file);
  const config={
    'content-type' : 'multipart/form-data'
  };

  axios.post(_categoryapiurl+"save",formData,config).then((response)=>{
    setCatName("");
    setOutput("Category added successfully");
  });


 }

  return (
  <>
  
 
 {/* about section */}

 <section>
   <div class="container">
     <div class="row">
       <div>
         <div class="detail-box">
         <div class="heading_container">
         <h1>Add Category Here!!!</h1>
           </div>
           <font style={{"color":"blue"}}>{output}</font>
           <form>
  <div class="form-group">
    <label for="catnm">Category Name:</label>
    <input type="text" class="form-control" value={catName} onChange={e => setCatName(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="file">Category Icon:</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-danger">Add Category</button>
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

export default Addcategory;