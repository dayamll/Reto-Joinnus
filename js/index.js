var jsonEvent = '{ ' +
  ' "id": "T437-0001"' +
  ',"date": "2017-03-28"' +
  ',"time": "19:00"' +
  ',"currency": "€"' +
  ',"config": {' +
  ' "title": "CACT"' +
  ',"size" : 2325' +
  ',"origin" : { "x" : 0, "y" : 0 }' +
  ',"zoom": 0.25' +
  ',"seat_radius": 45' +
  '}' +
  ',"tickets" : {' +
  ' "1" : { "name" : "Adulto", "price" : 30 }' +
  ',"2" : { "name" : "Niño", "price" : 20 }' +
  ',"3" : { "name" : "VIP", "price" : 50 } ' +
  ',"4" : { "name" : "Bono", "price" : 15 } ' +
  '}' +
  ',"zones": {' +
  ' "A" : { "name" : "Cazuela", "color" : "green-light", "tickets" : [ 3 ] }' +
  ',"B": { "name" : "Cazuela", "color" : "green-light", "tickets" : [ 1,2 ] }' +
  ',"C": { "name" : "Galeria", "color" : "gold-rod", "tickets" : [ 1,2,4 ] }' +
  ',"D": { "name" : "Palcos", "color" : "green-light", "tickets" : [ 4 ] } }' +
  ',"seats": [ ' +
  ' { "id" : "A-1-1", "zone":"A", "row" : 1, "number" : 1, "status": 1, "position" : [950,400] } ' +
  ',{ "id" : "A-1-3", "zone":"A", "row" : 1, "number" : 3, "status": 1, "position" : [850,400] }' +
  ',{ "id" : "A-1-5", "zone":"A", "row" : 1, "number" : 5, "status": 1, "position" : [750,400] }' +
  ',{ "id" : "A-1-7", "zone":"A", "row" : 1, "number" : 7, "status": 1, "position" : [650,400] }' +
  ',{ "id" : "A-1-9", "zone":"A", "row" : 1, "number" : 9, "status": 0, "position" : [550,400] }' +
  ',{ "id" : "A-1-11", "zone":"A", "row" : 1, "number" : 11, "status": 0, "position" : [450,400] }' +
  ',{ "id" : "A-1-13", "zone":"A", "row" : 1, "number" : 13, "status": 0, "position" : [350,400] } ' +
  ',{ "id" : "A-1-15", "zone":"A", "row" : 1, "number" : 15, "status": 0, "position" : [250,400] }' +
  ',{ "id" : "A-1-17", "zone":"A", "row" : 1, "number" : 17, "status": 0, "position" : [150,400] }' +
  ',{ "id" : "A-1-19", "zone":"A", "row" : 1, "number" : 19, "status": 0, "position" : [50,400] }' +
  ',{ "id" : "A-1-21", "zone":"A", "row" : 1, "number" : 21, "status": 0, "position" : [-50,400] }' +
  ',{ "id" : "A-1-23", "zone":"A", "row" : 1, "number" : 23, "status": 0, "position" : [-150,400] }' +
  ',{ "id" : "A-1-25", "zone":"A", "row" : 1, "number" : 23, "status": 0, "position" : [-250,400] }' +
  ',{ "id" : "A-1-27", "zone":"A", "row" : 1, "number" : 23, "status": 0, "position" : [-350,400] }' +
  ',{ "id" : "A-1-29", "zone":"A", "row" : 1, "number" : 23, "status": 0, "position" : [-450,400] }' +

  ',{ "id" : "A-1-2", "zone":"A", "row" : 1, "number" : 2, "status": 1, "position" : [1100,400] } ' +
  ',{ "id" : "A-1-4", "zone":"A", "row" : 1, "number" : 4, "status": 1, "position" : [1200,400] }' +
  ',{ "id" : "A-1-6", "zone":"A", "row" : 1, "number" : 6, "status": 1, "position" : [1300,400] }' +
  ',{ "id" : "A-1-8", "zone":"A", "row" : 1, "number" : 8, "status": 1, "position" : [1400,400] }' +
  ',{ "id" : "A-1-10", "zone":"A", "row" : 1, "number" : 10, "status": 0, "position" : [1500,400] }' +
  ',{ "id" : "A-1-12", "zone":"A", "row" : 1, "number" : 12, "status": 0, "position" : [1600,400] }' +
  ',{ "id" : "A-1-14", "zone":"A", "row" : 1, "number" : 14, "status": 1, "position" : [1700,400] } ' +
  ',{ "id" : "A-1-16", "zone":"A", "row" : 1, "number" : 16, "status": 1, "position" : [1800,400] }' +
  ',{ "id" : "A-1-18", "zone":"A", "row" : 1, "number" : 18, "status": 0, "position" : [1900,400] }' +
  ',{ "id" : "A-1-20", "zone":"A", "row" : 1, "number" : 20, "status": 0, "position" : [2000,400] }' +
  ',{ "id" : "A-1-22", "zone":"A", "row" : 1, "number" : 22, "status": 0, "position" : [2100,400] }' +
  ',{ "id" : "A-1-24", "zone":"A", "row" : 1, "number" : 24, "status": 0, "position" : [2200,400] }' +
  ',{ "id" : "A-1-26", "zone":"A", "row" : 1, "number" : 26, "status": 0, "position" : [2300,400] }' +
  ',{ "id" : "A-1-28", "zone":"A", "row" : 1, "number" : 28, "status": 0, "position" : [2400,400] }' +
  ',{ "id" : "A-1-30", "zone":"A", "row" : 1, "number" : 30, "status": 0, "position" : [2500,400] }' +
  ',{ "id" : "A-1-32", "zone":"A", "row" : 1, "number" : 32, "status": 0, "position" : [2600,400] }' +

  ', { "id" : "A-2-1", "zone":"A", "row" : 2, "number" : 1, "status": 0, "position" : [950,495] } ' +
  ',{ "id" : "A-2-3", "zone":"A", "row" : 2, "number" : 3, "status": 0, "position" : [850,495] }' +
  ',{ "id" : "A-2-5", "zone":"A", "row" : 2, "number" : 5, "status": 0, "position" : [750,495] }' +
  ',{ "id" : "A-2-7", "zone":"A", "row" : 2, "number" : 7, "status": 0, "position" : [650,495] }' +
  ',{ "id" : "A-2-9", "zone":"A", "row" : 2, "number" : 9, "status": 0, "position" : [550,495] }' +
  ',{ "id" : "A-2-11", "zone":"A", "row" : 2, "number" : 11, "status": 0, "position" : [450,495] }' +
  ',{ "id" : "A-2-13", "zone":"A", "row" : 2, "number" : 13, "status": 0, "position" : [350,495] } ' +
  ',{ "id" : "A-2-15", "zone":"A", "row" : 2, "number" : 15, "status": 0, "position" : [250,495] }' +
  ',{ "id" : "A-2-17", "zone":"A", "row" : 2, "number" : 17, "status": 0, "position" : [150,495] }' +
  ',{ "id" : "A-2-19", "zone":"A", "row" : 2, "number" : 19, "status": 0, "position" : [50,495] }' +
  ',{ "id" : "A-2-21", "zone":"A", "row" : 2, "number" : 21, "status": 0, "position" : [-50,495] }' +
  ',{ "id" : "A-2-23", "zone":"A", "row" : 2, "number" : 23, "status": 0, "position" : [-150,495] }' +

  ',{ "id" : "A-2-2", "zone":"A", "row" : 2, "number" : 2, "status": 0, "position" : [1100,495] } ' +
  ',{ "id" : "A-2-4", "zone":"A", "row" : 2, "number" : 4, "status": 0, "position" : [1200,495] }' +
  ',{ "id" : "A-2-6", "zone":"A", "row" : 2, "number" : 6, "status": 0, "position" : [1300,495] }' +
  ',{ "id" : "A-2-8", "zone":"A", "row" : 2, "number" : 8, "status": 0, "position" : [1400,495] }' +
  ',{ "id" : "A-2-10", "zone":"A", "row" : 2, "number" : 10, "status": 0, "position" : [1500,495] }' +
  ',{ "id" : "A-2-12", "zone":"A", "row" : 2, "number" : 12, "status": 0, "position" : [1600,495] }' +
  ',{ "id" : "A-2-14", "zone":"A", "row" : 2, "number" : 14, "status": 0, "position" : [1700,495] } ' +
  ',{ "id" : "A-2-16", "zone":"A", "row" : 2, "number" : 16, "status": 0, "position" : [1800,495] }' +
  ',{ "id" : "A-2-18", "zone":"A", "row" : 2, "number" : 18, "status": 0, "position" : [1900,495] }' +
  ',{ "id" : "A-2-20", "zone":"A", "row" : 2, "number" : 20, "status": 0, "position" : [2000,495] }' +
  ',{ "id" : "A-2-22", "zone":"A", "row" : 2, "number" : 22, "status": 0, "position" : [2100,495] }' +
  ',{ "id" : "A-2-24", "zone":"A", "row" : 2, "number" : 24, "status": 0, "position" : [2200,495] }' +
  ',{ "id" : "A-2-26", "zone":"A", "row" : 2, "number" : 26, "status": 0, "position" : [2300,495] }' +
  ',{ "id" : "A-2-28", "zone":"A", "row" : 2, "number" : 28, "status": 0, "position" : [2400,495] }' +
  ',{ "id" : "A-2-30", "zone":"A", "row" : 2, "number" : 30, "status": 0, "position" : [2500,495] }' +
  ',{ "id" : "D-2-32", "zone":"D", "row" : 2, "number" : 32, "status": 0, "position" : [2600,495] }' +
  ',{ "id" : "D-2-34", "zone":"D", "row" : 2, "number" : 34, "status": 0, "position" : [2700,495] }' +
  ',{ "id" : "D-2-36", "zone":"D", "row" : 2, "number" : 36, "status": 0, "position" : [2800,495] }' +
  ',{ "id" : "D-2-38", "zone":"D", "row" : 2, "number" : 38, "status": 0, "position" : [2900,495] }' +

  ', { "id" : "A-3-1", "zone":"A", "row" : 3, "number" : 1, "status": 0, "position" : [950,580] } ' +
  ',{ "id" : "A-3-3", "zone":"A", "row" : 3, "number" : 3, "status": 0, "position" : [850,580] }' +
  ',{ "id" : "A-3-5", "zone":"A", "row" : 3, "number" : 5, "status": 0, "position" : [750,580] }' +
  ',{ "id" : "A-3-7", "zone":"A", "row" : 3, "number" : 7, "status": 0, "position" : [650,580] }' +
  ',{ "id" : "A-3-9", "zone":"A", "row" : 3, "number" : 9, "status": 0, "position" : [550,580] }' +
  ',{ "id" : "A-3-11", "zone":"A", "row" : 3, "number" : 11, "status": 0, "position" : [450,580] }' +
  ',{ "id" : "A-3-13", "zone":"A", "row" : 3, "number" : 13, "status": 0, "position" : [350,580] } ' +
  ',{ "id" : "A-3-15", "zone":"A", "row" : 3, "number" : 15, "status": 0, "position" : [250,580] }' +
  ',{ "id" : "A-3-17", "zone":"A", "row" : 3, "number" : 17, "status": 0, "position" : [150,580] }' +
  ',{ "id" : "A-3-19", "zone":"A", "row" : 3, "number" : 19, "status": 0, "position" : [50,580] }' +
  ',{ "id" : "A-3-21", "zone":"A", "row" : 3, "number" : 21, "status": 0, "position" : [-50,580] }' +
  ',{ "id" : "A-3-23", "zone":"A", "row" : 3, "number" : 23, "status": 0, "position" : [-150,580] }' +
  ',{ "id" : "A-3-25", "zone":"A", "row" : 3, "number" : 25, "status": 0, "position" : [-250,580] }' +

  ',{ "id" : "A-3-2", "zone":"A", "row" : 3, "number" : 2, "status": 0, "position" : [1100,580] } ' +
  ',{ "id" : "A-3-4", "zone":"A", "row" : 3, "number" : 4, "status": 0, "position" : [1200,580] }' +
  ',{ "id" : "A-3-6", "zone":"A", "row" : 3, "number" : 6, "status": 0, "position" : [1300,580] }' +
  ',{ "id" : "A-3-8", "zone":"A", "row" : 3, "number" : 8, "status": 0, "position" : [1400,580] }' +
  ',{ "id" : "A-3-10", "zone":"A", "row" : 3, "number" : 10, "status": 0, "position" : [1500,580] }' +
  ',{ "id" : "A-3-12", "zone":"A", "row" : 3, "number" : 12, "status": 0, "position" : [1600,580] }' +
  ',{ "id" : "A-3-14", "zone":"A", "row" : 3, "number" : 14, "status": 0, "position" : [1700,580] } ' +
  ',{ "id" : "A-3-16", "zone":"A", "row" : 3, "number" : 16, "status": 0, "position" : [1800,580] }' +
  ',{ "id" : "A-3-18", "zone":"A", "row" : 3, "number" : 18, "status": 0, "position" : [1900,580] }' +
  ',{ "id" : "A-3-20", "zone":"A", "row" : 3, "number" : 20, "status": 0, "position" : [2000,580] }' +
  ',{ "id" : "A-3-22", "zone":"A", "row" : 3, "number" : 22, "status": 0, "position" : [2100,580] }' +
  ',{ "id" : "A-3-24", "zone":"A", "row" : 3, "number" : 24, "status": 0, "position" : [2200,580] }' +
  ',{ "id" : "A-3-26", "zone":"A", "row" : 3, "number" : 26, "status": 0, "position" : [2300,580] }' +
  ',{ "id" : "A-3-28", "zone":"A", "row" : 3, "number" : 28, "status": 0, "position" : [2400,580] }' +
  ',{ "id" : "A-3-30", "zone":"A", "row" : 3, "number" : 30, "status": 0, "position" : [2500,580] }' +
  ',{ "id" : "D-3-32", "zone":"D", "row" : 3, "number" : 32, "status": 0, "position" : [2600,580] }' +
  ',{ "id" : "D-3-34", "zone":"D", "row" : 3, "number" : 34, "status": 0, "position" : [2700,580] }' +
  ',{ "id" : "D-3-36", "zone":"D", "row" : 3, "number" : 36, "status": 0, "position" : [2800,580] }' +

  ', { "id" : "B-4-1", "zone":"B", "row" : 4, "number" : 1, "status": 0, "position" : [950,670] } ' +
  ',{ "id" : "B-4-3", "zone":"B", "row" : 4, "number" : 3, "status": 0, "position" : [850,670] }' +
  ',{ "id" : "B-4-5", "zone":"B", "row" : 4, "number" : 5, "status": 0, "position" : [750,670] }' +
  ',{ "id" : "B-4-7", "zone":"B", "row" : 4, "number" : 7, "status": 0, "position" : [650,670] }' +
  ',{ "id" : "B-4-9", "zone":"B", "row" : 4, "number" : 9, "status": 0, "position" : [550,670] }' +
  ',{ "id" : "B-4-11", "zone":"B", "row" : 4, "number" : 11, "status": 0, "position" : [450,670] }' +
  ',{ "id" : "B-4-13", "zone":"B", "row" : 4, "number" : 13, "status": 0, "position" : [350,670] } ' +
  ',{ "id" : "B-4-15", "zone":"B", "row" : 4, "number" : 15, "status": 0, "position" : [250,670] }' +
  ',{ "id" : "B-4-17", "zone":"B", "row" : 4, "number" : 17, "status": 0, "position" : [150,670] }' +
  ',{ "id" : "B-4-19", "zone":"B", "row" : 4, "number" : 19, "status": 0, "position" : [50,670] }' +
  ',{ "id" : "B-4-21", "zone":"B", "row" : 4, "number" : 21, "status": 0, "position" : [-50,670] }' +
  ',{ "id" : "B-4-23", "zone":"B", "row" : 4, "number" : 23, "status": 0, "position" : [-150,670] }' +
  ',{ "id" : "B-4-25", "zone":"B", "row" : 4, "number" : 25, "status": 0, "position" : [-250,670] }' +

  ',{ "id" : "B-4-2", "zone":"B", "row" : 4, "number" : 2, "status": 0, "position" : [1100,670] } ' +
  ',{ "id" : "B-4-4", "zone":"B", "row" : 4, "number" : 4, "status": 0, "position" : [1200,670] }' +
  ',{ "id" : "B-4-6", "zone":"B", "row" : 4, "number" : 6, "status": 0, "position" : [1300,670] }' +
  ',{ "id" : "B-4-8", "zone":"B", "row" : 4, "number" : 8, "status": 0, "position" : [1400,670] }' +
  ',{ "id" : "B-4-10", "zone":"B", "row" : 4, "number" : 10, "status": 0, "position" : [1500,670] }' +
  ',{ "id" : "B-4-12", "zone":"B", "row" : 4, "number" : 12, "status": 0, "position" : [1600,670] }' +
  ',{ "id" : "B-4-14", "zone":"B", "row" : 4, "number" : 14, "status": 1, "position" : [1700,670] } ' +
  ',{ "id" : "B-4-16", "zone":"B", "row" : 4, "number" : 16, "status": 1, "position" : [1800,670] }' +
  ',{ "id" : "B-4-18", "zone":"B", "row" : 4, "number" : 18, "status": 1, "position" : [1900,670] }' +
  ',{ "id" : "B-4-20", "zone":"B", "row" : 4, "number" : 20, "status": 1, "position" : [2100,670] }' +
  ',{ "id" : "B-4-22", "zone":"B", "row" : 4, "number" : 22, "status": 1, "position" : [2200,670] }' +
  ',{ "id" : "B-4-24", "zone":"B", "row" : 4, "number" : 24, "status": 1, "position" : [2300,670] }' +
  ',{ "id" : "B-4-26", "zone":"B", "row" : 4, "number" : 26, "status": 0, "position" : [2400,670] }' +
  ',{ "id" : "B-4-28", "zone":"B", "row" : 4, "number" : 28, "status": 0, "position" : [2500,670] }' +
  ',{ "id" : "B-4-30", "zone":"B", "row" : 4, "number" : 30, "status": 0, "position" : [2600,670] }' +
  ',{ "id" : "D-4-32", "zone":"D", "row" : 4, "number" : 32, "status": 0, "position" : [2700,670] }' +
  ',{ "id" : "D-4-34", "zone":"D", "row" : 4, "number" : 34, "status": 0, "position" : [2800,670] }' +
  ',{ "id" : "D-4-36", "zone":"D", "row" : 4, "number" : 36, "status": 0, "position" : [2900,670] }' +
  ',{ "id" : "D-4-38", "zone":"D", "row" : 4, "number" : 38, "status": 0, "position" : [3000,670] }' +

  ', { "id" : "B-6-1", "zone":"B", "row" : 6, "number" : 1, "status": 0, "position" : [950,830] } ' +
  ',{ "id" : "B-6-3", "zone":"B", "row" : 6, "number" : 3, "status": 0, "position" : [850,830] }' +
  ',{ "id" : "B-6-6", "zone":"B", "row" : 6, "number" : 5, "status": 0, "position" : [750,830] }' +
  ',{ "id" : "B-6-7", "zone":"B", "row" : 6, "number" : 7, "status": 0, "position" : [650,830] }' +
  ',{ "id" : "B-6-9", "zone":"B", "row" : 6, "number" : 9, "status": 0, "position" : [550,830] }' +
  ',{ "id" : "B-6-11", "zone":"B", "row" : 6, "number" : 11, "status": 0, "position" : [450,830] }' +
  ',{ "id" : "B-6-13", "zone":"B", "row" : 6, "number" : 13, "status": 1, "position" : [350,830] } ' +
  ',{ "id" : "B-6-15", "zone":"B", "row" : 6, "number" : 15, "status": 1, "position" : [250,830] }' +
  ',{ "id" : "B-6-17", "zone":"B", "row" : 6, "number" : 17, "status": 1, "position" : [150,830] }' +
  ',{ "id" : "B-6-19", "zone":"B", "row" : 6, "number" : 19, "status": 0, "position" : [50,830] }' +
  ',{ "id" : "B-6-21", "zone":"B", "row" : 6, "number" : 21, "status": 0, "position" : [-50,830] }' +
  ',{ "id" : "B-6-23", "zone":"B", "row" : 6, "number" : 23, "status": 0, "position" : [-150,830] }' +
  ',{ "id" : "B-6-25", "zone":"B", "row" : 6, "number" : 25, "status": 0, "position" : [-250,830] }' +
  ',{ "id" : "B-6-27", "zone":"B", "row" : 6, "number" : 27, "status": 0, "position" : [-350,830] }' +

  ',{ "id" : "B-6-2", "zone":"B", "row" : 6, "number" : 2, "status": 0, "position" : [1100,830] } ' +
  ',{ "id" : "B-6-4", "zone":"B", "row" : 6, "number" : 4, "status": 0, "position" : [1200,830] }' +
  ',{ "id" : "B-6-6", "zone":"B", "row" : 6, "number" : 6, "status": 0, "position" : [1300,830] }' +
  ',{ "id" : "B-6-8", "zone":"B", "row" : 6, "number" : 8, "status": 0, "position" : [1400,830] }' +
  ',{ "id" : "B-6-10", "zone":"B", "row" : 6, "number" : 10, "status": 0, "position" : [1500,830] }' +
  ',{ "id" : "B-6-12", "zone":"B", "row" : 6, "number" : 12, "status": 0, "position" : [1600,830] }' +
  ',{ "id" : "B-6-14", "zone":"B", "row" : 6, "number" : 14, "status": 0, "position" : [1700,830] } ' +
  ',{ "id" : "B-6-16", "zone":"B", "row" : 6, "number" : 16, "status": 0, "position" : [1800,830] }' +
  ',{ "id" : "B-6-18", "zone":"B", "row" : 6, "number" : 18, "status": 0, "position" : [1900,830] }' +
  ',{ "id" : "B-6-20", "zone":"B", "row" : 6, "number" : 20, "status": 0, "position" : [2000,830] }' +
  ',{ "id" : "B-6-22", "zone":"B", "row" : 6, "number" : 22, "status": 0, "position" : [2100,830] }' +
  ',{ "id" : "B-6-24", "zone":"B", "row" : 6, "number" : 24, "status": 0, "position" : [2200,830] }' +
  ',{ "id" : "B-6-26", "zone":"B", "row" : 6, "number" : 26, "status": 0, "position" : [2300,830] }' +
  ',{ "id" : "B-6-28", "zone":"B", "row" : 6, "number" : 28, "status": 0, "position" : [2400,830] }' +
  ',{ "id" : "B-6-30", "zone":"B", "row" : 6, "number" : 30, "status": 0, "position" : [2500,830] }' +
  ',{ "id" : "B-6-32", "zone":"B", "row" : 6, "number" : 32, "status": 0, "position" : [2600,830] }' +
  ',{ "id" : "B-6-34", "zone":"B", "row" : 6, "number" : 34, "status": 0, "position" : [2700,830] }' +
  ',{ "id" : "B-6-36", "zone":"B", "row" : 6, "number" : 36, "status": 0, "position" : [2800,775] }' +

  ', { "id" : "B-7-1", "zone":"B", "row" : 7, "number" : 1, "status": 0, "position" : [950,905] } ' +
  ',{ "id" : "B-7-3", "zone":"B", "row" : 7, "number" : 3, "status": 0, "position" : [905,905] }' +
  ',{ "id" : "B-7-6", "zone":"B", "row" : 7, "number" : 5, "status": 0, "position" : [750,905] }' +
  ',{ "id" : "B-7-7", "zone":"B", "row" : 7, "number" : 7, "status": 0, "position" : [650,905] }' +
  ',{ "id" : "B-7-9", "zone":"B", "row" : 7, "number" : 9, "status": 0, "position" : [550,905] }' +
  ',{ "id" : "B-7-11", "zone":"B", "row" : 7, "number" : 11, "status": 0, "position" : [450,905] }' +
  ',{ "id" : "B-7-13", "zone":"B", "row" : 7, "number" : 13, "status": 0, "position" : [350,905] } ' +
  ',{ "id" : "B-7-15", "zone":"B", "row" : 7, "number" : 15, "status": 0, "position" : [250,905] }' +
  ',{ "id" : "B-7-17", "zone":"B", "row" : 7, "number" : 17, "status": 0, "position" : [150,905] }' +
  ',{ "id" : "B-7-19", "zone":"B", "row" : 7, "number" : 19, "status": 0, "position" : [50,905] }' +
  ',{ "id" : "B-7-21", "zone":"B", "row" : 7, "number" : 21, "status": 0, "position" : [-50,905] }' +
  ',{ "id" : "B-7-23", "zone":"B", "row" : 7, "number" : 23, "status": 0, "position" : [-150,905] }' +
  ',{ "id" : "B-7-25", "zone":"B", "row" : 7, "number" : 25, "status": 0, "position" : [-250,905] }' +
  ',{ "id" : "B-7-27", "zone":"B", "row" : 7, "number" : 27, "status": 0, "position" : [-350,905] }' +
  ',{ "id" : "B-7-29", "zone":"B", "row" : 7, "number" : 29, "status": 0, "position" : [-450,905] }' +

  ',{ "id" : "B-7-2", "zone":"B", "row" : 7, "number" : 2, "status": 0, "position" : [1100,905] } ' +
  ',{ "id" : "B-7-4", "zone":"B", "row" : 7, "number" : 4, "status": 0, "position" : [1200,905] }' +
  ',{ "id" : "B-7-6", "zone":"B", "row" : 7, "number" : 6, "status": 0, "position" : [1300,905] }' +
  ',{ "id" : "B-7-8", "zone":"B", "row" : 7, "number" : 8, "status": 0, "position" : [1400,905] }' +
  ',{ "id" : "B-7-10", "zone":"B", "row" : 7, "number" : 10, "status": 0, "position" : [1500,905] }' +
  ',{ "id" : "B-7-12", "zone":"B", "row" : 7, "number" : 12, "status": 0, "position" : [1600,905] }' +
  ',{ "id" : "B-7-14", "zone":"B", "row" : 7, "number" : 14, "status": 0, "position" : [1700,905] } ' +
  ',{ "id" : "B-7-16", "zone":"B", "row" : 7, "number" : 16, "status": 0, "position" : [1800,905] }' +
  ',{ "id" : "B-7-18", "zone":"B", "row" : 7, "number" : 18, "status": 0, "position" : [1900,905] }' +
  ',{ "id" : "B-7-20", "zone":"B", "row" : 7, "number" : 20, "status": 0, "position" : [2000,905] }' +
  ',{ "id" : "B-7-22", "zone":"B", "row" : 7, "number" : 22, "status": 0, "position" : [2100,905] }' +
  ',{ "id" : "B-7-24", "zone":"B", "row" : 7, "number" : 24, "status": 0, "position" : [2200,905] }' +
  ',{ "id" : "B-7-26", "zone":"B", "row" : 7, "number" : 26, "status": 0, "position" : [2300,905] }' +
  ',{ "id" : "B-7-28", "zone":"B", "row" : 7, "number" : 28, "status": 0, "position" : [2400,905] }' +
  ',{ "id" : "B-7-30", "zone":"B", "row" : 7, "number" : 30, "status": 0, "position" : [2500,905] }' +
  ',{ "id" : "B-7-32", "zone":"B", "row" : 7, "number" : 32, "status": 0, "position" : [2600,905] }' +
  ',{ "id" : "B-7-34", "zone":"B", "row" : 7, "number" : 34, "status": 0, "position" : [2700,905] }' +
  ',{ "id" : "B-7-36", "zone":"B", "row" : 7, "number" : 36, "status": 0, "position" : [2800,905] }' +

  ', { "id" : "B-8-1", "zone":"B", "row" : 8, "number" : 1, "status": 0, "position" : [950,980] } ' +
  ',{ "id" : "B-8-3", "zone":"B", "row" : 8, "number" : 3, "status": 0, "position" : [905,980] }' +
  ',{ "id" : "B-8-6", "zone":"B", "row" : 8, "number" : 5, "status": 0, "position" : [750,980] }' +
  ',{ "id" : "B-8-7", "zone":"B", "row" : 8, "number" : 7, "status": 0, "position" : [650,980] }' +
  ',{ "id" : "B-8-9", "zone":"B", "row" : 8, "number" : 9, "status": 0, "position" : [550,980] }' +
  ',{ "id" : "B-8-11", "zone":"B", "row" : 8, "number" : 11, "status": 0, "position" : [450,980] }' +
  ',{ "id" : "B-8-13", "zone":"B", "row" : 8, "number" : 13, "status": 0, "position" : [350,980] } ' +
  ',{ "id" : "B-8-15", "zone":"B", "row" : 8, "number" : 15, "status": 0, "position" : [250,980] }' +
  ',{ "id" : "B-8-17", "zone":"B", "row" : 8, "number" : 17, "status": 1, "position" : [150,980] }' +
  ',{ "id" : "B-8-19", "zone":"B", "row" : 8, "number" : 19, "status": 0, "position" : [50,980] }' +
  ',{ "id" : "B-8-21", "zone":"B", "row" : 8, "number" : 21, "status": 0, "position" : [-50,980] }' +
  ',{ "id" : "B-8-23", "zone":"B", "row" : 8, "number" : 23, "status": 0, "position" : [-150,980] }' +
  ',{ "id" : "B-8-25", "zone":"B", "row" : 8, "number" : 25, "status": 0, "position" : [-250,980] }' +
  ',{ "id" : "B-8-27", "zone":"B", "row" : 8, "number" : 27, "status": 0, "position" : [-350,980] }' +

  ',{ "id" : "B-8-2", "zone":"B", "row" : 8, "number" : 2, "status": 0, "position" : [1100,980] } ' +
  ',{ "id" : "B-8-4", "zone":"B", "row" : 8, "number" : 4, "status": 0, "position" : [1200,980] }' +
  ',{ "id" : "B-8-6", "zone":"B", "row" : 8, "number" : 6, "status": 0, "position" : [1300,980] }' +
  ',{ "id" : "B-8-8", "zone":"B", "row" : 8, "number" : 8, "status": 0, "position" : [1400,980] }' +
  ',{ "id" : "B-8-10", "zone":"B", "row" : 8, "number" : 10, "status": 0, "position" : [1500,980] }' +
  ',{ "id" : "B-8-12", "zone":"B", "row" : 8, "number" : 12, "status": 0, "position" : [1600,980] }' +
  ',{ "id" : "B-8-14", "zone":"B", "row" : 8, "number" : 14, "status": 0, "position" : [1700,980] } ' +
  ',{ "id" : "B-8-16", "zone":"B", "row" : 8, "number" : 16, "status": 0, "position" : [1800,980] }' +
  ',{ "id" : "B-8-18", "zone":"B", "row" : 8, "number" : 18, "status": 0, "position" : [1900,980] }' +
  ',{ "id" : "B-8-20", "zone":"B", "row" : 8, "number" : 20, "status": 0, "position" : [2000,980] }' +
  ',{ "id" : "B-8-22", "zone":"B", "row" : 8, "number" : 22, "status": 0, "position" : [2100,980] }' +
  ',{ "id" : "B-8-24", "zone":"B", "row" : 8, "number" : 24, "status": 0, "position" : [2200,980] }' +
  ',{ "id" : "B-8-26", "zone":"B", "row" : 8, "number" : 26, "status": 0, "position" : [2300,980] }' +
  ',{ "id" : "B-8-28", "zone":"B", "row" : 8, "number" : 28, "status": 0, "position" : [2400,980] }' +
  ',{ "id" : "B-8-30", "zone":"B", "row" : 8, "number" : 30, "status": 0, "position" : [2500,980] }' +

  ', { "id" : "B-9-1", "zone":"B", "row" : 9, "number" : 1, "status": 0, "position" : [950,1035] } ' +
  ',{ "id" : "B-9-3", "zone":"B", "row" : 9, "number" : 3, "status": 0, "position" : [905,1035] }' +
  ',{ "id" : "B-9-6", "zone":"B", "row" : 9, "number" : 5, "status": 0, "position" : [750,1035] }' +
  ',{ "id" : "B-9-7", "zone":"B", "row" : 9, "number" : 7, "status": 0, "position" : [650,1035] }' +
  ',{ "id" : "B-9-9", "zone":"B", "row" : 9, "number" : 9, "status": 0, "position" : [550,1035] }' +
  ',{ "id" : "B-9-11", "zone":"B", "row" : 9, "number" : 11, "status": 0, "position" : [450,1035] }' +
  ',{ "id" : "B-9-13", "zone":"B", "row" : 9, "number" : 13, "status": 0, "position" : [350,1035] } ' +
  ',{ "id" : "B-9-15", "zone":"B", "row" : 9, "number" : 15, "status": 0, "position" : [250,1035] }' +
  ',{ "id" : "B-9-17", "zone":"B", "row" : 9, "number" : 17, "status": 0, "position" : [150,1035] }' +
  ',{ "id" : "B-9-19", "zone":"B", "row" : 9, "number" : 19, "status": 0, "position" : [50,1035] }' +
  ',{ "id" : "B-9-21", "zone":"B", "row" : 9, "number" : 21, "status": 0, "position" : [-50,1035] }' +
  ',{ "id" : "B-9-23", "zone":"B", "row" : 9, "number" : 23, "status": 0, "position" : [-150,1035] }' +
  ',{ "id" : "B-9-25", "zone":"B", "row" : 9, "number" : 25, "status": 0, "position" : [-250,1035] }' +
  ',{ "id" : "B-9-27", "zone":"B", "row" : 9, "number" : 27, "status": 0, "position" : [-350,1035] }' +
  ',{ "id" : "B-9-29", "zone":"B", "row" : 9, "number" : 29, "status": 0, "position" : [-450,1035] }' +
  ',{ "id" : "B-9-30", "zone":"B", "row" : 9, "number" : 30, "status": 0, "position" : [-550,1035] }' +

  ',{ "id" : "B-9-2", "zone":"B", "row" : 9, "number" : 2, "status": 0, "position" : [1100,1035] } ' +
  ',{ "id" : "B-9-4", "zone":"B", "row" : 9, "number" : 4, "status": 0, "position" : [1200,1035] }' +
  ',{ "id" : "B-9-6", "zone":"B", "row" : 9, "number" : 6, "status": 0, "position" : [1300,1035] }' +
  ',{ "id" : "B-9-8", "zone":"B", "row" : 9, "number" : 8, "status": 0, "position" : [1400,1035] }' +
  ',{ "id" : "B-9-10", "zone":"B", "row" : 9, "number" : 10, "status": 1, "position" : [1500,1035] }' +
  ',{ "id" : "B-9-12", "zone":"B", "row" : 9, "number" : 12, "status": 1, "position" : [1600,1035] }' +
  ',{ "id" : "B-9-14", "zone":"B", "row" : 9, "number" : 14, "status": 1, "position" : [1700,1035] } ' +
  ',{ "id" : "B-9-16", "zone":"B", "row" : 9, "number" : 16, "status": 1, "position" : [1800,1035] }' +
  ',{ "id" : "B-9-18", "zone":"B", "row" : 9, "number" : 18, "status": 1, "position" : [1900,1035] }' +
  ',{ "id" : "B-9-20", "zone":"B", "row" : 9, "number" : 20, "status": 1, "position" : [2000,1035] }' +
  ',{ "id" : "B-9-22", "zone":"B", "row" : 9, "number" : 22, "status": 0, "position" : [2100,1035] }' +
  ',{ "id" : "B-9-24", "zone":"B", "row" : 9, "number" : 24, "status": 0, "position" : [2200,1035] }' +
  ',{ "id" : "B-9-26", "zone":"B", "row" : 9, "number" : 26, "status": 0, "position" : [2300,1035] }' +
  ',{ "id" : "B-9-28", "zone":"B", "row" : 9, "number" : 28, "status": 0, "position" : [2400,1035] }' +
  ',{ "id" : "B-9-30", "zone":"B", "row" : 9, "number" : 30, "status": 0, "position" : [2500,1035] }' +

  ', { "id" : "B-10-1", "zone":"B", "row" : 10, "number" : 1, "status": 0, "position" : [950,1075] } ' +
  ',{ "id" : "B-10-3", "zone":"B", "row" : 10, "number" : 3, "status": 0, "position" : [905,1075] }' +
  ',{ "id" : "B-10-6", "zone":"B", "row" : 10, "number" : 5, "status": 0, "position" : [750,1075] }' +
  ',{ "id" : "B-10-7", "zone":"B", "row" : 10, "number" : 7, "status": 0, "position" : [650,1075] }' +
  ',{ "id" : "B-10-9", "zone":"B", "row" : 10, "number" : 9, "status": 0, "position" : [550,1075] }' +
  ',{ "id" : "B-10-11", "zone":"B", "row" : 10, "number" : 11, "status": 1, "position" : [450,1075] }' +
  ',{ "id" : "B-10-13", "zone":"B", "row" : 10, "number" : 13, "status": 1, "position" : [350,1075] } ' +
  ',{ "id" : "B-10-15", "zone":"B", "row" : 10, "number" : 15, "status": 1, "position" : [250,1075] }' +
  ',{ "id" : "B-10-17", "zone":"B", "row" : 10, "number" : 17, "status": 0, "position" : [150,1075] }' +
  ',{ "id" : "B-10-19", "zone":"B", "row" : 10, "number" : 19, "status": 0, "position" : [50,1075] }' +
  ',{ "id" : "B-10-21", "zone":"B", "row" : 10, "number" : 21, "status": 0, "position" : [-50,1075] }' +
  ',{ "id" : "B-10-23", "zone":"B", "row" : 10, "number" : 23, "status": 0, "position" : [-150,1075] }' +
  ',{ "id" : "B-10-25", "zone":"B", "row" : 10, "number" : 25, "status": 0, "position" : [-250,1075] }' +

  ',{ "id" : "B-10-2", "zone":"B", "row" : 10, "number" : 2, "status": 0, "position" : [1100,1075] } ' +
  ',{ "id" : "B-10-4", "zone":"B", "row" : 10, "number" : 4, "status": 0, "position" : [1200,1075] }' +
  ',{ "id" : "B-10-6", "zone":"B", "row" : 10, "number" : 6, "status": 0, "position" : [1300,1075] }' +
  ',{ "id" : "B-10-8", "zone":"B", "row" : 10, "number" : 8, "status": 0, "position" : [1400,1075] }' +
  ',{ "id" : "B-10-10", "zone":"B", "row" : 10, "number" : 10, "status": 0, "position" : [1500,1075] }' +
  ',{ "id" : "B-10-12", "zone":"B", "row" : 10, "number" : 12, "status": 0, "position" : [1600,1075] }' +
  ',{ "id" : "B-10-14", "zone":"B", "row" : 10, "number" : 14, "status": 0, "position" : [1700,1075] } ' +
  ',{ "id" : "B-10-16", "zone":"B", "row" : 10, "number" : 16, "status": 0, "position" : [1800,1075] }' +
  ',{ "id" : "B-10-18", "zone":"B", "row" : 10, "number" : 18, "status": 0, "position" : [1900,1075] }' +
  ',{ "id" : "B-10-20", "zone":"B", "row" : 10, "number" : 20, "status": 0, "position" : [2100,1075] }' +
  ',{ "id" : "B-10-22", "zone":"B", "row" : 10, "number" : 22, "status": 0, "position" : [2200,1075] }' +
  ',{ "id" : "B-10-24", "zone":"B", "row" : 10, "number" : 24, "status": 0, "position" : [2300,1075] }' +
  ',{ "id" : "B-10-26", "zone":"B", "row" : 10, "number" : 26, "status": 1, "position" : [2400,1075] }' +
  ',{ "id" : "B-10-28", "zone":"B", "row" : 10, "number" : 28, "status": 1, "position" : [2500,1075] }' +
  ',{ "id" : "B-10-30", "zone":"B", "row" : 10, "number" : 30, "status": 0, "position" : [2600,1075] }' +
  ',{ "id" : "B-10-32", "zone":"B", "row" : 10, "number" : 32, "status": 0, "position" : [2700,1075] }' +

  ', { "id" : "B-11-1", "zone":"B", "row" : 11, "number" : 1, "status": 0, "position" : [950,1150] } ' +
  ',{ "id" : "B-11-3", "zone":"B", "row" : 11, "number" : 3, "status": 0, "position" : [850,1150] }' +
  ',{ "id" : "B-11-6", "zone":"B", "row" : 11, "number" : 5, "status": 0, "position" : [750,1150] }' +
  ',{ "id" : "B-11-7", "zone":"B", "row" : 11, "number" : 7, "status": 0, "position" : [650,1150] }' +
  ',{ "id" : "B-11-9", "zone":"B", "row" : 11, "number" : 9, "status": 0, "position" : [550,1150] }' +
  ',{ "id" : "B-11-11", "zone":"B", "row" : 11, "number" : 11, "status": 0, "position" : [450,1150] }' +
  ',{ "id" : "B-11-13", "zone":"B", "row" : 11, "number" : 13, "status": 1, "position" : [350,1150] } ' +
  ',{ "id" : "B-11-15", "zone":"B", "row" : 11, "number" : 15, "status": 0, "position" : [250,1150] }' +
  ',{ "id" : "B-11-17", "zone":"B", "row" : 11, "number" : 17, "status": 1, "position" : [150,1150] }' +
  ',{ "id" : "B-11-19", "zone":"B", "row" : 11, "number" : 19, "status": 1, "position" : [50,1150] }' +
  ',{ "id" : "B-11-21", "zone":"B", "row" : 11, "number" : 21, "status": 1, "position" : [-50,1150] }' +
  ',{ "id" : "B-11-23", "zone":"B", "row" : 11, "number" : 23, "status": 1, "position" : [-150,1150] }' +
  ',{ "id" : "B-11-25", "zone":"B", "row" : 11, "number" : 25, "status": 0, "position" : [-250,1150] }' +

  ',{ "id" : "B-11-2", "zone":"B", "row" : 11, "number" : 2, "status": 0, "position" : [1100,1150] } ' +
  ',{ "id" : "B-11-4", "zone":"B", "row" : 11, "number" : 4, "status": 0, "position" : [1200,1150] }' +
  ',{ "id" : "B-11-6", "zone":"B", "row" : 11, "number" : 6, "status": 0, "position" : [1300,1150] }' +
  ',{ "id" : "B-11-8", "zone":"B", "row" : 11, "number" : 8, "status": 0, "position" : [1400,1150] }' +
  ',{ "id" : "B-11-10", "zone":"B", "row" : 11, "number" : 10, "status": 0, "position" : [1500,1150] }' +
  ',{ "id" : "B-11-12", "zone":"B", "row" : 11, "number" : 12, "status": 0, "position" : [1600,1150] }' +
  ',{ "id" : "B-11-14", "zone":"B", "row" : 11, "number" : 14, "status": 0, "position" : [1700,1150] } ' +
  ',{ "id" : "B-11-16", "zone":"B", "row" : 11, "number" : 16, "status": 0, "position" : [1800,1150] }' +
  ',{ "id" : "B-11-18", "zone":"B", "row" : 11, "number" : 18, "status": 0, "position" : [1900,1150] }' +
  ',{ "id" : "B-11-20", "zone":"B", "row" : 11, "number" : 20, "status": 0, "position" : [2000,1150] }' +
  ',{ "id" : "B-11-22", "zone":"B", "row" : 11, "number" : 22, "status": 0, "position" : [2100,1150] }' +
  ',{ "id" : "B-11-24", "zone":"B", "row" : 11, "number" : 24, "status": 0, "position" : [2200,1150] }' +
  ',{ "id" : "B-11-26", "zone":"B", "row" : 11, "number" : 26, "status": 0, "position" : [2300,1150] }' +
  ',{ "id" : "B-11-28", "zone":"B", "row" : 11, "number" : 28, "status": 0, "position" : [2400,1150] }' +
  ',{ "id" : "B-11-30", "zone":"B", "row" : 11, "number" : 30, "status": 0, "position" : [2500,1150] }' +

  ', { "id" : "B-12-1", "zone":"B", "row" : 12, "number" : 1, "status": 0, "position" : [950,1225] } ' +
  ',{ "id" : "B-12-3", "zone":"B", "row" : 12, "number" : 3, "status": 0, "position" : [850,1225] }' +
  ',{ "id" : "B-12-6", "zone":"B", "row" : 12, "number" : 5, "status": 0, "position" : [750,1225] }' +
  ',{ "id" : "B-12-7", "zone":"B", "row" : 12, "number" : 7, "status": 0, "position" : [650,1225] }' +
  ',{ "id" : "B-12-9", "zone":"B", "row" : 12, "number" : 9, "status": 0, "position" : [550,1225] }' +
  ',{ "id" : "B-12-11", "zone":"B", "row" : 12, "number" : 11, "status": 0, "position" : [450,1225] }' +
  ',{ "id" : "B-12-13", "zone":"B", "row" : 12, "number" : 13, "status": 0, "position" : [350,1225] } ' +
  ',{ "id" : "B-12-15", "zone":"B", "row" : 12, "number" : 15, "status": 0, "position" : [250,1225] }' +
  ',{ "id" : "B-12-17", "zone":"B", "row" : 12, "number" : 17, "status": 0, "position" : [150,1225] }' +
  ',{ "id" : "B-12-19", "zone":"B", "row" : 12, "number" : 19, "status": 0, "position" : [50,1225] }' +
  ',{ "id" : "B-12-21", "zone":"B", "row" : 12, "number" : 21, "status": 0, "position" : [-50,1225] }' +
  ',{ "id" : "B-12-23", "zone":"B", "row" : 12, "number" : 23, "status": 0, "position" : [-150,1225] }' +
  ',{ "id" : "B-12-25", "zone":"B", "row" : 12, "number" : 25, "status": 0, "position" : [-250,1225] }' +
  ',{ "id" : "B-12-27", "zone":"B", "row" : 12, "number" : 27, "status": 0, "position" : [-350,1225] }' +

  ',{ "id" : "B-12-2", "zone":"B", "row" : 12, "number" : 2, "status": 0, "position" : [1100,1225] } ' +
  ',{ "id" : "B-12-4", "zone":"B", "row" : 12, "number" : 4, "status": 0, "position" : [1200,1225] }' +
  ',{ "id" : "B-12-6", "zone":"B", "row" : 12, "number" : 6, "status": 0, "position" : [1300,1225] }' +
  ',{ "id" : "B-12-8", "zone":"B", "row" : 12, "number" : 8, "status": 0, "position" : [1400,1225] }' +
  ',{ "id" : "B-12-10", "zone":"B", "row" : 12, "number" : 10, "status": 0, "position" : [1500,1225] }' +
  ',{ "id" : "B-12-12", "zone":"B", "row" : 12, "number" : 12, "status": 0, "position" : [1600,1225] }' +
  ',{ "id" : "B-12-14", "zone":"B", "row" : 12, "number" : 14, "status": 0, "position" : [1700,1225] } ' +
  ',{ "id" : "B-12-16", "zone":"B", "row" : 12, "number" : 16, "status": 0, "position" : [1800,1225] }' +
  ',{ "id" : "B-12-18", "zone":"B", "row" : 12, "number" : 18, "status": 0, "position" : [1900,1225] }' +
  ',{ "id" : "B-12-20", "zone":"B", "row" : 12, "number" : 20, "status": 0, "position" : [2000,1225] }' +
  ',{ "id" : "B-12-22", "zone":"B", "row" : 12, "number" : 22, "status": 0, "position" : [2100,1225] }' +
  ',{ "id" : "B-12-24", "zone":"B", "row" : 12, "number" : 24, "status": 0, "position" : [2200,1225] }' +
  ',{ "id" : "B-12-26", "zone":"B", "row" : 12, "number" : 26, "status": 0, "position" : [2300,1225] }' +
  ',{ "id" : "B-12-28", "zone":"B", "row" : 12, "number" : 28, "status": 0, "position" : [2400,1225] }' +

  ', { "id" : "B-13-1", "zone":"B", "row" : 13, "number" : 1, "status": 1, "position" : [950,1300] } ' +
  ',{ "id" : "B-13-3", "zone":"B", "row" : 13, "number" : 3, "status": 1, "position" : [850,1300] }' +
  ',{ "id" : "B-13-6", "zone":"B", "row" : 13, "number" : 5, "status": 1, "position" : [750,1300] }' +
  ',{ "id" : "B-13-7", "zone":"B", "row" : 13, "number" : 7, "status": 1, "position" : [650,1300] }' +
  ',{ "id" : "B-13-9", "zone":"B", "row" : 13, "number" : 9, "status": 1, "position" : [550,1300] }' +
  ',{ "id" : "B-13-11", "zone":"B", "row" : 13, "number" : 11, "status": 0, "position" : [450,1300] }' +
  ',{ "id" : "B-13-13", "zone":"B", "row" : 13, "number" : 13, "status": 0, "position" : [350,1300] } ' +
  ',{ "id" : "B-13-15", "zone":"B", "row" : 13, "number" : 15, "status": 0, "position" : [250,1300] }' +
  ',{ "id" : "B-13-17", "zone":"B", "row" : 13, "number" : 17, "status": 1, "position" : [150,1300] }' +
  ',{ "id" : "B-13-19", "zone":"B", "row" : 13, "number" : 19, "status": 1, "position" : [50,1300] }' +
  ',{ "id" : "B-13-21", "zone":"B", "row" : 13, "number" : 21, "status": 1, "position" : [-50,1300] }' +
  ',{ "id" : "B-13-23", "zone":"B", "row" : 13, "number" : 23, "status": 0, "position" : [-150,1300] }' +
  ',{ "id" : "B-13-25", "zone":"B", "row" : 13, "number" : 25, "status": 0, "position" : [-250,1300] }' +
  ',{ "id" : "B-13-27", "zone":"B", "row" : 13, "number" : 27, "status": 0, "position" : [-350,1300] }' +

  ',{ "id" : "B-13-2", "zone":"B", "row" : 13, "number" : 2, "status": 0, "position" : [1100,1300] } ' +
  ',{ "id" : "B-13-4", "zone":"B", "row" : 13, "number" : 4, "status": 0, "position" : [1200,1300] }' +
  ',{ "id" : "B-13-6", "zone":"B", "row" : 13, "number" : 6, "status": 0, "position" : [1300,1300] }' +
  ',{ "id" : "B-13-8", "zone":"B", "row" : 13, "number" : 8, "status": 0, "position" : [1400,1300] }' +
  ',{ "id" : "B-13-10", "zone":"B", "row" : 13, "number" : 10, "status": 0, "position" : [1500,1300] }' +
  ',{ "id" : "B-13-12", "zone":"B", "row" : 13, "number" : 12, "status": 0, "position" : [1600,1300] }' +
  ',{ "id" : "B-13-14", "zone":"B", "row" : 13, "number" : 14, "status": 0, "position" : [1700,1300] } ' +
  ',{ "id" : "B-13-16", "zone":"B", "row" : 13, "number" : 16, "status": 0, "position" : [1800,1300] }' +
  ',{ "id" : "B-13-18", "zone":"B", "row" : 13, "number" : 18, "status": 0, "position" : [1900,1300] }' +
  ',{ "id" : "B-13-20", "zone":"B", "row" : 13, "number" : 20, "status": 0, "position" : [2000,1300] }' +
  ',{ "id" : "B-13-22", "zone":"B", "row" : 13, "number" : 22, "status": 0, "position" : [2100,1300] }' +
  ',{ "id" : "B-13-24", "zone":"B", "row" : 13, "number" : 24, "status": 0, "position" : [2200,1300] }' +
  ',{ "id" : "B-13-26", "zone":"B", "row" : 13, "number" : 26, "status": 0, "position" : [2300,1300] }' +
  ',{ "id" : "B-13-28", "zone":"B", "row" : 13, "number" : 28, "status": 0, "position" : [2400,1300] }' +

  ', { "id" : "B-14-1", "zone":"B", "row" : 14, "number" : 1, "status": 1, "position" : [950,1375] } ' +
  ',{ "id" : "B-14-3", "zone":"B", "row" : 14, "number" : 3, "status": 1, "position" : [850,1375] }' +
  ',{ "id" : "B-14-6", "zone":"B", "row" : 14, "number" : 5, "status": 1, "position" : [750,1375] }' +
  ',{ "id" : "B-14-7", "zone":"B", "row" : 14, "number" : 7, "status": 1, "position" : [650,1375] }' +
  ',{ "id" : "B-14-9", "zone":"B", "row" : 14, "number" : 9, "status": 1, "position" : [550,1375] }' +
  ',{ "id" : "B-14-11", "zone":"B", "row" : 14, "number" : 11, "status": 0, "position" : [450,1375] }' +
  ',{ "id" : "B-14-13", "zone":"B", "row" : 14, "number" : 13, "status": 0, "position" : [350,1375] } ' +
  ',{ "id" : "B-14-15", "zone":"B", "row" : 14, "number" : 15, "status": 0, "position" : [250,1375] }' +
  ',{ "id" : "B-14-17", "zone":"B", "row" : 14, "number" : 17, "status": 0, "position" : [150,1375] }' +
  ',{ "id" : "B-14-19", "zone":"B", "row" : 14, "number" : 19, "status": 0, "position" : [50,1375] }' +
  ',{ "id" : "B-14-21", "zone":"B", "row" : 14, "number" : 21, "status": 0, "position" : [-50,1375] }' +
  ',{ "id" : "B-14-23", "zone":"B", "row" : 14, "number" : 23, "status": 0, "position" : [-150,1375] }' +
  ',{ "id" : "B-14-25", "zone":"B", "row" : 14, "number" : 25, "status": 0, "position" : [-250,1375] }' +
  ',{ "id" : "B-14-27", "zone":"B", "row" : 14, "number" : 27, "status": 0, "position" : [-350,1375] }' +

  ',{ "id" : "B-14-2", "zone":"B", "row" : 14, "number" : 2, "status": 1, "position" : [1100,1375] } ' +
  ',{ "id" : "B-14-4", "zone":"B", "row" : 14, "number" : 4, "status": 1, "position" : [1200,1375] }' +
  ',{ "id" : "B-14-6", "zone":"B", "row" : 14, "number" : 6, "status": 1, "position" : [1300,1375] }' +
  ',{ "id" : "B-14-8", "zone":"B", "row" : 14, "number" : 8, "status": 1, "position" : [1400,1375] }' +
  ',{ "id" : "B-14-10", "zone":"B", "row" : 14, "number" : 10, "status": 0, "position" : [1500,1375] }' +
  ',{ "id" : "B-14-12", "zone":"B", "row" : 14, "number" : 12, "status": 0, "position" : [1600,1375] }' +
  ',{ "id" : "B-14-14", "zone":"B", "row" : 14, "number" : 14, "status": 0, "position" : [1700,1375] } ' +
  ',{ "id" : "B-14-16", "zone":"B", "row" : 14, "number" : 16, "status": 0, "position" : [1800,1375] }' +
  ',{ "id" : "B-14-18", "zone":"B", "row" : 14, "number" : 18, "status": 0, "position" : [1900,1375] }' +
  ',{ "id" : "B-14-20", "zone":"B", "row" : 14, "number" : 20, "status": 0, "position" : [2000,1375] }' +
  ',{ "id" : "B-14-22", "zone":"B", "row" : 14, "number" : 22, "status": 0, "position" : [2100,1375] }' +
  ',{ "id" : "B-14-24", "zone":"B", "row" : 14, "number" : 24, "status": 0, "position" : [2200,1375] }' +
  ',{ "id" : "B-14-26", "zone":"B", "row" : 14, "number" : 26, "status": 0, "position" : [2300,1375] }' +
  ',{ "id" : "B-14-28", "zone":"B", "row" : 14, "number" : 28, "status": 0, "position" : [2400,1375] }' +
  ',{ "id" : "B-14-30", "zone":"B", "row" : 14, "number" : 30, "status": 0, "position" : [2500,1375] }' +

  ', { "id" : "C-15-1", "zone":"C", "row" : 15, "number" : 1, "status": 1, "position" : [950,1450] } ' +
  ',{ "id" : "C-15-3", "zone":"C", "row" : 15, "number" : 3, "status": 1, "position" : [850,1450] }' +
  ',{ "id" : "C-15-6", "zone":"C", "row" : 15, "number" : 5, "status": 1, "position" : [750,1450] }' +
  ',{ "id" : "C-15-7", "zone":"C", "row" : 15, "number" : 7, "status": 1, "position" : [650,1450] }' +
  ',{ "id" : "C-15-9", "zone":"C", "row" : 15, "number" : 9, "status": 0, "position" : [550,1450] }' +
  ',{ "id" : "C-15-11", "zone":"C", "row" : 15, "number" : 11, "status": 0, "position" : [450,1450] }' +
  ',{ "id" : "C-15-13", "zone":"C", "row" : 15, "number" : 13, "status": 0, "position" : [350,1450] } ' +
  ',{ "id" : "C-15-15", "zone":"C", "row" : 15, "number" : 15, "status": 0, "position" : [250,1450] }' +
  ',{ "id" : "C-15-17", "zone":"C", "row" : 15, "number" : 17, "status": 0, "position" : [150,1450] }' +
  ',{ "id" : "C-15-19", "zone":"C", "row" : 15, "number" : 19, "status": 0, "position" : [50,1450] }' +
  ',{ "id" : "C-15-21", "zone":"C", "row" : 15, "number" : 21, "status": 0, "position" : [-50,1450] }' +
  ',{ "id" : "C-15-23", "zone":"C", "row" : 15, "number" : 23, "status": 0, "position" : [-150,1450] }' +
  ',{ "id" : "C-15-25", "zone":"C", "row" : 15, "number" : 25, "status": 0, "position" : [-250,1450] }' +
  ',{ "id" : "C-15-27", "zone":"C", "row" : 15, "number" : 27, "status": 0, "position" : [-350,1450] }' +
  ',{ "id" : "C-15-29", "zone":"C", "row" : 15, "number" : 29, "status": 0, "position" : [-450,1450] }' +

  ',{ "id" : "C-15-2", "zone":"C", "row" : 15, "number" : 2, "status": 1, "position" : [1100,1450] } ' +
  ',{ "id" : "C-15-4", "zone":"C", "row" : 15, "number" : 4, "status": 1, "position" : [1200,1450] }' +
  ',{ "id" : "C-15-6", "zone":"C", "row" : 15, "number" : 6, "status": 1, "position" : [1300,1450] }' +
  ',{ "id" : "C-15-8", "zone":"C", "row" : 15, "number" : 8, "status": 1, "position" : [1400,1450] }' +
  ',{ "id" : "C-15-10", "zone":"C", "row" : 15, "number" : 10, "status": 0, "position" : [1500,1450] }' +
  ',{ "id" : "C-15-12", "zone":"C", "row" : 15, "number" : 12, "status": 0, "position" : [1600,1450] }' +
  ',{ "id" : "C-15-14", "zone":"C", "row" : 15, "number" : 14, "status": 0, "position" : [1700,1450] } ' +
  ',{ "id" : "C-15-16", "zone":"C", "row" : 15, "number" : 16, "status": 0, "position" : [1800,1450] }' +
  ',{ "id" : "C-15-18", "zone":"C", "row" : 15, "number" : 18, "status": 0, "position" : [1900,1450] }' +
  ',{ "id" : "C-15-20", "zone":"C", "row" : 15, "number" : 20, "status": 0, "position" : [2000,1450] }' +
  ',{ "id" : "C-15-22", "zone":"C", "row" : 15, "number" : 22, "status": 0, "position" : [2100,1450] }' +
  ',{ "id" : "C-15-24", "zone":"C", "row" : 15, "number" : 24, "status": 0, "position" : [2200,1450] }' +
  ',{ "id" : "C-15-26", "zone":"C", "row" : 15, "number" : 26, "status": 0, "position" : [2300,1450] }' +

  ', { "id" : "C-16-1", "zone":"C", "row" : 16, "number" : 1, "status": 1, "position" : [950,1525] } ' +
  ',{ "id" : "C-16-3", "zone":"C", "row" : 16, "number" : 3, "status": 1, "position" : [850,1525] }' +
  ',{ "id" : "C-16-6", "zone":"C", "row" : 16, "number" : 5, "status": 1, "position" : [750,1525] }' +
  ',{ "id" : "C-16-7", "zone":"C", "row" : 16, "number" : 7, "status": 1, "position" : [650,1525] }' +
  ',{ "id" : "C-16-9", "zone":"C", "row" : 16, "number" : 9, "status": 1, "position" : [550,1525] }' +
  ',{ "id" : "C-16-11", "zone":"C", "row" : 16, "number" : 11, "status": 0, "position" : [4500,1525] }' +
  ',{ "id" : "C-16-13", "zone":"C", "row" : 16, "number" : 13, "status": 0, "position" : [350,1525] } ' +
  ',{ "id" : "C-16-15", "zone":"C", "row" : 16, "number" : 15, "status": 0, "position" : [250,1525] }' +
  ',{ "id" : "C-16-17", "zone":"C", "row" : 16, "number" : 17, "status": 0, "position" : [150,1525] }' +
  ',{ "id" : "C-16-19", "zone":"C", "row" : 16, "number" : 19, "status": 0, "position" : [50,1525] }' +
  ',{ "id" : "C-16-21", "zone":"C", "row" : 16, "number" : 21, "status": 0, "position" : [-50,1525] }' +
  ',{ "id" : "C-16-23", "zone":"C", "row" : 16, "number" : 23, "status": 0, "position" : [-150,1525] }' +
  ',{ "id" : "C-16-25", "zone":"C", "row" : 16, "number" : 25, "status": 0, "position" : [-250,1525] }' +
  ',{ "id" : "C-16-27", "zone":"C", "row" : 16, "number" : 27, "status": 0, "position" : [-350,1525] }' +
  ',{ "id" : "C-16-29", "zone":"C", "row" : 16, "number" : 29, "status": 0, "position" : [-450,1525] }' +

  ',{ "id" : "C-16-2", "zone":"C", "row" : 16, "number" : 2, "status": 0, "position" : [1100,1525] } ' +
  ',{ "id" : "C-16-4", "zone":"C", "row" : 16, "number" : 4, "status": 0, "position" : [1200,1525] }' +
  ',{ "id" : "C-16-6", "zone":"C", "row" : 16, "number" : 6, "status": 0, "position" : [1300,1525] }' +
  ',{ "id" : "C-16-8", "zone":"C", "row" : 16, "number" : 8, "status": 0, "position" : [1400,1525] }' +
  ',{ "id" : "C-16-10", "zone":"C", "row" : 16, "number" : 10, "status": 0, "position" : [1500,1525] }' +
  ',{ "id" : "C-16-12", "zone":"C", "row" : 16, "number" : 12, "status": 0, "position" : [1600,1525] }' +
  ',{ "id" : "C-16-14", "zone":"C", "row" : 16, "number" : 14, "status": 0, "position" : [1700,1525] } ' +
  ',{ "id" : "C-16-16", "zone":"C", "row" : 16, "number" : 16, "status": 0, "position" : [1800,1525] }' +
  ',{ "id" : "C-16-18", "zone":"C", "row" : 16, "number" : 18, "status": 0, "position" : [1900,1525] }' +
  ',{ "id" : "C-16-20", "zone":"C", "row" : 16, "number" : 20, "status": 0, "position" : [2000,1525] }' +
  ',{ "id" : "C-16-22", "zone":"C", "row" : 16, "number" : 22, "status": 0, "position" : [2100,1525] }' +
  ',{ "id" : "C-16-24", "zone":"C", "row" : 16, "number" : 24, "status": 0, "position" : [2200,1525] }' +
  ',{ "id" : "C-16-26", "zone":"C", "row" : 16, "number" : 26, "status": 0, "position" : [2300,1525] }' +

  ', { "id" : "C-17-1", "zone":"C", "row" : 17, "number" : 1, "status": 0, "position" : [950,1600] } ' +
  ',{ "id" : "C-17-3", "zone":"C", "row" : 17, "number" : 3, "status": 0, "position" : [850,1600] }' +
  ',{ "id" : "C-17-6", "zone":"C", "row" : 17, "number" : 5, "status": 0, "position" : [750,1600] }' +
  ',{ "id" : "C-17-7", "zone":"C", "row" : 17, "number" : 7, "status": 0, "position" : [650,1600] }' +
  ',{ "id" : "C-17-9", "zone":"C", "row" : 17, "number" : 9, "status": 0, "position" : [550,1600] }' +
  ',{ "id" : "C-17-11", "zone":"C", "row" : 17, "number" : 11, "status": 0, "position" : [450,1600] }' +
  ',{ "id" : "C-17-13", "zone":"C", "row" : 17, "number" : 13, "status": 0, "position" : [350,1600] } ' +
  ',{ "id" : "C-17-15", "zone":"C", "row" : 17, "number" : 15, "status": 0, "position" : [250,1600] }' +
  ',{ "id" : "C-17-17", "zone":"C", "row" : 17, "number" : 17, "status": 0, "position" : [150,1600] }' +
  ',{ "id" : "C-17-19", "zone":"C", "row" : 17, "number" : 19, "status": 0, "position" : [50,1600] }' +
  ',{ "id" : "C-17-21", "zone":"C", "row" : 17, "number" : 21, "status": 0, "position" : [-50,1600] }' +
  ',{ "id" : "C-17-23", "zone":"C", "row" : 17, "number" : 23, "status": 0, "position" : [-150,1600] }' +
  ',{ "id" : "C-17-25", "zone":"C", "row" : 17, "number" : 25, "status": 0, "position" : [-250,1600] }' +
  ',{ "id" : "C-17-27", "zone":"C", "row" : 17, "number" : 27, "status": 0, "position" : [-350,1600] }' +
  ',{ "id" : "C-17-29", "zone":"C", "row" : 17, "number" : 29, "status": 0, "position" : [-450,1600] }' +

  ',{ "id" : "C-17-2", "zone":"C", "row" : 17, "number" : 2, "status": 0, "position" : [1200,1600] } ' +
  ',{ "id" : "C-17-4", "zone":"C", "row" : 17, "number" : 4, "status": 0, "position" : [1300,1600] }' +
  ',{ "id" : "C-17-6", "zone":"C", "row" : 17, "number" : 6, "status": 0, "position" : [1400,1600] }' +
  ',{ "id" : "C-17-8", "zone":"C", "row" : 17, "number" : 8, "status": 0, "position" : [1500,1600] }' +
  ',{ "id" : "C-17-10", "zone":"C", "row" : 17, "number" : 10, "status": 0, "position" : [1600,1600] }' +
  ',{ "id" : "C-17-12", "zone":"C", "row" : 17, "number" : 12, "status": 0, "position" : [1700,1600] }' +
  ',{ "id" : "C-17-14", "zone":"C", "row" : 17, "number" : 14, "status": 0, "position" : [1800,1600] } ' +
  ',{ "id" : "C-17-16", "zone":"C", "row" : 17, "number" : 16, "status": 0, "position" : [1900,1600] }' +
  ',{ "id" : "C-17-18", "zone":"C", "row" : 17, "number" : 18, "status": 0, "position" : [2000,1600] }' +
  ',{ "id" : "C-17-20", "zone":"C", "row" : 17, "number" : 20, "status": 0, "position" : [2100,1600] }' +
  ',{ "id" : "C-17-22", "zone":"C", "row" : 17, "number" : 22, "status": 0, "position" : [2200,1600] }' +
  ',{ "id" : "C-17-24", "zone":"C", "row" : 17, "number" : 24, "status": 0, "position" : [2300,1600] }' +

  ', { "id" : "C-18-1", "zone":"C", "row" : 18, "number" : 1, "status": 0, "position" : [950,1675] } ' +
  ',{ "id" : "C-18-3", "zone":"C", "row" : 18, "number" : 3, "status": 0, "position" : [850,1675] }' +
  ',{ "id" : "C-18-6", "zone":"C", "row" : 18, "number" : 5, "status": 0, "position" : [750,1675] }' +
  ',{ "id" : "C-18-7", "zone":"C", "row" : 18, "number" : 7, "status": 0, "position" : [650,1675] }' +
  ',{ "id" : "C-18-9", "zone":"C", "row" : 18, "number" : 9, "status": 0, "position" : [550,1675] }' +
  ',{ "id" : "C-18-11", "zone":"C", "row" : 18, "number" : 11, "status": 0, "position" : [450,1675] }' +
  ',{ "id" : "C-18-13", "zone":"C", "row" : 18, "number" : 13, "status": 0, "position" : [350,1675] } ' +
  ',{ "id" : "C-18-15", "zone":"C", "row" : 18, "number" : 15, "status": 0, "position" : [250,1675] }' +
  ',{ "id" : "C-18-17", "zone":"C", "row" : 18, "number" : 17, "status": 0, "position" : [150,1675] }' +
  ',{ "id" : "C-18-19", "zone":"C", "row" : 18, "number" : 19, "status": 0, "position" : [50,1675] }' +
  ',{ "id" : "C-18-21", "zone":"C", "row" : 18, "number" : 21, "status": 0, "position" : [-50,1675] }' +
  ',{ "id" : "C-18-23", "zone":"C", "row" : 18, "number" : 23, "status": 0, "position" : [-150,1675] }' +
  ',{ "id" : "C-18-25", "zone":"C", "row" : 18, "number" : 25, "status": 0, "position" : [-250,1675] }' +
  ',{ "id" : "C-18-27", "zone":"C", "row" : 18, "number" : 27, "status": 0, "position" : [-350,1675] }' +
  ',{ "id" : "C-18-29", "zone":"C", "row" : 18, "number" : 29, "status": 0, "position" : [-450,1675] }' +

  ',{ "id" : "C-18-2", "zone":"C", "row" : 18, "number" : 2, "status": 0, "position" : [1200,1675] } ' +
  ',{ "id" : "C-18-4", "zone":"C", "row" : 18, "number" : 4, "status": 0, "position" : [1300,1675] }' +
  ',{ "id" : "C-18-6", "zone":"C", "row" : 18, "number" : 6, "status": 0, "position" : [1400,1675] }' +
  ',{ "id" : "C-18-8", "zone":"C", "row" : 18, "number" : 8, "status": 0, "position" : [1500,1675] }' +
  ',{ "id" : "C-18-10", "zone":"C", "row" : 18, "number" : 10, "status": 0, "position" : [1600,1675] }' +
  ',{ "id" : "C-18-12", "zone":"C", "row" : 18, "number" : 12, "status": 0, "position" : [1700,1675] }' +
  ',{ "id" : "C-18-14", "zone":"C", "row" : 18, "number" : 14, "status": 0, "position" : [1800,1675] } ' +
  ',{ "id" : "C-18-16", "zone":"C", "row" : 18, "number" : 16, "status": 0, "position" : [1900,1675] }' +
  ',{ "id" : "C-18-18", "zone":"C", "row" : 18, "number" : 18, "status": 1, "position" : [2000,1675] }' +
  ',{ "id" : "C-18-20", "zone":"C", "row" : 18, "number" : 20, "status": 1, "position" : [2100,1675] }' +
  ',{ "id" : "C-18-22", "zone":"C", "row" : 18, "number" : 22, "status": 1, "position" : [2200,1675] }' +
  ',{ "id" : "C-18-24", "zone":"C", "row" : 18, "number" : 24, "status": 1, "position" : [2300,1675] }' +

  ', { "id" : "C-19-1", "zone":"C", "row" : 19, "number" : 1, "status": 0, "position" : [950,1750] } ' +
  ',{ "id" : "C-19-3", "zone":"C", "row" : 19, "number" : 3, "status": 0, "position" : [850,1750] }' +
  ',{ "id" : "C-19-6", "zone":"C", "row" : 19, "number" : 5, "status": 1, "position" : [750,1750] }' +
  ',{ "id" : "C-19-7", "zone":"C", "row" : 19, "number" : 7, "status": 1, "position" : [650,1750] }' +
  ',{ "id" : "C-19-9", "zone":"C", "row" : 19, "number" : 9, "status": 0, "position" : [550,1750] }' +
  ',{ "id" : "C-19-11", "zone":"C", "row" : 19, "number" : 11, "status": 0, "position" : [450,1750] }' +
  ',{ "id" : "C-19-13", "zone":"C", "row" : 19, "number" : 13, "status": 0, "position" : [350,1750] } ' +
  ',{ "id" : "C-19-15", "zone":"C", "row" : 19, "number" : 15, "status": 0, "position" : [250,1750] }' +
  ',{ "id" : "C-19-17", "zone":"C", "row" : 19, "number" : 17, "status": 0, "position" : [150,1750] }' +
  ',{ "id" : "C-19-19", "zone":"C", "row" : 19, "number" : 19, "status": 0, "position" : [50,1750] }' +
  ',{ "id" : "C-19-21", "zone":"C", "row" : 19, "number" : 21, "status": 1, "position" : [-150,1750] }' +
  ',{ "id" : "C-19-23", "zone":"C", "row" : 19, "number" : 23, "status": 1, "position" : [-250,1750] }' +
  ',{ "id" : "C-19-25", "zone":"C", "row" : 19, "number" : 25, "status": 1, "position" : [-350,1750] }' +
  ',{ "id" : "C-19-27", "zone":"C", "row" : 19, "number" : 27, "status": 1, "position" : [-450,1750] }' +
  ',{ "id" : "C-19-29", "zone":"C", "row" : 19, "number" : 29, "status": 1, "position" : [-550,1750] }' +

  ',{ "id" : "C-19-2", "zone":"C", "row" : 19, "number" : 2, "status": 0, "position" : [1100,1750] } ' +
  ',{ "id" : "C-19-4", "zone":"C", "row" : 19, "number" : 4, "status": 0, "position" : [1200,1750] }' +
  ',{ "id" : "C-19-6", "zone":"C", "row" : 19, "number" : 6, "status": 0, "position" : [1300,1750] }' +
  ',{ "id" : "C-19-8", "zone":"C", "row" : 19, "number" : 8, "status": 0, "position" : [1400,1750] }' +
  ',{ "id" : "C-19-10", "zone":"C", "row" : 19, "number" : 10, "status": 0, "position" : [1500,1750] }' +
  ',{ "id" : "C-19-12", "zone":"C", "row" : 19, "number" : 12, "status": 0, "position" : [1600,1750] }' +
  ',{ "id" : "C-19-14", "zone":"C", "row" : 19, "number" : 14, "status": 0, "position" : [1700,1750] } ' +
  ',{ "id" : "C-19-16", "zone":"C", "row" : 19, "number" : 16, "status": 0, "position" : [1800,1750] }' +
  ',{ "id" : "C-19-18", "zone":"C", "row" : 19, "number" : 18, "status": 1, "position" : [1900,1750] }' +
  ',{ "id" : "C-19-20", "zone":"C", "row" : 19, "number" : 20, "status": 1, "position" : [2000,1750] }' +
  ',{ "id" : "C-19-22", "zone":"C", "row" : 19, "number" : 22, "status": 1, "position" : [2100,1750] }' +
  ',{ "id" : "C-19-24", "zone":"C", "row" : 19, "number" : 24, "status": 1, "position" : [220,1750] }' +
  ']' +
  ',"extras": [ ' +
  ' { "shape" : "rect", "x":400, "y" : 50, "width" : 1525, "height": 250, "rx" : 5, "ry" : 5, "class" : "stage" } ' +
  ',{ "shape" : "text", "x":1162.5, "y" : 250, "text" : "ESCENARIO", "class" : "stage-text", "size": 200 } ' +
  ',{ "shape" : "text", "x":375, "y" : 414.5, "text" : "F1", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 414.5, "text" : "F1", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1925, "y" : 414.5, "text" : "F1", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":325, "y" : 489.5, "text" : "F2", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 489.5, "text" : "F2", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":2075, "y" : 489.5, "text" : "F2", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":275, "y" : 564.5, "text" : "F3", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 564.5, "text" : "F3", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":2025, "y" : 564.5, "text" : "F3", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":275, "y" : 639.5, "text" : "F4", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 639.5, "text" : "F4", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":2075, "y" : 639.5, "text" : "F4", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":225, "y" : 714.5, "text" : "F5", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 714.5, "text" : "F5", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":2075, "y" : 714.5, "text" : "F5", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":225, "y" : 789.5, "text" : "F6", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 789.5, "text" : "F6", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":2025, "y" : 789.5, "text" : "F6", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":175, "y" : 864.5, "text" : "F7", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 864.5, "text" : "F7", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":2025, "y" : 864.5, "text" : "F7", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":225, "y" : 939.5, "text" : "F8", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 939.5, "text" : "F8", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1875, "y" : 939.5, "text" : "F8", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":125, "y" : 1014.5, "text" : "F9", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 1014.5, "text" : "F9", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1875, "y" : 1014.5, "text" : "F9", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":275, "y" : 1089.5, "text" : "F10", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 1089.5, "text" : "F10", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1925, "y" : 1089.5, "text" : "F10", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":275, "y" : 1164.5, "text" : "F11", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 1164.5, "text" : "F11", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1875, "y" : 1164.5, "text" : "F11", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":225, "y" : 1239.5, "text" : "F12", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 1239.5, "text" : "F12", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1825, "y" : 1239.5, "text" : "F12", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":225, "y" : 1314.5, "text" : "F13", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 1314.5, "text" : "F13", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1825, "y" : 1314.5, "text" : "F13", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":225, "y" : 1389.5, "text" : "F14", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 1389.5, "text" : "F14", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1875, "y" : 1389.5, "text" : "F14", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":175, "y" : 1464.5, "text" : "F15", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 1464.5, "text" : "F15", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1775, "y" : 1464.5, "text" : "F15", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":175, "y" : 1539.5, "text" : "F16", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 1539.5, "text" : "F16", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1775, "y" : 1539.5, "text" : "F16", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":175, "y" : 1614.5, "text" : "F17", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 1614.5, "text" : "F17", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1725, "y" : 1614.5, "text" : "F17", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":175, "y" : 1689.5, "text" : "F18", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 1689.5, "text" : "F18", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1725, "y" : 1689.5, "text" : "F18", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":175, "y" : 1764.5, "text" : "F19", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1025, "y" : 1764.5, "text" : "F19", "class" : "row-text", "size": 50 } ' +
  ',{ "shape" : "text", "x":1725, "y" : 1764.5, "text" : "F19", "class" : "row-text", "size": 50 } ' +

  ', { "shape" : "rect", "x":812.5, "y" : 2000, "width" : 750, "height": 150, "rx" : 5, "ry" : 5, "class" : "additional-accessories" } ' +
  ',{ "shape" : "text", "x":1162.5, "y" : 2100, "text" : "CABINA PROYECCION", "class" : "stage-text", "size": 50 } ' +
  ', { "shape" : "rect", "x":250, "y" : 2000, "width" : 200, "height": 100, "rx" : 5, "ry" : 5, "class" : "exit" } ' +
  ',{ "shape" : "text", "x":350, "y" : 2075, "text" : "Entrada", "class" : "stage-text", "size": 50 } ' +

  ', { "shape" : "rect", "x":1950, "y" : 2000, "width" : 200, "height": 100, "rx" : 5, "ry" : 5, "class" : "exit" } ' +
  ',{ "shape" : "text", "x":2050, "y" : 2075, "text" : "Entrada", "class" : "stage-text", "size": 50 } ' +

  ']' +
  '}';

var configEvent = JSON.parse(jsonEvent);

var snap = Snap('#canvas');
if (snap.attr('width') > configEvent.config.size) {
  configEvent.config.size = snap.attr('width');
}
if (snap.attr('height') > configEvent.config.size) {
  configEvent.config.size = snap.attr('height');
}
snap.attr({
  viewBox: [configEvent.config.origin.x, configEvent.config.origin.y, configEvent.config.size, configEvent.config.size].join(' ')
});

var move = function (dx, dy, x, y) {
  var viewBox = snap.attr('viewBox');
  var factor = {
    x: (viewBox.w / snap.attr('width')),
    y: (viewBox.h / snap.attr('height'))
  };
  var newX = snap.attr('posX') - dx * factor.x;
  var newY = snap.attr('posY') - dy * factor.y;
  var limit;

  if (actualZoom < 0) {
    if (newX > configEvent.config.origin.x) {
      newX = configEvent.config.origin.x;
    } else {
      limit = configEvent.config.size - viewBox.w;
      if (newX < limit) {
        newX = limit;
      }
    }
    if (newY > configEvent.config.origin.y) {
      newY = configEvent.config.origin.y;
    } else {
      limit = configEvent.config.size - viewBox.h;
      if (newY < limit) {
        newY = limit;
      }
    }
  } else {
    if (newX < configEvent.config.origin.x) {
      newX = configEvent.config.origin.x;
    } else {
      limit = configEvent.config.size - viewBox.w;
      if (newX > limit)
        newX = limit;
    }
    if (newY < configEvent.config.origin.y) {
      newY = configEvent.config.origin.y;
    } else {
      limit = configEvent.config.size - viewBox.h;
      if (newY > limit)
        newY = limit;
    }
  }
  snap.attr({
    viewBox: [newX, newY, viewBox.w, viewBox.h].join(' ')
  });
};

var start = function (dx, dy, x, y) {
  var viewBox = snap.attr('viewBox');
  snap.attr({
    posX: viewBox.x,
    posY: viewBox.y
  });
};

snap.drag(move, start);
generateExtras();
var seats = [];
for (var i = 0; i < configEvent.seats.length; i++) {
  var seat = configEvent.seats[i];
  var newSeat = snap.circle(seat.position[0], seat.position[1], configEvent.config.seat_radius);
  newSeat.attr({
    status: seat.status,
    class: 'seat',
    zone: seat.zone,
    id: seat.id,
    row: seat.row,
    number: seat.number
  });
  switch (seat.status) {
    case 0:
      newSeat.addClass(configEvent.zones[seat.zone].color);
      break;
    default:
      newSeat.addClass("disabled");
  }
  seats.push(newSeat);
}
var svg = document.querySelector('svg');

var pointSVG = svg.createSVGPoint();

function cursorPoint(e) {
  pointSVG.x = e.clientX;
  pointSVG.y = e.clientY;
  return pointSVG.matrixTransform(svg.getScreenCTM().inverse());
}

$('#canvas').bind('mousewheel', function (e) {
  e.preventDefault();
  if (e.originalEvent.wheelDelta / 120 > 0)
    zoomWheelIN(cursorPoint(event));
  else
    zoomWheelOUT(cursorPoint(event));
});

for (var zone in configEvent.zones) {
  $('#zone-selector').find('.dropdown-menu').append('<li id="' + zone + '" class="zone-list"><a><span class="name"><i class="fa fa-square ' + configEvent.zones[zone].color + '" aria-hidden="true"></i> ' + configEvent.zones[zone].name + '</span><span class="price">' + getPriceRange(zone) + '</span></a></li>');
}

var actualZoom = 0;

$('#home').click(function () {
  actualZoom = 0;
  snap.animate({
    viewBox: [0, 0, configEvent.config.size, configEvent.config.size].join(' ')
  }, 100);
});

$('#zoomIN').click(function () {
  zoomIN();
});

$('#zoomOUT').click(function () {
  zoomOUT();
});

function zoomWheelIN(mouse) {
  var viewBox = snap.attr('viewBox');
  var oldFactor = 1 - (configEvent.config.zoom * actualZoom);
  actualZoom++;
  var newFactor = 1 - (configEvent.config.zoom * actualZoom);
  var size = configEvent.config.size * newFactor;
  if (size < 0.1) {
    actualZoom--;
    return false;
  }
  var diff = mouse.x - viewBox.x;
  var x = mouse.x - (diff * (newFactor / oldFactor));
  diff = mouse.y - viewBox.y;
  var y = mouse.y - (diff * (newFactor / oldFactor));
  snap.attr({
    viewBox: [x, y, size, size].join(' ')
  });
}

function zoomIN() {
  actualZoom++;
  var viewBox = snap.attr('viewBox');
  var factor = 1 - (configEvent.config.zoom * actualZoom);
  var size = configEvent.config.size * factor;
  if (size < 0.1) {
    actualZoom--;
    return false;
  }
  var x = viewBox.x + ((viewBox.w - size) / 2);
  var y = viewBox.y + ((viewBox.h - size) / 2);
  snap.animate({
    viewBox: [x, y, size, size].join(' ')
  }, 100);
}

function zoomWheelOUT(mouse) {
  var viewBox = snap.attr('viewBox');
  var oldFactor = 1 - (configEvent.config.zoom * actualZoom);
  actualZoom--;
  if (actualZoom < 0)
    actualZoom = 0;
  var newFactor = 1 - (configEvent.config.zoom * actualZoom);
  var size = configEvent.config.size * newFactor;
  var diff = mouse.x - viewBox.x;
  var x = mouse.x - (diff * (newFactor / oldFactor));
  diff = mouse.y - viewBox.y;
  var y = mouse.y - (diff * (newFactor / oldFactor));
  snap.attr({
    viewBox: [x, y, size, size].join(' ')
  });
}

function zoomOUT() {
  actualZoom--;
  if (actualZoom < 0)
    actualZoom = 0;
  var viewBox = snap.attr('viewBox');
  var factor = 1 - (configEvent.config.zoom * actualZoom);
  var size = configEvent.config.size * factor;
  var x = viewBox.x + ((viewBox.w - size) / 2);
  var y = viewBox.y + ((viewBox.h - size) / 2);
  snap.animate({
    viewBox: [x, y, size, size].join(' ')
  }, 100);
}

snap.mousemove(function (e) {
  var info = $('#tooltip');
  var width = $('#canvas').attr('width');
  var height = $('#canvas').attr('height');
  var newTop = e.clientY;
  var newLeft = e.clientX;
  if ((newLeft + info.outerWidth(true)) > width)
    newLeft -= info.outerWidth(true);
  if ((newTop + info.outerHeight(true)) > height)
    newTop -= info.outerHeight(true);
  info.css({
    top: newTop,
    left: newLeft
  });
}, false);

$('.seat:not(.disabled)').hover(
  function() {
    var info = $('#tooltip');
    var infoText = "Zona: " + configEvent.zones[$(this).attr('zone')].name + '<br/>';
    infoText += "Fila: " + $(this).attr('row') + '<br/>';
    infoText += "Numero: " + $(this).attr('number') + '<br/>';
    infoText += "Precio: " + getPriceRange($(this).attr('zone'));
    info.html(infoText);
    info.show();
  }, function() {
    $('#tooltip').hide();
  }
);

function getPriceRange(zone) {
  var ticketsID = configEvent.zones[zone].tickets;
  if (ticketsID.length == 1) {
    return configEvent.tickets[ticketsID[0]].price + configEvent.currency;
  }
  var cheap = configEvent.tickets[ticketsID[0]].price;
  var expensive = cheap;
  for (var i = 1; i < ticketsID.length; i++) {
    var price = configEvent.tickets[ticketsID[i]].price;
    if (price < cheap) {
      cheap = price;
    } else if (price > expensive) {
      expensive = price;
    }
  }
  return cheap + configEvent.currency + '~' + expensive + configEvent.currency;
}

function generateExtras() {

  for (var i = 0; i < configEvent.extras.length; i++) {
    var shapeConfig = configEvent.extras[i];
    var shape;
    switch (shapeConfig.shape) {
      case 'rect':
        shape = snap.rect(shapeConfig.x, shapeConfig.y, shapeConfig.width, shapeConfig.height, shapeConfig.rx, shapeConfig.ry);
        break;
      case 'text':
        shape = snap.text(shapeConfig.x, shapeConfig.y, shapeConfig.text);
        shape.attr({
          'font-size': shapeConfig.size
        });
        break;
    }
    shape.addClass(shapeConfig.class);
  }
};

/* --- INIT EVENTS --- */
$('.seat:not(.disabled)').click(function () {
  if ($(this).hasClass('disabled'))
    return false;
  $(this).toggleClass('selected');
  if ($(this).hasClass('selected')) {
    addShoppingCart(this);
  } else {
    if (($('#zone-selected').attr('zoneId') != 'all') && ($('#zone-selected').attr('zoneId') != $(this).attr('zone'))) {
      $(this).addClass('disabled');
    }
    removeShoppingCart($(this).attr('id'));
    $('#T' + $(this).attr('id')).remove();
  }
});