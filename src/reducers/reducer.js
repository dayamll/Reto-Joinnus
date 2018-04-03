import INIT_STATE from '../states/state';

const Reducer = (state = INIT_STATE, action) => {
  let falseZone = [];
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
      case 'VER_ASIENTOS':
      state['allzone'].map((zone) => {
        if (zone['id'] == action['id']) {
          if (zone['click']) {
            falseZone.push({ ...zone,
              click: false,
              display: 'hide',
              svg: 'show'
            });
          }
        } else {
          falseZone.push({ ...zone
          });
        }
      });
        return { ...state,
          allzone: falseZone
        };
      case 'VOLVER':
      state['allzone'].map((zone) => {
        if (zone['id'] == action['id']) {
          if (!zone['click']) {
            falseZone.push({ ...zone,
              click: true,
              display: 'show',
              svg: 'hide'
            });
          }
        } else {
          falseZone.push({ ...zone
          });
        }
      });
        return { ...state,
          allzone: falseZone
        };
      default:
        return state;
    }
  };

export default Reducer;