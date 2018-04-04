import React from 'react';
import { connect } from 'react-redux';
import '../../main.css';
import Cazuela from './Cazuela';
import Galeria from './Galeria';
import Palcosalt from './Palcos_altos';
import Palcosbaj from './Palcos_bajos';
import Platea from './Platea';

const App = ({ choose, seatsCaz,seatsGal, seatsPalAlt,seatsPalBaj, seatsPla, ver_asientos, allzone, volver }) => (
  <div>
    <div className="butacs">
    <div className="box">Escenario</div>
      <Cazuela choose={choose} seatsCaz={seatsCaz} ver_asientos={ver_asientos} allzone={allzone} volver={volver}/>
      <Galeria choose={choose} seatsGal={seatsGal} ver_asientos={ver_asientos} allzone={allzone} volver={volver}/>
      <Palcosalt choose={choose} seatsPalAlt={seatsPalAlt} ver_asientos={ver_asientos} allzone={allzone} volver={volver}/>
      <Palcosbaj choose={choose} seatsPalBaj={seatsPalBaj} ver_asientos={ver_asientos} allzone={allzone} volver={volver}/>
      <Platea choose={choose} seatsPla={seatsPla} ver_asientos={ver_asientos} allzone={allzone} volver={volver}/>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  choose(id) {
    dispatch({
      type: 'CHOOSE',
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

const mapStateToProps = ({ seatsGal, allzone, seatsCaz, seatsPalAlt, seatsPalBaj, seatsPla }) => ({
  seatsCaz,
  seatsGal,
  seatsPalAlt,
  seatsPalBaj,
  seatsPla,
  allzone
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (App);
