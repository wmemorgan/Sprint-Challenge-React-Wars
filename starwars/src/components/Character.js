import React from 'react'
import './StarWars.css'

const Character = props => {
  const { name, height, mass, gender, birth_year } = props.character
  return (
    <div className="character-info">
      <h3>{name}</h3>
      <p><strong>Height:</strong> {height}</p>
      <p><strong>Mass:</strong> {mass}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Birth Year:</strong> {birth_year}</p>
    </div>
  )
}

export default Character