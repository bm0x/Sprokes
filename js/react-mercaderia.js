import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

function OrdenesDeMercaderia() {
    const [mercaderias, setMercaderias] = useState([]);
  
    useEffect(() => {
      // Obtención de las órdenes de servicio desde la base de datos
      // y actualización del estado
      fetch('/api/mercaderias')
        .then(response => response.json())
        .then(data => setMercaderias(data))
        .catch(error => console.error(error));
    }, []);
  
    const columns2 = [
      {
        Header: 'Número',
        accessor: 'numero'
      },
      {
        Header: 'Fecha',
        accessor: 'fecha'
      },
      {
        Header: 'Mercadería',
        accessor: 'mercaderia'
      }
    ];

    return (
      <ReactTable
        data={mercaderias}
        columns={columns2}
        filterable
      />
    );
  }


export default OrdenesDeMercaderia;
