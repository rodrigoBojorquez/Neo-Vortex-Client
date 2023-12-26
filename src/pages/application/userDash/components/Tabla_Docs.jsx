// Table.js
import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="min-w-full bg-white border border-gray-300 mb-4">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Nombre</th>
          <th className="py-2 px-4 border-b">Edad</th>
          <th className="py-2 px-4 border-b">Correo electrónico</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td className={`py-2 px-4 border-b ${index < data.length - 1 ? 'border-t' : ''}`}>
              {item.name}
            </td>
            <td className={`py-2 px-4 border-b ${index < data.length - 1 ? 'border-t' : ''}`}>
              {item.age}
            </td>
            <td className={`py-2 px-4 border-b ${index < data.length - 1 ? 'border-t' : ''}`}>
              {item.email}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
