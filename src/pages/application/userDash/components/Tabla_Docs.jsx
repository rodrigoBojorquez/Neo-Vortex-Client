// Table.js
import React from 'react';
import { BsThreeDots } from "react-icons/bs";


const Table = ({ data }) => {
  return (
    <table className="w-[97%] mx-5 bg-white mb-7">
      <thead>
        <tr className='text-xl'>
          <th className="py-2 px-4 border-b border-gray-500 text-left">Nombre</th>
          <th className="py-2 px-4 border-b border-gray-500 text-left">Creado</th>
          <th className="py-2 px-4 border-b border-gray-500 text-center"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id} className='font-semibold text-lg'>
            <td className={`py-2 px-4 border-b border-gray-500 text-left ${index < data.length - 1 ? 'border-t' : ''}`}>
              {item.name}
            </td>
            <td className={`py-2 px-4 border-b border-gray-500 text-left ${index < data.length - 1 ? 'border-t' : ''}`}>
              {item.date}
            </td>
            <td className={`py-2 px-4 border-b border-gray-500 text-center ${index < data.length - 1 ? 'border-t' : ''}`}>
              <BsThreeDots />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default Table;
