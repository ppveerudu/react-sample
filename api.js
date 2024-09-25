// Api.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';


const Api = ({view}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);
  const loading = useSelector(state => state.loading);
  const currentPage = useSelector(state => state.data.page);
  const totalPages = useSelector(state => state.data.total_pages);

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(fetchData(currentPage + 1));
    }
  };


  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(fetchData(currentPage - 1));
    }
  };

  if (loading) return 'Loading...';

 
  return (
    
      <div className={`container ${view}`}>
      {data && data.map(item => (
        <div key={item.id} className='item'>
          <h2>{item.first_name} {item.last_name}</h2>
          <p>{item.email}</p>
          <img src={item.avatar} alt={`${item.first_name} ${item.last_name}`} />
        </div>
      ))} 
      <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
      <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
   
     
      
    </div>
  );
};

export default Api;