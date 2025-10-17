// import Main from "./pages/Main";
import Strip from "./Components/Strip";
import Styles from "./Styles/app.module.css";
import React, { useEffect, useState } from "react";

function App() {

  const [timeDigits, setTimeDigits] = useState(getCurrentTimeDigits());

  function getCurrentTimeDigits() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');   // "14"
    const minutes = String(now.getMinutes()).padStart(2, '0'); // "38"
    const seconds = String(now.getSeconds()).padStart(2, '0'); // "05"

    const fullTime = hours + minutes + seconds; // "143805"
    return fullTime.split(''); // ['1', '4', '3', '8', '0', '5']
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDigits(getCurrentTimeDigits());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const stripsConfig = [
    { ky: 1, id: 3, secIndex: 0, items: [0, 1, 2] },
    { ky: 2, id: 10, secIndex: 1, items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { ky: 3, id: 6, secIndex: 2, items: [0, 1, 2, 3, 4, 5] },
    { ky: 4, id: 10, secIndex: 3, items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { ky: 5, id: 6, secIndex: 4, items: [0, 1, 2, 3, 4, 5] },
    { ky: 6, id: 10, secIndex: 5, items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
  ];


  return (
    <>
      {/* <Main/> */}
      <div className={Styles.Main}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {stripsConfig.map(({ ky, id, secIndex, items }) => (
            <Strip
              key={ky}
              ky={ky}
              id={id}
              sec={Number(timeDigits[secIndex])} // <-- always fresh on re-render
              items={items}
            />
          ))}
        </div>
      </div>

    </>
  );
}

export default App;
