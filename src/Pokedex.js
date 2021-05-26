import Pokecard from './Pokecard'
import React, { Component } from 'react'
import './Pokedex.css'

class Pokedex extends Component {
   render(){
      let title;
      if(this.props.isWinner){
        title = <h1 className="Winner">Winning hand</h1>
      } else {
        title = <h1 className="Loser">Losing hand</h1>
      }
      return(
         <div className="Pokedex">
         {title}
         <h4>Total expirience: {this.props.exp}</h4>
         <div className="Pokedex-cards">
         {this.props.pokemon.map((p)=>(
            <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>
         ))}
         </div>
         </div>
      )
   }
}

export default Pokedex