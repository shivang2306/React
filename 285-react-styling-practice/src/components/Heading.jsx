import React from "react";


function Heading()
{
    const time = new Date().getHours();

let greeting = "";
let customStyle = {
  color: "",
};

if (time < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (time < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}


    return (<h1 className="heading" style={customStyle}>
      {greeting}
    </h1>);
}

export default Heading;