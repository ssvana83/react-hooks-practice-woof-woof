import React from 'react'

function Filter() {

  // function toggleFilterDogs(e){
  //   const filterDogsButton = document.querySelector("#good-dog-filter")
  //   if (filterDogsButton.innerText.includes("OFF")){
  //     filterDogsButton.innerText = "Filter good dogs: ON"
  //     updateDogBar()
  //   } else {
  //     filterDogsButton.innerText = "Filter good dogs: OFF"
  //     updateDogBar()
  //   }
  // }


  return (
    <div id="filter-div">
      <button id="good-dog-filter">Filter good dogs: OFF</button>
    </div>
  )
}

export default Filter;