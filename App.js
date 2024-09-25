import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import './api.css';
import { fetchData } from './actions';
import Api from './api.js';


function App() {
  const dispatch = useDispatch();
  var view = useSelector(state => state.view);
  useEffect(() => {
    dispatch(fetchData(1));
  }, [dispatch]);

  const toggleView = () => {
    // Add a new action to toggle the view
    dispatch({ type: 'TOGGLE_VIEW' },view);
    console.log(view);  
  }
  return (
    <div className="App">     
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>My React App
          <button onClick={toggleView}>Toggle View</button>          
        </div>       
      
       <div className='container'>
      <Api view= {view} />
      </div>
    </div>
  );
}

export default App;
