
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3030/users')
      .then(res => {
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  function handleSubmit(id) {
    const conf = window.confirm("Do you want to delete?");
    if (conf) {
      axios.delete(`http://localhost:3030/users/${id}`)
        .then(res => {
          alert('Record has been deleted.');
          navigate('/');
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <>
    <h1 className='bg-secondary text-center'>CRUD OPERATION REACT </h1>
      <p className='bg-warning text-center'>(Using json-server)</p>
    <div className='container mt-5 bg-info'>
            <div className='text-end'><Link to='/create' className='btn btn-primary'>Add +</Link></div>
      <table className='table'>
        <thead className='bg-warning'>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='bg-secondary text-white'>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <Link to={`/update/${d.id}`} className='btn btn-sm  mt-1 btn-success'>Update</Link>
                <Link to={`/edit/${d.id}`} className='btn btn-sm ms-1 btn-primary'> New</Link>

                <button onClick={() => handleSubmit(d.id)} className='btn btn-sm ms-1 btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
