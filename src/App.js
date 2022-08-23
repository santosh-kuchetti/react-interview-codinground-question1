/* 
  we hava an input value dynamically given by user and by the number
   we have to create that many number of buttons.
    clicking on each button should have count we have to show individually.
     And again we have to show  separately cumulative click clount of all buttons.
*/
import "./styles.css";
import { useState } from "react";

const Counter = ({ countUp }) => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((pre) => ++pre);
    countUp();
  };

  return (
    <div>
      <button onClick={handleCounter}>Counter</button>
      {counter}
    </div>
  );
};

export default function App() {
  const [number, setNumber] = useState(0);
  const [counterComp, setCouterComp] = useState([]);
  const [totalClicks, setTotalClicks] = useState(0);

  const generateCounterObject = () => {
    let buildArr = [];
    for (let i = 0; i < number; i++) {
      buildArr.push(i);
    }

    setCouterComp(buildArr);
  };

  const handleClicks = () => {
    setTotalClicks((pre) => ++pre);
  };

  return (
    <div className="App">
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={generateCounterObject}>Create Buttons</button>
      {counterComp.map((item, index) => {
        return <Counter countUp={handleClicks} key={index} />;
      })}
      Total Clicks: {totalClicks}
    </div>
  );
}
