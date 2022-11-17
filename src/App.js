import "./App.css";
// import Table from 'react-bootstrap/Table';
import Header from "./Header/Header";
import Login from "./Header/LOGIN/Login";
import Navbars from "./Header/NavbarComp/Navbars";
import Purchase from "./Purchase/Purchase";
// import Display from './API/Display'
import BoxDetails from "./Components/FourthPage/BoxDetails";
import Signup from "./Header/SignUP/Signup";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">

      
     <Navbars/>

       <Header/>
       <hr/>
       <Signup/>
       <Login/>
       <Purchase/>
       <BoxDetails/>

      {/* <Router>
        <Routes>
          <Route path="" element= {<Signup />}/>
          <Route path="/Signup" element= {<Signup />}/>
          <Route  exact path="/Login" element= {<Login />}/>
          <Route exact pathh="/Purchase" element= {<Purchase />}/>
          <Route exact path="/BoxDetails" element=  {<BoxDetails />}/>
          {/* <Display/> */}
        {/* </Routes> 
      </Router> */} 
    </div>
  );
}

export default App;
