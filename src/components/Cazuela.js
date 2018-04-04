import React from 'react';
import { Popup, Button } from 'semantic-ui-react'

const Cazuela = ({choosecaz, seatsCaz, ver_asientos, allzone, volver}) => {
  const mapSvg = seatsCaz.map((seat)=> {
    return(
      <Popup 
        trigger={
          <svg height="25" width="35">
            <rect id={seat.id} cx="20" cy="20"  rx="5" ry="40" width="25" height="25"  fill={seat.color} onClick={(event)=>{choosecaz(seat.id);}}/>
          </svg>}
        header={seat.id + ' ' + seat.category }
        content={'Precio: ' + seat.price}
      />
    )
  }) 

  return(
    <div className="row">  
      <div className="col s10 offset-s1">
        <div className={allzone[0].display}>
          <div className="cazuela" onClick={
            (event)=>{ver_asientos(allzone[0].id);}
            }></div>
        </div>
        <div className={allzone[0].svg} id="center">
          {mapSvg}
          <Button size="small" onClick={(event)=>{volver(allzone[0].id);}}>Volver</Button>
        </div>
      </div>
   </div>
  )
}

export default Cazuela;