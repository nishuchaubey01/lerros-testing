import "./App.css";
import {Navbar , Nav} from 'react-bootstrap'
// import Table from 'react-bootstrap/Table';
import Header from "./Header/Header";
import Login from "./Header/LOGIN/Login";
import ListingComponents from "./Header/NavbarComp/ListingComponents";
import Purchase from "./Purchase/Purchase";
// import Display from './API/Display'
import BoxDetails from "./Components/FourthPage/BoxDetails";
import Signup from "./Header/SignUP/Signup";
import { BrowserRouter as Router, Route, Routes , } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
        
     <Header/>
     <br/>
     {/* <ListingComponents/>  */}
{/* 
       <Header/>
       <hr/>
       <Signup/>
       <Login/>
       <br/>
       <br/>
       <Purchase/>
       <br/>
       <br/>
       <BoxDetails/> */}

<Routes>
          <Route path="" element= {<Header/>}/>
          <Route path="/Signup" element= {<Signup />}/>
          <Route  exact path="/Login" element= {<Login />}/>
          <Route exact path="/Purchase" element= {<Purchase />}/>
          <Route exact path="/BoxDetails" element=  {<BoxDetails />}/>
           {/* <Display/>  */}
        </Routes> 
      </Router>  
    </div>
  );
}

export default App;
