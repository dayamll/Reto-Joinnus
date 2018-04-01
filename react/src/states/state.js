const allSeats = [  
  { "id" : "A-1-1", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "kids", "free": false}  
 ,{ "id" : "A-1-3", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "kids", "free": false} 
 ,{ "id" : "A-1-5", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "kids", "free": false} 
 ,{ "id" : "A-1-7", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "adults", "free": false} 
 ,{ "id" : "A-1-9", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "adults", "free": false} 
 ,{ "id" : "A-1-11", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "adults", "free": false} 
 ,{ "id" : "A-1-13", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "adults", "free": false}  
 ,{ "id" : "A-1-15", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "adults", "free": false} 
 ,{ "id" : "A-1-17", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "kids", "free": false} 
 ,{ "id" : "A-1-19", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "kids", "free": false} 
 ,{ "id" : "A-1-21", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "adults", "free": false} 
 ,{ "id" : "A-1-23", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "elderly", "free": false} 
 ,{ "id" : "A-1-25", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "elderly", "free": false} 
 ,{ "id" : "A-1-27", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "elderly", "free": false} 
 ,{ "id" : "A-1-29", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "elderly", "free": false} 

 ,{ "id" : "A-1-2", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "kids", "free": false}  
 ,{ "id" : "A-1-4", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "kids", "free": false} 
 ,{ "id" : "A-1-6", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "adults", "free": false} 
 ,{ "id" : "A-1-8", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "adults", "free": false} 
 ,{ "id" : "A-1-10", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "adults", "free": false} 
 ,{ "id" : "A-1-12", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "adults", "free": false} 
 ,{ "id" : "A-1-14", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "adults", "free": false}  
 ,{ "id" : "A-1-18", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "disabled", "free": false} 
 ,{ "id" : "A-1-20", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "adults", "free": false} 
 ,{ "id" : "A-1-22", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "elderly", "free": false} 
 ,{ "id" : "A-1-24", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "elderly", "free": false} 
 ,{ "id" : "A-1-26", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "disabled", "free": false} 
 ,{ "id" : "A-1-28", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "disabled", "free": false} 
 ,{ "id" : "A-1-30", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "disabled", "free": false} 
 ,{ "id" : "A-1-32", "zone":"A", "color":"yellowgreen", "price" : 70, "category" : "disabled", "free": false}  
 ,{ "id" : "C-15-16", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-15-18", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "disabled", "free": false} 
 ,{ "id" : "C-15-20", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-15-22", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "elderly", "free": false} 
 ,{ "id" : "C-15-24", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "elderly", "free": false} 
 ,{ "id" : "C-15-26", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "disabled", "free": false} 

 , { "id" : "C-16-1", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "disabled", "free": false}  
 ,{ "id" : "C-16-3", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "disabled", "free": false} 
 ,{ "id" : "C-16-6", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "disabled", "free": false} 
 ,{ "id" : "C-16-7", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-16-9", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-16-11", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-16-13", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false}  
 ,{ "id" : "C-16-15", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-16-17", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "disabled", "free": false} 
 ,{ "id" : "C-16-19", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "disabled", "free": false} 
 ,{ "id" : "C-16-21", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-16-23", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "elderly", "free": false} 
 ,{ "id" : "C-16-25", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "elderly", "free": false} 
 ,{ "id" : "C-16-27", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "disabled", "free": false} 
 ,{ "id" : "C-16-29", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "disabled", "free": false} 

 ,{ "id" : "C-16-2", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "disabled", "free": false}  
 ,{ "id" : "C-16-4", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "disabled", "free": false} 
 ,{ "id" : "C-16-8", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-16-10", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-16-12", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-16-14", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false}  
 ,{ "id" : "C-16-16", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-16-18", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "disabled", "free": false} 
 ,{ "id" : "C-16-20", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-16-22", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "elderly", "free": false} 
 ,{ "id" : "C-16-24", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "elderly", "free": false} 
 ,{ "id" : "C-16-26", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "disabled", "free": false} 

 , { "id" : "C-17-1", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "disabled", "free": false}  
 ,{ "id" : "C-17-3", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "kids", "free": false} 
 ,{ "id" : "C-17-7", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-17-9", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-17-11", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-17-13", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false}  
 ,{ "id" : "C-17-15", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-17-17", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "kids", "free": false} 
 ,{ "id" : "C-17-19", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "kids", "free": false} 
 ,{ "id" : "C-17-21", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-17-23", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "elderly", "free": false} 
 ,{ "id" : "C-17-25", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "elderly", "free": false} 
 ,{ "id" : "C-17-27", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "disabled", "free": false} 
 ,{ "id" : "C-17-29", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "disabled", "free": false} 

 ,{ "id" : "C-17-2", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "kids", "free": false}  
 ,{ "id" : "C-17-4", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "kids", "free": false} 
 ,{ "id" : "C-17-6", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-17-8", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-17-10", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-17-12", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-17-14", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false}  
 ,{ "id" : "C-17-16", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-17-18", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "kids", "free": false} 
 ,{ "id" : "C-17-20", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "adults", "free": false} 
 ,{ "id" : "C-17-22", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "elderly", "free": false} 
 ,{ "id" : "C-17-24", "zone":"C", "color":"yellowgreen", "price" : 50, "category" : "elderly", "free": false} 

 , { "id" : "C-18-1", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "kids", "free": false}  
 ,{ "id" : "C-18-3", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "kids", "free": false} 
 ,{ "id" : "C-18-7", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-18-9", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-18-11", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-18-13", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false}  
 ,{ "id" : "C-18-15", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-18-17", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "kids", "free": false} 
 ,{ "id" : "C-18-19", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "kids", "free": false} 
 ,{ "id" : "C-18-21", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-18-23", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "elderly", "free": false} 
 ,{ "id" : "C-18-25", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "elderly", "free": false} 
 ,{ "id" : "C-18-27", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "disabled", "free": false} 
 ,{ "id" : "C-18-29", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "disabled", "free": false} 

 ,{ "id" : "C-18-2", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "kids", "free": false}  
 ,{ "id" : "C-18-4", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "kids", "free": false} 
 ,{ "id" : "C-18-6", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false}
 ,{ "id" : "C-18-8", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-18-10", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-18-12", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-18-14", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false}  
 ,{ "id" : "C-18-16", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-18-18", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "kids", "free": false} 
 ,{ "id" : "C-18-20", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-18-22", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "elderly", "free": false} 
 ,{ "id" : "C-18-24", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "elderly", "free": false} 

 , { "id" : "C-19-1", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "kids", "free": false}  
 ,{ "id" : "C-19-3", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "kids", "free": false} 
 ,{ "id" : "C-19-5", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "kids", "free": false} 
 ,{ "id" : "C-19-7", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-19-9", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-19-11", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-19-13", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false}  
 ,{ "id" : "C-19-15", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-19-17", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "kids", "free": false} 
 ,{ "id" : "C-19-19", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "kids", "free": false} 
 ,{ "id" : "C-19-21", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-19-23", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "elderly", "free": false} 
 ,{ "id" : "C-19-25", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "elderly", "free": false} 
 ,{ "id" : "C-19-27", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "disabled", "free": false} 
 ,{ "id" : "C-19-29", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "disabled", "free": false} 

 ,{ "id" : "C-19-2", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "kids", "free": false}  
 ,{ "id" : "C-19-4", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "kids", "free": false} 
 ,{ "id" : "C-19-6", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-19-8", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-19-10", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-19-12", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-19-14", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false}  
 ,{ "id" : "C-19-16", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-19-18", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "kids", "free": false} 
 ,{ "id" : "C-19-20", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "adults", "free": false} 
 ,{ "id" : "C-19-22", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "elderly", "free": false} 
 ,{ "id" : "C-19-24", "zone":"C", "color":"yellowgreen", "price" : 60, "category" : "elderly", "free": false} 
 ]

  const INIT_STATE = {
    seats: allSeats,
  };

  export default INIT_STATE;