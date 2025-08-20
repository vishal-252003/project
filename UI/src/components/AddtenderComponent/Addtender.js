import './Addtender.css';
import {useState , useEffect} from 'react';
import axios from 'axios';
import { _addtenderapiurl, _subcategoryapiurl } from '../../APIurls';

function Addtender() {

 const [file , setFile] = useState();
 const [title , setTitle] = useState();
 const [subcatName , setSubCatName] = useState(); 
 const [description , setDescription] = useState();
 const [edate , seteDate] = useState();
 const [output , setOutput] = useState();
const [scList , setSubCatList] = useState([]);

 useEffect(()=>{
  axios.get(_subcategoryapiurl+"fetch").then((result)=>{
    setSubCatList(result.data);
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
  formData.append('title',title);
  formData.append('subcatnm',subcatName);
  formData.append('description',description);
  formData.append('caticon',file);
  formData.append('edate',edate);
  const config={
    'content-type' : 'multipart/form-data'
  };

  axios.post(_addtenderapiurl+"save",formData,config).then((response)=>{
    setTitle("");
    setSubCatName("");
    setDescription("");
    seteDate("");
    setOutput("Tender added successfully");
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
         <h1>Add Tender Here!!!</h1>
           </div>
           <font style={{"color":"blue"}}>{output}</font>
           <form>
   <div class="form-group">
    <label for="title">Title:</label>
    <input type="text" class="form-control" value={title} onChange={e => setTitle(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="subcatnm">SubCategory Name:</label>
    <select  class="form-control" value={subcatName} onChange={e => setSubCatName(e.target.value)} >
    <option>Select SubCategory</option>
    {
      scList.map((row)=>(
        <option>{row.subcatnm}</option>
      ))
    }
     </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="description">Description:</label>
    <input type="text" class="form-control" value={description} onChange={e => setDescription(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="file">Quotation Image:</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  <br/>
  <div class="form-group">
    <label for="edate">End Date:</label>
    <input type="date" class="form-control" value={edate} onChange={e => seteDate(e.target.value)} />
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-danger">Add Tender</button>
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

export default Addtender;