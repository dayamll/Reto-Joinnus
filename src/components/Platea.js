import React from 'react';
import { Popup, Button, Icon } from 'semantic-ui-react'

const Platea = ({move, zoom, zoomdata,choosepla, seatsPla, ver_asientos, allzone, volver}) => {
  const mapSvg = seatsPla.map((seat)=> {
    return(
      <Popup 
        trigger={
          <svg id={seat.id} height="25" width="35">
            <rect cx="20" cy="20"  rx="5" ry="40" width="25" height="25"  fill={seat.color} onClick={(event)=>{choosepla(seat.id);}} />
          </svg>}
        header={seat.id + ' ' + seat.category }
        content={'Precio: ' +seat.price}
      />
    )
  }) 

  return(
    <div className="row">  
      <div className="col s10 offset-s1">
        <div className={allzone[4].display}>
          <div className="platea" onClick={
            (event)=>{ver_asientos(allzone[4].id);}
            }></div>
        </div>
        <div className={allzone[4].svg}>
        <div id='cazuela-big' onMouseMove={(event)=>{move()}}>
            <div id={zoomdata[4].scale}>
          {mapSvg}
           </div>
          </div>
          <Button className='btn-volver' size="small" onClick={(event)=>{volver(allzone[4].id);}}>Volver</Button>
          <Button id='zoom-box' icon onClick={(event)=>{zoom(zoomdata[4].id)}}>
            <Icon id='icon' name='zoom' />
          </Button>
        </div>
      </div>
   </div>
  )
}

export default Platea;