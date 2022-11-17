import React ,{ useState } from 'react'
import './BoxDetails.css'
import Box from './Box.json'
import TableOfBoxes from './TableOfBoxes'


const BoxDetails = () => {

const [tableOfBoxes, setTableOfBoxes] = useState(Box);
  
const tableRows = tableOfBoxes.map((info) => {
  return (
    <tr>
      <td>{info.color}</td>
      <td>{info.size}</td>
      <td>{info.style}</td>
      <td>{info. boxnumber}</td>
    </tr>
  );
});

const addRows = (data) => {
  const totalTableOfBoxes = tableOfBoxes.length;
  data.id = totalTableOfBoxes + 1;
  const updatedTableOfBoxes = [...tableOfBoxes];
  updatedTableOfBoxes.push(data);
  setTableOfBoxes(updatedTableOfBoxes);
};

return (
  <div>
    <table className="table table-stripped">
      <thead>
        <tr>
          <th>Sr.NO</th>
          <th>COLOR</th>
          <th>SIZE</th>
          <th>Style</th>
          <th>NO. of Boxes</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
    <TableOfBoxes func={addRows} />
  </div>
);
}



export default BoxDetails;
