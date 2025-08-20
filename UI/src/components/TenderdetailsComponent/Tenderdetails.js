import './Tenderdetails.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _addtenderapiurl } from '../../APIurls';
import { Link , useParams } from 'react-router-dom';

function Tenderdetails() {

  const params=useParams();
  const [ tender , setTender ] = useState([]);

  useEffect(()=>{
    axios.get(_addtenderapiurl+"fetch?_id="+params.id).then((result)=>{
      setTender(result.data);
    }).catch((error)=>{
      console.log(error);  
    });
  },[params.id]);

  return (
  <>
    {/* About Start */}
    <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
            <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">Tender <span class="text-primary">Details &gt;&gt; </span></h1>
<center>
<div id="category_main">
{
  tender.map((row)=>(
    <div class="tender_part">
    <h3>{row.title}</h3>
    <p>{row.description}</p>
    <img src={`../assests/uploads/quotationicons/${row.quotationiconnm}`} height="150" width="250" />
    <b>End Date: {row.edate}</b>
    <br />
   
  </div>
  
  ))
}


</div>
</center>
            </div>
        </div>
    </div>
    {/* About End */}
  </>
  );
}

export default Tenderdetails;