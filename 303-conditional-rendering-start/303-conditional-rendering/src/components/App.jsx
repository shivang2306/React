import React from "react";
import Login from "./Login";

// function renderConditional() {
//   const isLoggedIn = false;
//   if (isLoggedIn) {
//     return <h1>Hello</h1>
//   } else {
//     return(
//       <Login />
//     );
//   }
// }

const isLoggedIn = false;
function App() {
  return (
    <div className="container">
      {/* {renderConditional()}; */}

      {
        // Ternary Operator
        isLoggedIn ? <h1>Hello</h1> : <Login />
      }
      
    </div>
  );
}

export default App;
