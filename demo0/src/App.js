import React, { useRef, useState } from 'react'

function App() {

  const nRef = useRef(0) // {current:0},
  const [n,seTN] = useState(0)

  const add = () => {
    nRef.current += 1
    if(nRef.current===5){ // nRef.current 被更新了，但不会触发 App 重新执行
      seTN(n+10)
    }
  }
  return (
    <div>
      <div>{nRef.current}</div>
      <div>
        <button onClick={add}>+1</button>
      </div>
    </div>
  )
}

export default App