
import React, { useState } from 'react';
function Table(props){

  const [srNo, setSrNo] = useState('');
  const [color, setColor] = useState('');
  const [style , setStyle] = useState('');
  const [boxnumber, setBoxnumber] = useState('');
  const [size, setSize] = useState('');


const changeSrNo = (event) => {
  setSrNo(event.target.value);
  };
  const changeColor = (event) => {
    setColor(event.target.value);
  };
  const changeSize = (event) => {
    setSize(event.target.value);
  };
  const changeStyle = (event) => {
    setStyle(event.target.value);
  };
  const changeBoxnumber = (event) => {
    setBoxnumber(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      srNo,
     color,
     size,
     style,
     boxnumber,
     
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setSrNo('');
    setColor('');
    setSize('');
    setStyle('');
    setBoxnumber('');
    
  };
  return (
    <div>
      <label>serial Number</label>
      <input type="Number" value={srNo} onChange={changeSrNo} />
      <label>color</label>
      <label>size</label>
      <input type="text" value={size} onChange={changeSize} />
      <input type="color" value={color} onChange={changeColor} />
      <label>style</label>
      <input type="text" value={style} onChange={changeStyle} />
      <label>boxnumber</label>
      <input type="Number" value={boxnumber} onChange={changeBoxnumber} />
      

      <button onClick={transferValue}> Click here</button>
    </div>
  );
}
  
export default Table;