import './Nav.css';
import { Link } from 'react-router-dom';
import { useState , useEffect} from 'react';


function Nav() {

        const [ NavContent , setNavContent ] = useState();

useEffect(()=>{
    if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")
        {
            setNavContent(<>
                {/* navbar strats */}
                <nav >
                    <div style={{display:'flex'}}>
                        <div style={{ justifyContent: 'flex-start' ,marginRight:'650px'}}>
                            <a href="index.html" class="navbar-brand p-0">
                                <h1 style={{marginLeft:'20px'}}>eTenders</h1>
                            </a>
                        </div>
    
    
                        <div style={{ justifyContent: 'flex-end', display: 'inline-flex', marginTop:'5px'}}>
                            <a class="nav-item nav-link active"><Link to="/admin">Admin Home</Link></a>&nbsp;
                            <a class="nav-item nav-link "><Link to="/manageusers">Manageusers</Link></a>&nbsp;
                           
                            <div class="dropdown">
                                <a href="#" class="nav-item nav-link " data-toggle="dropdown">Manage Category<span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                <li><a href=""><Link to="/addcategory">Add Category</Link></a></li>
                             &nbsp;   <li><a href=""><Link to="/addsubcategory">Add SubCategory</Link></a></li>
                                </ul>
                            </div>
                            <a class="nav-item nav-link "><Link to="/addtender">Add Tender</Link></a>&nbsp;
                            <div class="dropdown">
                                <a href="#" class="nav-item nav-link " data-toggle="dropdown">Settings<span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                <li><a href=""><Link to="/epadmin">Edit Profile</Link></a></li>
                             &nbsp;   <li><a href=""><Link to="/cpadmin">Change Password</Link></a></li>
                                </ul>
                            </div>
                            </div>
                            <a href="" class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
                        </div>
                
    
                </nav>
    
                {/* navbar ends */}
    
    
            </>)
        }
        else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")
          {
            setNavContent(<>
                {/* navbar strats */}
                <nav >
                    <div style={{display:'flex'}}>
                        <div style={{ justifyContent: 'flex-start' ,marginRight:'650px'}}>
                            <a href="index.html" class="navbar-brand p-0">
                                <h1 style={{marginLeft:'20px'}}>eTenders</h1>
                            </a>
                        </div>
    
    
                        <div style={{ justifyContent: 'flex-end', display: 'inline-flex', marginTop:'5px'}}>
                            <a class="nav-item nav-link active"><Link to="/user">User Home</Link></a>
                           
                            
                            <a class="nav-item nav-link "><Link to="/viewtenders">View Tenders</Link></a>
                            <a href="" class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
                        </div>
                    </div>
    
                </nav>
    
                {/* navbar ends */}
    
    
            </>)
          }
        else
          {
            setNavContent(<>
                {/* navbar strats */}
                <nav >
                    <div style={{display:'flex'}}>
                        <div style={{ justifyContent: 'flex-start' ,marginRight:'650px'}}>
                            <a href="index.html" class="navbar-brand p-0">
                                <h1 style={{marginLeft:'20px'}}>eTenders</h1>
                            </a>
                        </div>
    
    
                        <div style={{ justifyContent: 'flex-end', display: 'inline-flex', marginTop:'5px'}}>
                            <a class="nav-item nav-link active"><Link to="/">Home</Link></a>
                            <a href="" class="nav-item nav-link"><Link to="/about">About</Link></a>
                            <a href="" class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                            <a href="" class="nav-item nav-link"><Link to="/service">Service</Link></a>
                            <a href="" class="nav-item nav-link"><Link to="/register">Register</Link></a>
                            <a href="" class="nav-item nav-link"><Link to="/login">Login</Link></a>
                        </div>
                    </div>
    
                </nav>
    
                {/* navbar ends */}
    
    
            </>)
          }  
});

    return (
        <>
          {NavContent}

        </>
    );
}

export default Nav;
