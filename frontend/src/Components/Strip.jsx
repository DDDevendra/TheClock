// import React, { useEffect, useState } from "react";
// import styles from "../Styles/Strip.module.css";


// export default function Strip(props) {

  
//   const [currentIndex, setCurrentIndex] = useState(props.sec);
  
//   useEffect(() => {
//     setCurrentIndex(props.sec); // Sync with prop change
//   }, [props.sec]);
  
//   const [ind, setInd] = useState(() => currentIndex);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setInd(prev => (prev + 1) % props.id);
//   //   }, 1000);

//   //   return () => clearInterval(interval); // Cleanup
//   // }, []);

//   useEffect(() => {
//      setTimeout(()=>addMotion(ind),0);
//   },[ind])

//   const addMotion = (ind) => {

//     let b = document.getElementById(`${props.ky}+${currentIndex}`);
//     let a = document.getElementById(props.ky);
//     ind = (props.id / 2) - (ind);
//     a.style.transform = `translateY(${ind * 3}rem)`
//     b.style.transition = 'transform 0.5s ease-in-out, font-weight 0.5s ease-in-out';
//     b.style.transform = `scale(1.5)`;
//     b.style.fontWeight = 'bold';
    
//     setTimeout(() => {
//       b.style.transform = 'scale(1)';
//       b.style.fontWeight = 'normal';
//     }, 1000);

//   }

//   return (
//     <div>
//       <div className={styles.Main}>
//         <div className={styles.Bright}></div>
//         <div className={styles.MainStrip} id={props.ky}>
//           {
//             props.items.map((item, i) => {
//               return <li id={`${props.ky}+${i}`}>{item}</li>
//             })
//           }
//           <li></li>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect } from "react";
import styles from "../Styles/Strip.module.css";

export default function Strip(props) {
  const { ky, sec, id, items } = props;

  useEffect(() => {
    // Trigger animation when `sec` (index) updates
    addMotion(sec);
  }, [sec]);

  const addMotion = (index) => {
    const listItem = document.getElementById(`${ky}-${index}`);
    const strip = document.getElementById(ky);

    if (!listItem || !strip) return;

    const offset = (id / 2) - index;
    strip.style.transform = `translateY(${offset * 3}rem)`;

    listItem.style.transition = 'transform 0.5s ease-in-out, font-weight 0.5s ease-in-out';
    listItem.style.transform = 'scale(1.5)';
    listItem.style.fontWeight = 'bold';

    setTimeout(() => {
      listItem.style.transform = 'scale(1)';
      listItem.style.fontWeight = 'normal';
    }, 1000);
  };

  return (
    <div>
      <div className={styles.Main}>
        <div className={styles.Bright}></div>
        <div className={styles.MainStrip} id={ky}>
          {items.map((item, i) => (
            <li key={i} id={`${ky}-${i}`}>
              {item}
            </li>
          ))}
          <li style={{ visibility: "hidden" }}></li> {/* buffer item */}
        </div>
      </div>
    </div>
  );
}
