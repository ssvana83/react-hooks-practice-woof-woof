import React from 'react'

function Pups({ pups }) {
  const { name } = pups
  return (
    <span>{name}</span>
  )
}

export default Pups