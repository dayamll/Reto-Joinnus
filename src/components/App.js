import React from 'react';
import { connect } from 'react-redux';
import '../../main.css';
import Svgseats from './Svgseats';


const App = ({ choose, seatsGal, galeria, allzone, volver }) => (
  <div>
    <div className="butacs">
    <div className="box">Escenario</div>
      <Svgseats choose={choose} seatsGal={seatsGal} galeria={galeria} allzone={allzone} volver={volver}/>
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
  galeria(id) {
    dispatch({
      type: 'GALERIA',
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

const mapStateToProps = ({ seatsGal, allzone }) => ({
  seatsGal,
  allzone
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (App);
