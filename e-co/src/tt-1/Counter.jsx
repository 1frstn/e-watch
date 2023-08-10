import { useReducer } from "react"

const initState = {
  count:0,
  text:''
}

function reducer(state,action){
  switch(action.type){
    case "increment":
      return {...state,count: state.count +1}
    case "decrement":
      return {...state,count: state.count - 1}
    case "type":
      return {...state,text: action.value}    
    default:
      throw new Error("Unrecognize action type")
  }
} 

const Counter = () => {
  const [state,dispatch] = useReducer(reducer,initState)

  return (

    <div>
      <h1>{state.count}</h1>
      <p>{state.text}</p>
      <button onClick={() => dispatch({type:"increment"})} >+</button>
      <button onClick={() => dispatch({type:"decrement"})} >-</button>
      <input type="text" onChange={(e) => dispatch({type:"type", value: e.target.value})} />    
    </div>
  )
}

export default Counter