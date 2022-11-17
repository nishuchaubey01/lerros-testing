import Table from './Table';
import data from "./Data.json"
import { useState, useEffect }from 'react';
import './Purchase.css';


function App() {
  const [po, setPo] = useState(123)
  const [tData, setTData] = useState(data);
    const [inputField,setInputField] = useState('');

    const inputsHandler = (e) => {
        setInputField(e.target.value)
    }
    function submit(inputField){

      var resultData = tData.filter(function(ob){
          return ob.PO === inputField
      })

      setTData(resultData)
  }

  const getHeadings = () => {
    return Object.keys(data[0]);


  }
  return (
 
    <div className="container">

<form>
      <label>
    Enter Purchase number:
    <input type="Search" id="input-search" name="name" placeholder='#PO'  onChange={e => inputsHandler(e.target.value)}/>
  </label>
  <input type="Button"  id ="search-btn" value="Submit" onClick={(submit)}/>
</form>
      
      <Table theadData={getHeadings()} tbodyData={tData}/>
      
    </div>
  );
}
export default App;