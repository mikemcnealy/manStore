import { useState } from 'react';
import Navbar from './components/Navbar'
import  Footer from './components/fooler'
import { Link } from "react-router-dom";
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
  <Navbar />
<div className='container'>
<div className="column1">

    <p>Shoes</p>
    <p>Jacket</p>
    <p>Hats</p>
  </div>
  <div className="column2">
    2   
  </div>

</div>
<Footer />
    </>
  )
}

export default App
