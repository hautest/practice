import { increment, decrement } from "./store/store";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const value = useSelector((state) => state);
  console.log(value);
  const dispatch = useDispatch();
  return (
    <div>
      {value}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
