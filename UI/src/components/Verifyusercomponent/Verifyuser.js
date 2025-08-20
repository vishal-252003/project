import { useEffect } from 'react';
import { Navigate , useParams } from 'react-router-dom';
import axios from 'axios';
import { _userapiurl } from '../../APIurls';

function Verifyuser()
{

    const params = useParams();

    useEffect(()=>{
     var updateDetails={"condition_obj":{"email":params.vemail},"content_obj":{"status":1}};
     axios.patch(_userapiurl+"update",updateDetails).then((_response)=>{
      alert("User verified successfully....");
     });    
    },[]);
    
    return(
        <>
            <Navigate to='/' />
        </>
    )
}

export default Verifyuser;