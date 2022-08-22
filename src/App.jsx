import Slide from "./Components/Slide";
import "./App.css";
import React from "react";

// once you download the template; please run  "npm install" command and that will install all the packages required for this project by referencing package.json;

// do not remove any of the data-cy attributes;

// API to get the data : https://slides-app-220822.herokuapp.com/slides

export default function App() {
  const [id,setId] = React.useState(1);
  const [data,setData] = React.useState({});
  const [length,setLength] = React.useState([]);
  const [loading,setLoading] = React.useState(false);
  const [error,setError] = React.useState(false);

  React.useEffect(()=>{
    fetchTheData();
    endPoint();
  },[id]);


  const endPoint = () => {
    fetch(`https://slides-app-220822.herokuapp.com/slides/`)
    .then((res)=>res.json())
    .then((res)=>setLength(res));
  }

  const fetchTheData = () => {
    setLoading(true);
    fetch(`https://slides-app-220822.herokuapp.com/slides/${id}`)
      .then((res)=>res.json())
      .then((res)=>setData(res))
      .catch((err)=>setError(true))
      .finally(()=>setLoading(false))  
  }

  return (
    <div className="App">
      <h1 data-cy="header">Slides</h1>
      {loading?(<h1>Loading....</h1>):error?(<h1>Something went Wrong</h1>):(<Slide item={data}/>)}
      <button data-cy="prev" onClick={()=>setId(id-1)} disabled={id===1}>Prev</button>
      <button data-cy="next" onClick={()=>setId(id+1)} disabled={id===length.length}>Next</button>
    </div>
  );
}
