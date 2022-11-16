
import './App.css';
// import Table from 'react-bootstrap/Table';
import Header from './Header/Header';
 import Login from './Header/LOGIN/Login';
//  import Navbar from './Header/Navbar/Navbar';
import Purchase from './Purchase/Purchase';
import Display from './API/Display'
import BoxDetails from './Components/FourthPage/BoxDetails';



 
function App() {
  return (
    <div className="App">
     <Header/>
     <hr/>
     {/* <Display/> */}
      {/* {/* <Navbar/>
       <hr/> */}
     <Login/> 
     <br/> 
     <br/> 
     <br/>
      <Purchase/>
      
      <br/>
      <br/>
      <BoxDetails/>
      {/* <Display/> */}
      
    </div>
  );
}

export default App;
