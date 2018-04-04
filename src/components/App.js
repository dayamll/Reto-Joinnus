import React from 'react';
import { connect } from 'react-redux';
import '../../main.css';
import Cazuela from './Cazuela';
import Galeria from './Galeria';
import Palcosalt from './Palcos_altos';
import Palcosbaj from './Palcos_bajos';
import Platea from './Platea';
import Leyenda from './Leyenda'

const App = ({move,zoom,zoomdata,choosecaz,choosegal,choosepalalt,choosepalbaj,choosepla, seatsCaz,seatsGal, seatsPalAlt,seatsPalBaj, seatsPla, ver_asientos, allzone, volver }) => (
  <div>
    <div className="butacs">
    <div className="box"></div>
      <Leyenda />
      <Cazuela move={move} zoom={zoom} zoomdata={zoomdata} choosecaz={choosecaz} seatsCaz={seatsCaz} ver_asientos={ver_asientos} allzone={allzone} volver={volver}/>
      <Galeria move={move} zoom={zoom} zoomdata={zoomdata} choosegal={choosegal} seatsGal={seatsGal} ver_asientos={ver_asientos} allzone={allzone} volver={volver}/>
      <Palcosalt move={move} zoom={zoom} zoomdata={zoomdata} choosepalalt={choosepalalt} seatsPalAlt={seatsPalAlt} ver_asientos={ver_asientos} allzone={allzone} volver={volver}/>
      <Palcosbaj move={move} zoom={zoom} zoomdata={zoomdata} choosepalbaj={choosepalbaj} seatsPalBaj={seatsPalBaj} ver_asientos={ver_asientos} allzone={allzone} volver={volver}/>
      <Platea move={move} zoom={zoom} zoomdata={zoomdata} choosepla={choosepla} seatsPla={seatsPla} ver_asientos={ver_asientos} allzone={allzone} volver={volver}/>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  move(id) {
    dispatch({
      type: 'MOVE',
      id
    })
  },
  zoom(id) {
    dispatch({
      type: 'ZOOM',
      id
    })
  },
  choosegal(id) {
    dispatch({
      type: 'CHOOSEGAL',
      id
    })
  },
  choosepalbaj(id) {
    dispatch({
      type: 'CHOOSEPALBAJ',
      id
    })
  },
  choosepalalt(id) {
    dispatch({
      type: 'CHOOSEPALALT',
      id
    })
  },
  choosepla(id) {
    dispatch({
      type: 'CHOOSEPLA',
      id
    })
  },
  choosecaz(id) {
    dispatch({
      type: 'CHOOSECAZ',
      id
    })
  },
  ver_asientos(id) {
    dispatch({
      type: 'VER_ASIENTOS',
      id
    })
  },
  volver(id) {
    dispatch({
      type: 'VOLVER',
      id
    })
  }
});

const mapStateToProps = ({ seatsGal, allzone, seatsCaz, seatsPalAlt, seatsPalBaj, seatsPla, zoomdata }) => ({
  seatsCaz,
  seatsGal,
  seatsPalAlt,
  seatsPalBaj,
  seatsPla,
  allzone,
  zoomdata
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (App);
