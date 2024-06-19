import React, { useState } from 'react'
import './ResultCard.css'

const ResultCard = ({ name, image, height, weight, health, attack, defense, sp, sd, speed, types }) => {
  function capitalizeFirstLetter(word) {
    if (word)
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  }
  const pokemonName = capitalizeFirstLetter(name)
  
  return (
    <div className="card-container">
      <div className="preview">
        <div className="header">
          <div className="title">
                {pokemonName}
          </div>
        </div>

        <div className="card-image">
            <img src={image} alt="" />
        </div>
      </div>
      <div className="info">
        <div className="header"> {/* Header */}
          <div className="title">
            About
          </div>
          <div className="types">
            
          </div>
        </div>
        <div className="content">
          <div id="physical-stats">
            <div id="height">
              <img src="https://img.icons8.com/?size=100&id=7790&format=png&color=FC405C" alt="" />
              Height: {height}cm</div>
            <div className="vertical-divider"></div>
            <div id="weight">
              <img src="https://img.icons8.com/?size=100&id=4880&format=png&color=FC405C" alt="" />
              Weight: {weight}kg</div>
          </div>
          <div id="other-stats">
            <div className="stat" id="health">
              <span>
                <img src="https://img.icons8.com/?size=100&id=59805&format=png&color=FC405C" alt="" />
                Health: {health}
              </span>
              <div className="bar" style={{width: `100%`}}>
                <div className="progress" style={{width: `${health}%`}}></div>
              </div>
            </div>
            <div className="stat" id="attack">
              <span>
                <img src="https://img.icons8.com/?size=100&id=cOlYVArn39ae&format=png&color=FC405C" alt="" />
                Attack: {attack}
              </span>
              <div className="bar" style={{width: `100%`}}>
                <div className="progress" style={{width: `${attack}%`}}></div>
              </div>
            </div>
            <div className="stat" id="defense">
              <span>
                <img src="https://img.icons8.com/?size=100&id=87404&format=png&color=FC405C" alt="" />
                Defense: {defense}
              </span>
              <div className="bar" style={{width: `100%`}}>
              <div className="progress" style={{width: `${defense}%`}}></div>
              </div>
            </div>
            <div className="stat" id="special-attack">
              <span>
                <img src="https://img.icons8.com/?size=100&id=10535&format=png&color=FC405C" alt="" />
                Special Attack: {sp}
              </span>
                <div className="bar" style={{width: `100%`}}>
                <div className="progress" style={{width: `${sp}%`}}></div>
              </div>
              </div>
            <div className="stat" id="special-defense">
              Special Defense: {sd}
                <div className="bar" style={{width: `100%`}}>
                <div className="progress" style={{width: `${sd}%`}}></div>
              </div>
              </div>
            <div className="stat" id="speed">
              <span>
                <img src="https://img.icons8.com/?size=100&id=9806&format=png&color=FC405C" alt="" />
                Speed: {speed}
              </span>
              <div className="bar" style={{width: `100%`}}>
              <div className="progress" style={{width: `${speed}%`}}></div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultCard