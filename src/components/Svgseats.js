import React from 'react';
import { Popup, Button } from 'semantic-ui-react'



const Svgseats = ({choose, seatsGal, galeria, allzone, volver}) => {
  const mapSvg = seatsGal.map((seat)=> {
    return(
      <Popup 
        trigger={
          <svg id={seat.id} height="40" width="55">
            <rect cx="20" cy="20"  rx="10" ry="40" width="40" height="40"  fill={seat.color} onClick={(event)=>{choose(seat.id);}} />
          </svg>}
        header={seat.id}
        content={seat.price}
      />
    )
  }) 

  return(
    <div className="row">  
      <div className="col s10 offset-s1">
        <div className="center-align" id={allzone.display}>
          <div className="galeria" onClick={
            (event)=>{galeria();}
            }></div>
        </div>
        <div className="center-align" id={allzone.svg}>
          {mapSvg}
          <Button size="small" onClick={(event)=>{volver();}}>Volver</Button>
        </div>
          <Button size="big">Continuar con la compra</Button>
      </div>
   </div>
  )
}

export default Svgseats;