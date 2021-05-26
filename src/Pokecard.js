import React, { Component } from 'react'
import './Pokecard.css'


const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
const SlicedApi = (number)=> number <= 999 ? `00${number}`.slice(-3):number

class Pokecard extends Component {

   render(){
      return (
         <div className="Pokecard">
         <h1>{this.props.name}</h1>
         <div className="Pokecard-image">  
          <img src={`${POKE_API}${SlicedApi(this.props.id)}.png`} alt={this.props.name}/>
         </div>
         <div className="Pokecard-text">{this.props.type}</div>
         <div className="Pokecard-text">{this.props.base_experience}</div>
         </div>
      )
   }


}



export default Pokecard
