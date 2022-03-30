import React from 'react';
import './App.css';
// function App() {
//   let data =
//   [
//     {
//       name: "amit",
//       age: 35,
//       salary: 40000,
//       bonus: 1000,
//       status: true
//     },
//     {
//       name: "ajay",
//       age: 25,
//       salary: 38000,
//       bonus: 2000,
//       status: false
//     },
//     {
//       name: "mayur",
//       age: 23,
//       salary: 50000,
//       bonus: 500,
//       status: true
//     },
//     {
//       name: "jay",
//       age: 29,
//       salary: 35000,
//       bonus: 600,
//       status: true
//     },
//     {
//       name: "raj",
//       age: 33,
//       salary: 22000,
//       bonus: 2000,
//       status: true
//     },
//   ];

//   let filterdata = data.filter((d,i) => (d.salary > 22000 && d.bonus > 600 && d.age > 23))
//   let total = filterdata.reduce((acc,d) => acc + d.salary + d.bonus,0)
//   console.log(total);
//   console.log(filterdata);
//   return (
//     <table border='1px'>
//     <div>
//       <tr>
//         <th>name</th>
//         <th>age</th>
//         <th>salary</th>
//         <th>bonus</th>
//         <th>status</th>
//         <th>total</th>
//         <th>total export</th>
//       </tr>
//       {
//         filterdata.map((d,i) =>{
//           return(
//             <tr>
//               <td>{d.name}</td>
//               <td>{d.age}</td>
//               <td>{d.salary}</td>
//               <td>{d.bonus}</td>
//               <td>{d.status.toString()}</td>
//               <td>{d.salary+d.bonus}</td>
//               {i === 0 ?<td rowSpan={filterdata.length}>{total}</td>:null}
//             </tr>
//           )
//         })
//       }
//     </div>
//     </table>
//   );
// }


function App() {
  let data =
  [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];
  let filterdata = data.filter((d,i) => (d.status === true))
  let total = filterdata.reduce((acc,d) => acc + d.price,0)
  console.log(total);
  console.log(filterdata);
  return (
    <table border='1' cellSpacing={0}>
    <div>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>quantity</th>
        <th>price</th>
        <th>expiry</th>
        <th>status</th>
        <th>total</th>
        <th>total export</th>
      </tr>
      {
        filterdata.map((d,i) =>{
          return(
            <tr align="center">
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.quantity}</td>
              <td>{d.price}</td>
              <td>{d.expiry}</td>
              <td>{d.status.toString()}</td>
              <td>{d.quantity+d.price}</td>
              {i === 0 ?<td rowSpan={filterdata.length}>{total}</td>:null}
            </tr>
          )
        })
      }
    </div>
    </table>
  );
}
export default App;