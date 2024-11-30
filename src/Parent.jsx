import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Redux/Features/CounterSlice";

const Parent = () => {
  const count = useSelector((state) => state.counter.counterValue);
  const dispatch = useDispatch();
  console.log(count);

  const handlInc = () => {
    dispatch(increment());
  };
  const handlDec = () => {
    dispatch(decrement());
  };

  return (
    <div>
      Counter is: {count}
      <button onClick={handlInc}>+</button>
      <button onClick={handlDec}>-</button>
    </div>
  );
};

export default Parent;
