
console.log("************************");
console.log("Memory Game v2.5.0   ");
console.log("************************");

  var control;
  window.onload = function () {

  var sizeSelected;
  var nickName;
  var type; 
     
  
      var createGame = function (argument) {

           nickName = $('#nickName').val();

           sizeSelected = $('#size').find('option:selected').text();
           type = $('#typeGame').find('option:selected').text();
           $("#mainPage").empty()
           
           control = new Control(sizeSelected,nickName,type);
           control.drawTable();
      };

      var consoleMode = function () {
          if (type == 'Play by Console') {
              while(control.triesOfConsole()){
                     var positions = prompt("Inserts positions........e.g. 12, 00, 10");
                     if (control.isNumbers(positions)) {
                         var posX = positions.charAt(0);
                         var posY = positions.charAt(1);
                         control.playConsole(posX,posY);
                         control.decrementTries()
                     }
                     else
                     {
                        alert("Please insert valid numbers");
                        continue;
                     }
                     
                 }
                  alert("game finish The final score is " + control.getScore());      
               }
      };

      $('#btn_BeginGame').on('click',createGame);
      $('#btn_BeginGame').on('click',consoleMode);

      
};








