import './Header.css';
import { useState , useEffect} from 'react';
import Auth from '../AuthComponent/Auth';

function Header() {

  const [HeaderContent , setHeaderContent ] = useState()

  useEffect(()=>{
    if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")
    {
      setHeaderContent(<>
        {/* header section strats */}
        <header class="header_section">
          <div class="header_top">
            <div class="container-fluid ">
              <div class="contact_nav">
                <a href="">
                
                  <span>
                    Welcome Admin
                  </span>
                </a>
                <a href="">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <span>
                    {localStorage.getItem("email")}
                  </span>
                </a>
                <a href="">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span>
                    India
                  </span>
                </a>
              </div>
            </div>
          </div>
          </header>
          {/* end header section */}
     
     
        </>)
    }
    else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")
      {
        setHeaderContent(<>
          {/* header section strats */}
          <header class="header_section">
            <div class="header_top">
              <div class="container-fluid ">
                <div class="contact_nav">
                  <a href="">
                   
                    <span>
                    Welcome User
                    </span>
                  </a>
                  <a href="">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <span>
                   {localStorage.getItem("email")}
                    </span>
                  </a>
                  <a href="">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                      India
                    </span>
                  </a>
                </div>
              </div>
            </div>
            </header>
            {/* end header section */}
       
       
          </>)
      }
    else
      {
        setHeaderContent(  <>
          {/* header section strats */}
          <header class="header_section">
            <div class="header_top">
              <div class="container-fluid ">
                <div class="contact_nav">
                  <a href="">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <span>
                      Call : xxxxxxx
                    </span>
                  </a>
                  <a href="">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <span>
                      Email : demo@gmail.com
                    </span>
                  </a>
                  <a href="">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                      Location
                    </span>
                  </a>
                </div>
              </div>
            </div>
            </header>
            {/* end header section */}
       
       
          </>);
      }  
  });

  return (
 <>
 <Auth />
 {HeaderContent}
 </>
  );
}

export default Header;
