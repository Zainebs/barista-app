import { useState } from 'react'
import './App.css'
import BaristaForm from './Components/baristaForm';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   <div className = "title-container">
        <h1 className = "title">"On my grind" </h1>
        <p> "So you think you can barista? Lets test your knowledge"</p>
      </div> 
      <BaristaForm/>
      </div>
  )
}

export default App;
