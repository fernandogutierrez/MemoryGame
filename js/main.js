/*
console.log("************************");
console.log("Memory Game v1.1 beta   ");
console.log("************************");
*/
  var control;
  window.onload = function () {

  var sizeSelected;
  var nickName;
  var type; 
     
  
      var createGame = function (argument) {

           nickName = $('#nickName').find('option:selected').text();
           sizeSelected = $('#size').find('option:selected').text();
           type = $('#typeGame').find('option:selected').text();
           $("#mainPage").empty()
           
           control = new Control(sizeSelected,nickName,type);
           control.drawTable();
      };

      var consoleMode = function (argument) {
      if (type == 'Play by Console') {
          while(control.triesG()){

                 var positions = prompt("Inserts positions");
                 var posX = positions.charAt(0);
                 var posY = positions.charAt(1);
                 control.play(posX,posY)

                 control.decrementTries()
             }
              alert("game finish The final score is " + control.getScore());      
           }
      };

      $('#btn_BeginGame').on('click',createGame);
      $('#btn_BeginGame').on('click',consoleMode);

      
};








