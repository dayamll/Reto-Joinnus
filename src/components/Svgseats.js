import React from 'react';

const Svgseats = ({choose, seats}) => {
  return(
    <div className="row">  
      <div className="col s10 offset-s1">
        <div className="center-align">
          {seats.map((seat)=> {
            return(
              <svg id={seat.id} height="55" width="55">
                <circle cx="20" cy="20" r="20"  fill={seat.color} onClick={(event)=>{
                  choose(seat.id);
                }} />
              </svg>)
          })}
          </div>
            {/* <a id="button">Continuar con la compra</a> */}
      </div>
   </div>
  )
}

export default Svgseats;