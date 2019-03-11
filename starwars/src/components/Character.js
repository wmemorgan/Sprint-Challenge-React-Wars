import React from 'react'
import './StarWars.css'

const Character = props => {
  const { name, height, mass, gender, birth_year } = props.character
  return (
    <div className="character-info">
      <h3 className="header-character">{name}</h3>
      <p><span className="stat-category">Height:</span> {height}</p>
      <p><span className="stat-category">Mass:</span> {mass}</p>
      <p><span className="stat-category">Gender:</span> {gender}</p>
      <p><span className="stat-category">Birth Year:</span> {birth_year}</p>
    </div>
  )
}

export default Character