import React from 'react'
import './StarWars.css'

const Character = props => {
  const { name, gender, birth_year, height, mass, eye_color, hair_color } = props.character
  return (
    <div className="character-info">
      <h3 className="header-character">{name}</h3>
      <p><span className="stat-category">Gender:</span> {gender}</p>
      <p><span className="stat-category">Birth Year:</span> {birth_year}</p>
      <p><span className="stat-category">Height:</span> {height}</p>
      <p><span className="stat-category">Mass:</span> {mass}</p>
      <p><span className="stat-category">Eye Color:</span> {eye_color}</p>
      <p><span className="stat-category">Hair Color:</span> {hair_color}</p>
    </div>
  )
}

export default Character