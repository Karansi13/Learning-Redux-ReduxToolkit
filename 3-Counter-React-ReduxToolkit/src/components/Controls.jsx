import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch()
  const inputElement = useRef()

  const handleIncrement = () => {
    dispatch(counterActions.increment())
  }

  const handleDecrement = () => {
    dispatch(counterActions.decrement())   
  } 
  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle())
  } 
  const handleAdd= () => {
    dispatch(counterActions.add (
      inputElement.current.value
    )
  )
    inputElement.current.value = "";
  } 
  const handleSub= () => {
    dispatch(counterActions.subtract (
       inputElement.current.value
    )
  )
    inputElement.current.value = "";
  } 

    return (
      <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleDecrement}>Decrement</button>
        <button type="button" className="btn btn-outline-success btn-lg px-4" onClick={handleIncrement}>Increment</button>

        
        <button type="button" className="btn btn-warning btn-lg px-3 " onClick={handlePrivacyToggle}>Privacy Toggle</button>
      </div>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
        <input type="text" placeholder="Enter number" className="Number-input" ref={inputElement}/>
        <button type="button" className="btn btn-info btn-lg px-3 " onClick={handleAdd}>ADD</button>
      </div>
        <button type="button" className="btn btn-danger btn-lg px-3 " onClick={handleSub}>SUB</button>
        
      </>
    )
}

export default Controls;