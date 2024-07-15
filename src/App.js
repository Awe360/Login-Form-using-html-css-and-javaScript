import React from 'react';
import About from './comp/About.js';
import Home from './comp/Contact';
import Home from './comp/Home.js';
import "./App.css";

import { BrowserRouter  as Router,Routes,Route,Link } from "react-router-dom";
function App(){
  return(
    <div>
      <Router>
        <nav>
        <Link className="nav"to='/'>Home</Link>
        <Link className="nav"to='/About'>About</Link>
        </nav>
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App;




// const UserProfile = ({ userType }) => {
//   let userDetails;

//   switch (userType) {
//     case 'admin':
//       userDetails = <AdminProfile />;
//       break;
//     case 'manager':
//       userDetails = <ManagerProfile />;
//       break;
//     case 'receptionist':
//       userDetails = <ReceptionistProfile />;
//       break;
//     case 'content_creator':
//       userDetails = <ContentCreatorProfile />;
//       break;
//     default:
//       userDetails = <GuestProfile />;
//   }

//   return (
//     <div>
//       {userDetails}
//       <index/>
//     </div>
//   );
// };

// const AdminProfile = () => <h2>Admin Profile</h2>;
// const ManagerProfile = () => <h2>Manager Profile</h2>;
// const ReceptionistProfile = () => <h2>Receptionist Profile</h2>;
// const ContentCreatorProfile = () => <h2>Content Creator Profile</h2>;
// const GuestProfile = () => <h2>Guest Profile</h2>;


