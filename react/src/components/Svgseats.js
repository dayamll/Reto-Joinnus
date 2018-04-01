import React from 'react';

const Svgseats = ({choose, seats}) => {
  return(
    <div className="row">  
      <div className="col s10 offset-s1">
        <div className="center-align">
          {seats.map((seat)=> {
              <svg id={seat.id} height="50" width="50">
                <circle cx="35" cy="35" r="10" stroke={seat.color} onClick={(event)=>{
                  choose(seat.id);
                }} />
              </svg>
          })}
          </div>
            <a className="waves-effect btn button green">Continuar con la compra</a>¿
      </div>
   </div>
  )
}

export default Svgseats;