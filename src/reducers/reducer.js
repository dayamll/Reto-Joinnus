import INIT_STATE from '../states/state';

const Reducer = (state = INIT_STATE, action) => {
  let trueSeats = [];
  switch (action.type) {
    case 'CHOOSE':
      state['seats'].map((seat) => {
        if (seat['id'] == action['id']) {
          if (seat['occupied']) {
            trueSeats.push({ ...seat,
              occupied: false,
              color: 'lightseagreen'
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
        seats: trueSeats
      };
    default:
      return state;
  }
};

export default Reducer;