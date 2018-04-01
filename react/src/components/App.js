import React from 'react';
import { connect } from 'react-redux';
import '../../main.css';
import Svgseats from './Svgseats';


const App = ({color, choose, seats}) => (
  <div>
    <Svgseats color={color} choose={choose} seats={seats}/>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  choose(id){
    dispatch({ type: 'CHOOSE', 
    id
  })
}
});

const mapStateToProps = ({color, seats}) => ({
  color,
  seats
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
