import React,{useState} from "react";

function App() {
  const[fullname,setfullName]=useState({
     fName: "",
     lName: ""
  });
  
  function handlechange(event)
  {
    //  const value=event.target.value;
    //  const name=event.target.name;
    const {value,name}=event.target;
     setfullName((prevValue)=>{
       if(name==='fName')
       {
          return {
            fName:value,
            lName:prevValue.lName
          }
       }
       else if(name==='lName')
       {
          return {
            fName:prevValue.fName,
            lName:value
          }
       }
     })
  }
  
  return (
    <div className="container">
      <h1>Hello {fullname.fName} {fullname.lName}</h1>
      <form>
        <input 
        onChange={handlechange}
        name="fName" placeholder="First Name" 
        value={fullname.fName}
        />
        <input 
        onChange={handlechange}
        name="lName" placeholder="Last Name"
        value={fullname.lName}
         />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
