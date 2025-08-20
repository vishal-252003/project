import './App.css';
import {Routes , Route} from 'react-router-dom';
import Header from './components/HeaderComponent/Header.js';
import Nav from './components/NavComponent/Nav.js';
import Footer from './components/FooterComponent/Footer.js';
import About from './components/AboutComponent/About.js';
import Contact from './components/ContactComponent/Contact.js';
import Service from './components/ServiceComponent/Service.js';
import Register from './components/RegisterComponent/Register.js';
import Login from './components/LoginComponent/Login.js';
import Main from './components/MainComponent/Main.js';
import Banner from './components/BannerComponent/Banner.js';
import Adminhome from './components/AdminhomeComponent/Adminhome.js';
import Userhome from './components/UserhomeComponent/Userhome.js';
import Logout from './components/LogoutComponent/Logout.js';
import CPAdmin from './components/CPAdminComponent/CPAdmin.js';
import EPAdmin from './components/EPAdminComponent/EPAdmin.js';
import Manageusers from './components/ManageusersComponent/Manageusers.js';
import Addcategory from './components/AddcategoryComponent/Addcategory.js';
import Addsubcategory from './components/AddsubcategoryComponent/Addsubcategory.js';
import Viewtenders from './components/ViewtendersComponent/Viewtenders.js';
import Viewsctenders from './components/ViewsctendersComponent/Viewsctenders.js';
import Verifyuser from './components/Verifyusercomponent/Verifyuser.js';
import Addtender from './components/AddtenderComponent/Addtender.js';
import Tenderdetails from './components/TenderdetailsComponent/Tenderdetails.js';


function App() {
  return (
   <>

   <Header/>
    <Nav/>
    <Banner/>
 

 <Routes>
        <Route path="/" element={<Main />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/service" element={<Service />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/login" element={<Login />} ></Route> 
        <Route path="/admin" element={<Adminhome />} ></Route>
        <Route path="/user" element={<Userhome />} ></Route> 
        <Route path="/logout" element={<Logout />} ></Route>
        <Route path="/cpadmin" element={<CPAdmin />}></Route>
        <Route path="/epadmin" element={<EPAdmin />}></Route>
        <Route path="/manageusers" element={<Manageusers />}></Route>
        <Route path="/addcategory" element={<Addcategory />}></Route>
        <Route path="/addsubcategory" element={<Addsubcategory />}></Route>
        <Route path="/viewtenders" element={<Viewtenders />}></Route>
        <Route path="/addtender" element={<Addtender />}></Route>
        <Route path="/viewsctenders/:catnm" element={<Viewsctenders />}></Route>
        <Route path="/verifyuser/:vemail" element={<Verifyuser/>}></Route>
        <Route path="/tenderdetails/:id" element={<Tenderdetails />}></Route>
       



    </Routes>

 <Footer/>
   
   </>
  );
}

export default App;
