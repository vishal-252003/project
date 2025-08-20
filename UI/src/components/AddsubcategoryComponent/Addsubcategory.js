import './Addsubcategory.css';
import {useState , useEffect} from 'react';
import axios from 'axios';
import { _categoryapiurl, _subcategoryapiurl } from '../../APIurls';

function Addsubcategory() {

 const [file , setFile] = useState();
 const [catName , setCatName] = useState();
 const [subcatName , setSubCatName] = useState(); 
 const [output , setOutput] = useState();
const [cList , setCatList] = useState([]);

 useEffect(()=>{
  axios.get(_categoryapiurl+"fetch").then((result)=>{
    setCatList(result.data);
  }).catch((error)=>{
    console.log(error);
  });
});

 const handleChange=(event)=>{
  setFile(event.target.files[0]);
 }

 const handleSubmit=(event)=>{
  event.preventDefault();
  var formData= new FormData();
  formData.append('catnm',catName);
  formData.append('subcatnm',subcatName);
  formData.append('caticon',file);
  const config={
    'content-type' : 'multipart/form-data'
  };

  axios.post(_subcategoryapiurl+"save",formData,config).then((response)=>{
    setCatName("");
    setSubCatName("");
    setOutput("SubCategory added successfully");
  });


 }

  return (
  <>
  
 
 {/* about section */}

 <section class="about_section layout_padding-bottom">
   <div class="container  ">
     <div class="row">
       <div>
         <div class="detail-box">
         <div class="heading_container">
         <h1>Add SubCategory Here!!!</h1>
           </div>
           <font style={{"color":"blue"}}>{output}</font>
           <form>
  <div class="form-group">
    <label for="catnm">Category Name:</label>
    <select  class="form-control" value={catName} onChange={e => setCatName(e.target.value)} >
    <option>Select Category</option>
    {
      cList.map((row)=>(
        <option>{row.catnm}</option>
      ))
    }
     </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="catnm">SubCategory Name:</label>
    <input type="text" class="form-control" value={subcatName} onChange={e => setSubCatName(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="file">SubCategory Icon:</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-danger">Add SubCategory</button>
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

export default Addsubcategory;