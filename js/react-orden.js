import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

function OrdenesDeServicio() {
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    // Obtención de las órdenes de servicio desde la base de datos
    // y actualización del estado
    fetch('/api/ordenes')
      .then(response => response.json())
      .then(data => setOrdenes(data))
      .catch(error => console.error(error));
  }, []);

  const columns = [
    {
      Header: 'Número',
      accessor: 'numero'
    },
    {
      Header: 'Fecha',
      accessor: 'fecha'
    },
    {
      Header: 'Garantía',
      accessor: 'garantia'
    }
  ];

  return (
    <ReactTable
      data={ordenes}
      columns={columns}
      filterable
    />
  );
}

export default OrdenesDeServicio;

