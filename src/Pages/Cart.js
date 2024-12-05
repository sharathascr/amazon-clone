import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/slices/counterSlice";

function Cart() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>counter :{counter}</p>
      <button onClick={() => dispatch(counterActions.increment())}>
        Increment
      </button>
      <button onClick={() => dispatch(counterActions.decrement())}>
        Decrement
      </button>
    </div>
  );
}

export default Cart;
