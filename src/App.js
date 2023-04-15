

import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  const {count} =useSelector((storedata)=>storedata)

  const increamentfunc=()=>{
    dispatch({
      type:"increament"
    })
  }
  const decreamentfunc=()=>{
    dispatch({
      type:"decreament"
    })
  }
  const resetfunc=()=>{
    dispatch({
      type:"reset"
    })
  }

  

  return (
    <div className="App">
        <div className='couterdiv'>

        <div className='couterdiv1'>
            {
              count
            }
        </div>
        <div className='couterdiv2'>
            <button onClick={increamentfunc}>increament</button>
            <button onClick={resetfunc}>reset</button>
            <button onClick={decreamentfunc}>decrement</button>
        </div>
        </div>
    </div>
  );
}

export default App;
