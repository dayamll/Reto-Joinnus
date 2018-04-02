import INIT_STATE from '../states/state';

const Reducer = (state = INIT_STATE, action) => {
  let falseZone = {};
  let trueSeats = [];
  switch (action.type) {
    case 'CHOOSE':
      state['seatsGal'].map((seat) => {
        if (seat['id'] == action['id']) {
          if (seat['occupied']) {
            trueSeats.push({ ...seat,
              occupied: false,
              color: 'darkseagreen'
            });
          } else {
            trueSeats.push({ ...seat,
              occupied: true,
              color: 'red'
            });
          }
        } else {
          trueSeats.push({ ...seat
          });
        }
      });
      return { ...state,
        seatsGal: trueSeats
      };
    case 'GALERIA':
      if (state['allzone'].click){
        falseZone.click = false;
        falseZone.display = 'hide';
        falseZone.svg = 'show';
      }
      return { ...state,
        allzone: falseZone
      };
    case 'VOLVER':
    if (!state['allzone'].volver){
      falseZone.click = true;
      falseZone.display = 'show';
      falseZone.svg = 'hide';
      }
      return { ...state,
        allzone: falseZone
      };
    default:
      return state;
  }
};

export default Reducer;