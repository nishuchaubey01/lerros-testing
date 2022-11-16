import Table from './Table';
import data from "./Data.json"
import { useState, useEffect }from 'react';
import './Purchase.css';


function App() {
  const [po, setPo] = useState(123)
  
  const getHeadings = () => {
    return Object.keys(data[0]);


  }
  return (
 
    <div className="container">

<form>
      <label>
    Enter Purchase number:
    <input type="Search" id="input-search" name="name" placeholder='#PO' />
  </label>
  <input type="Button"  id ="search-btn" value="Submit" />
</form>
      
      <Table theadData={getHeadings()} tbodyData={data}/>
      
    </div>
  );
}
export default App;