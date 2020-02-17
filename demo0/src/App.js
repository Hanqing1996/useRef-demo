import React, { Component, useState } from 'react'

const RefObj = {}
function myUseRef(initialValue) {
  if (RefObj.current === undefined) {
    RefObj.current = initialValue
  }
  return RefObj
}

function App() {

  const nRef = myUseRef(0) // {current:0},
  const seTN = React.useState(0)[1]

  const add = () => {
    nRef.current += 1
    seTN(nRef.current) 
  }
  const minus = () => {
    nRef.current -= 1
    seTN(nRef.current)
  }

  return (
    <div>
      <div>{nRef.current}</div>
      <div>
        <button onClick={add}>+1</button>
        <button onClick={minus}>-1</button>
      </div>
    </div>
  )
}

export default App