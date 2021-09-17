


function Number(num) {
    var square,cube=0;
    var square = num*num;
    var cube = num*num*num;
    console.log(num, square, cube);
  }
  
  function SquareCube() {
    for (var i = 1; i <= 10; i++) {
      Number(i);   
    }
  }
  
  SquareCube();
