import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Button} from './assets/component/Button/Button'

function App() {
  const [count, setCount] = useState(0);
  
  return (<div className='wrap'>
    <h1>{count}</h1>
   <div className='butto'>

   <Button name={"increment"} fun={()=>{setCount(count+1)}}/>
   <Button name={"decrement"} fun={()=>{count>0&&setCount(count-1)}}  />
   </div>
   </div>
  );
}

export default App
