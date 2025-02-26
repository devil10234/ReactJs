import React from 'react'
// import Product from './Product'
import Fun from './component/fun'
import { useState } from 'react'

function App() {
  const[c,setCount]=useState(0)
  function display(n){
setCount((c)=>c+n)

  }
  return (
    <>
      
<h1>Hi paradox TimeWalker</h1>
{/* <Product/> */}

<Fun title="hello" count={c} func={display}/>
{/* <Fun /> */}
    </>
  )
}

export default App
