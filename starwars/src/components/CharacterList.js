import React from 'react'
import './StarWars.css'

import Character from './Character'

const CharacterList = props => {
  const { characters } = props
  return (
    <div className="character-list">
      <Character />
    </div>
  )
}

export default CharacterList