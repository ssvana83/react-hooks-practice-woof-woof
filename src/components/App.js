import React, { useEffect, useState } from "react";
import DogBar from "./DogBar";
import DogSummary from "./DogSummary";
import Filter from "./Filter";

function App() {

  const [dogs,setDogs] = useState ([]);
  const [summaryDog, setSummaryDog] = useState({});

  function handleSummaryDog(dog) {
    setSummaryDog(dog)
  }

  function handleClickGoodBad(id, isGoodDog) {

    fetch(`http://localhost:3001/pups/${id}`, {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({isGoodDog: isGoodDog})
    })
      .then(r => r.json())
      .then(data => setSummaryDog(data))
  }

  useEffect(() => { 
  fetch ('http://localhost:3001/pups')
    .then(r => r.json())
    .then (data => (setDogs(data)))
  }, [])

    

  return (
    
    <div className="App">
      <div id="filter-div">
        <Filter />
      </div>
      <div id="dog-bar">
        <DogBar dogs={dogs} handleSummaryDog={handleSummaryDog}/> 
      </div>
      <div id="dog-summary-container">
        <DogSummary handleClickGoodBad={handleClickGoodBad} dog={summaryDog} />
        <div id="dog-info"></div>
      </div>
    </div>
  );
}

export default App;
