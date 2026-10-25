import React,{useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [isMouseOver,setMouseOver]=useState(false);
  const [displayName,setDisplayName]=useState("");
  function handleChange(event)
  {
     setName(event.target.value);
  }
  function handleClick(event)
  {
     event.preventDefault();
     setDisplayName(name);
  }
  function handleMouseOver()
  {
     setMouseOver(true);
  }
  function handleMouseOut()
  {
     setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>Hello {displayName}</h1>
      <form onSubmit={handleClick}>
      <input 
      onChange={handleChange}
      type="text" 
      placeholder="What's your name?"
      value={name}
      />
      <button
       style={{backgroundColor:isMouseOver?"black":"white"}}
       type="submit"
       onMouseOver={handleMouseOver}
       onMouseOut={handleMouseOut}
      >Submit</button>
      </form>
    </div>
  );
}

export default App;
