import "./styles.css";

//useContext ki tarha useSelector

import { useSelector, useDispatch } from "react-redux";
//dispatch action ko trigger krta hai

import { incNumber, decNumber } from "./actions/index";
export default function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <a
            className="quantity__minus"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value={myState}
          />
          <a
            className="quantity__plus"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </div>
  );
}
