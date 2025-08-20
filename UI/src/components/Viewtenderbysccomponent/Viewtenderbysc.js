import './Viewtenderbysc.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _addtenderapiurl } from '../../APIurls';
import {useParams , Link } from 'react-router-dom';

function Viewtenderbysc() {

  const params = useParams();
  const [ sctenderlist , setSubCatTenderList ] = useState([]);

  useEffect(()=>{
    axios.get(_addtenderapiurl+"fetch?subcatnm="+params.subcatnm).then((result)=>{
      setSubCatTenderList(result.data);
    }).catch((error)=>{
      console.log(error);  
    });
  });

  return (
  <>
    {/* About Start */}
    <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
            <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">List of <span class="text-primary">Tenders &gt;&gt; </span>{params.catnm}</h1>
<center>
<div id="category_main">
{
  sctenderlist.map((row)=>(
    <Link to={`/tenderdetails/${row._id}`}>
    <div class="tender_part">
      <h3>{row.title}</h3>
      <p>{row.description}</p>
      <b>End Date: {row.edate}</b>
    </div>
  </Link>
    
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

export default Viewtenderbysc;