import React from 'react';
import { Popup } from 'semantic-ui-react'

const Svgseats = ({choose, seats}) => {
  return(
    <div className="row">  
      <div className="col s10 offset-s1">
        <div className="center-align">
          {seats.map((seat)=> {
            return(
              <Popup
        trigger={<svg id={seat.id} height="55" width="55">
        <circle cx="20" cy="20" r="20"  fill={seat.color} onClick={(event)=>{
          choose(seat.id);
        }} />
      </svg>}
        header={seat.id}
        content={seat.price}
      />)
          })}
          </div>
            {/* <a id="button">Continuar con la compra</a> */}
      </div>
   </div>
  )
}

export default Svgseats;