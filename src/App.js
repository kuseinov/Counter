const { useState } = require("react")

function Counter(){
  const [counter,setCounter]=useState(0)
  function incrinment(){
   setCounter(counter +1)
  }
  function dicriment(){
    if(counter >0)
    setCounter(counter -1)
  }
  return (
    <div>
    <h2>{counter}</h2>
      <button onClick={incrinment}>+</button>
      <button onClick={dicriment}>-</button>
    </div>
  )
}
export default Counter