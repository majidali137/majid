import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

function Spinner() {
  return (
    <div style={{ width: '100px', margin: '10px auto', display: 'block' }}>
      <PuffLoader color="#3453d5" size={100}/>
    </div>
  );
};

export default Spinner;