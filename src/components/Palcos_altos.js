import React from 'react';
import { Popup, Button, Icon } from 'semantic-ui-react'

const Palcosalt = ({choosepalalt, seatsPalAlt, ver_asientos, allzone, volver}) => {
  const mapSvg = seatsPalAlt.map((seat)=> {
    return(
      <Popup 
        trigger={
          <svg id={seat.id} height="25" width="35">
            <rect cx="20" cy="20"  rx="5" ry="40" width="25" height="25"  fill={seat.color} onClick={(event)=>{choosepalalt(seat.id);}} />
          </svg>}
        header={seat.id + ' ' + seat.category }
        content={'Precio: ' +seat.price}
      />
    )
  }) 

  return(
    <div className="row">  
      <div className="col s10 offset-s1">
        <div className={allzone[2].display}>
          <div className="palcos-altos" onClick={
            (event)=>{ver_asientos(allzone[2].id);}
            }></div>
        </div>
        <div className={allzone[2].svg}>
          {mapSvg}
          <Button size="small" onClick={(event)=>{volver(allzone[2].id);}}>Volver</Button>
          <Button icon>
            <Icon name='zoom' />
          </Button>
          <Button icon>
            <Icon name='zoom out' />
          </Button>
        </div>
      </div>
   </div>
  )
}

export default Palcosalt;