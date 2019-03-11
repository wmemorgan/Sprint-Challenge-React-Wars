import React from 'react'
import './StarWars.css'

import Character from './Character'

const CharacterList = props => {
  const { characters } = props

  return (
    <div className="character-list">
      {characters.map(character => (
        <Character character={character} key={character.name}/>
      ))}
    </div>
  )
}

export default CharacterList