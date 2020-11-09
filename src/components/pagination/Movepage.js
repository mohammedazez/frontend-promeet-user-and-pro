import React from "react";
import Pagination from "react-bootstrap/Pagination";

// let active = 2;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>
//   );
// }

function Movepage() {
  return (
    <div>
      <Pagination>
        <Pagination.First />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Item>{6}</Pagination.Item>
        <Pagination.Item>{7}</Pagination.Item>
        <Pagination.Last />
      </Pagination>
    </div>
  );
}

export default Movepage;
