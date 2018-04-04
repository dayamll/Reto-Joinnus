import React from 'react';
import { Popup, Button } from 'semantic-ui-react'

const Palcosbaj = ({choose, seatsPalBaj, ver_asientos, allzone, volver}) => {
  const mapSvg = seatsPalBaj.map((seat)=> {
    return(
      <Popup 
        trigger={
          <svg id={seat.id} height="25" width="35">
            <rect cx="20" cy="20"  rx="5" ry="40" width="25" height="25"  fill={seat.color} onClick={(event)=>{choose(seat.id);}} />
          </svg>}
        header={seat.id}
        content={'Precio: ' +seat.price}
      />
    )
  }) 

  return(
    <div className="row">  
      <div className="col s10 offset-s1">
        <div className={allzone[3].display}>
          <div className="palcos-bajos" onClick={
            (event)=>{ver_asientos(allzone[3].id);}
            }></div>
        </div>
        <div className={allzone[3].svg}>
          {mapSvg}
          <Button size="small" onClick={(event)=>{volver(allzone[3].id);}}>Volver</Button>
        </div>
      </div>
   </div>
  )
}

export default Palcosbaj;