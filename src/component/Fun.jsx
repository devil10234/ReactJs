import React from 'react'

 function Fun({title="1",count=5,func}) {
//  function Fun() {
  return (
    <div>
     
      {/* <button >+++</button> */}
      <h1>{title} value count : {count}</h1>
      <button onClick={()=>func(5)}>xyy</button>
      {/* <h1>value count : </h1> */}
    </div>
  )
}
export default Fun;