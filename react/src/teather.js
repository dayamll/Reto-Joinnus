import React, { Component } from 'react';
import './teather.css';

// const allSeats = [
//   {

//   },
// ]

const TeatherSeats = props => {
    return (
      <div>
        <div className="map">
          <div className="map-hud">
            <button id="zoomIN"><span><i className="fa fa-plus fa-fw" /></span></button>
            <button id="zoomOUT"><span><i className="fa fa-minus fa-fw" /></span></button>
            <button id="home"><span><i className="fa fa-home fa-fw" /></span></button>
            <span id="zone-selector" className="dropdown">
              <button className="dropdown-toggle" type="button" data-toggle="dropdown"><span id="zone-selected" zoneid="all">Zonas</span><span className="caret" /></button>
              <ul className="dropdown-menu hud">
                <li id="all" className="zone-list"><a><span className="name">Todas</span></a></li>
              </ul>
            </span>
          </div>
          <svg id="canvas" className="map-container" width={400} height={400} />
          <div id="shoppingCart" className="tickets-container">
            <div id="tickets-info" className="tickets-info">
              <div id="total-tickets">
                <span id="label-number-tickets" className="tickets-label">No hay butacas seleccionadas</span>
                <span id="number-tickets" className="number-tickets" />
                <span><button id="remove-all" className="tickets-info-remove"><i className="fa fa-times" aria-hidden="true" /></button></span>
              </div>
              <div id="amount-tickets">
                <span id="label-amount" className="tickets-label">Precio total:</span>
                <span id="total-amount">0</span>
              </div>
              <button id="buy" className="tickets-info-buy"><i className="fa fa-shopping-cart" aria-hidden="true" /> Comprar</button>
            </div>
            <div id="tickets-list" className="tickets-list">
            </div>
          </div>
        </div>
        <div id="tooltip" className="info" />
      </div>
    );
  }

class Teather extends Component {
  render() {
    return (
      <div>
        <TeatherSeats />
      </div>
    );
  }
}

export default Teather
