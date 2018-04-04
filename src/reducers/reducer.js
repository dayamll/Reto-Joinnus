import INIT_STATE from '../states/state';

const Reducer = (state = INIT_STATE, action) => {
  let falseZone = [];
  let trueSeatsCaz = [];
  let trueSeatsGal = [];
  let trueSeatsPalAlt = [];
  let trueSeatsPalBaj = [];
  let trueSeatsPla = [];
  switch (action.type) {
    case 'CHOOSECAZ':
      state['seatsCaz'].map((seat) => {
        if (seat['id'] == action['id'] && seat['free'] !== 'occupied') {
          if (seat['free']) {
            trueSeatsCaz.push({ ...seat,
              free: false,
              color: 'darkseagreen'
            });
          }else {
            trueSeatsCaz.push({ ...seat,
              free: true,
              color: 'red'
            });
          }
        } else if(seat['id'] == action['id'] && seat['free'] == 'occupied'){
          trueSeatsCaz.push({ ...seat,
            color: 'silver'
          });
        }else {
          trueSeatsCaz.push({ ...seat
          });
        }
      });
      return { ...state,
        seatsCaz: trueSeatsCaz
      };
      case 'CHOOSEGAL':
      state['seatsGal'].map((seat) => {
        if (seat['id'] == action['id']) {
          if (seat['free']) {
            trueSeatsGal.push({ ...seat,
              free: false,
              color: 'darkseagreen'
            });
          } else {
            trueSeatsGal.push({ ...seat,
              free: true,
              color: 'red'
            });
          }
        } else {
          trueSeatsGal.push({ ...seat
          });
        }
      });
      return { ...state,
        seatsGal: trueSeatsGal
      };
      case 'CHOOSEPALALT':
      state['seatsPalAlt'].map((seat) => {
        if (seat['id'] == action['id']) {
          if (seat['free']) {
            trueSeatsPalAlt.push({ ...seat,
              free: false,
              color: 'darkseagreen'
            });
          } else {
            trueSeatsPalAlt.push({ ...seat,
              free: true,
              color: 'red'
            });
          }
        } else {
          trueSeatsPalAlt.push({ ...seat
          });
        }
      });
      return { ...state,
        seatsPalAlt: trueSeatsPalAlt
      };
      case 'CHOOSEPALBAJ':
      state['seatsPalBaj'].map((seat) => {
        if (seat['id'] == action['id']) {
          if (seat['free']) {
            trueSeatsPalBaj.push({ ...seat,
              free: false,
              color: 'darkseagreen'
            });
          } else {
            trueSeatsPalBaj.push({ ...seat,
              free: true,
              color: 'red'
            });
          }
        } else {
          trueSeatsPalBaj.push({ ...seat
          });
        }
      });
      return { ...state,
        seatsPalBaj: trueSeatsPalBaj
      };
      case 'CHOOSEPLA':
      state['seatsPla'].map((seat) => {
        if (seat['id'] == action['id']) {
          if (seat['free']) {
            trueSeatsPla.push({ ...seat,
              free: false,
              color: 'darkseagreen'
            });
          } else {
            trueSeatsPla.push({ ...seat,
              free: true,
              color: 'red'
            });
          }
        } else {
          trueSeatsPla.push({ ...seat
          });
        }
      });
      return { ...state,
        seatsPla: trueSeatsPla
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
      case 'ZOOM':
      if (document.getElementById('div-cazuela').style.transform == 'scale(1.0)') {
		    document.getElementById('div-cazuela').style.transform = 'scale(2.2)';
		} else {
			document.getElementById('div-cazuela').style.transform = 'scale(1.0)'
		}
      default:
        return state;
    }
  };

export default Reducer;