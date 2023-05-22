import React, { useState } from 'react'

function Dec() {
    const [decval,setDecval]=useState("5")
  return (
  <>
  <h1>{decval}</h1>
  <button onClick={()=>setDecval(decval-1)}>Subtract val</button>

  </>
  )
}

export default Dec