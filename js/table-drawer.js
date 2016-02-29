var TableDrawer = function(size,option) {
  /*
  draw is a function that decide if draw by:
  -Console
  -UI
  */
  this.draw = function () {
  	if (option == 'Play by Ui') {
  		return drawByUI();
      
  	}
  	if (option == 'Play by Console') {
  		return drawByConsole();
  	}

  };

  var drawByConsole = function () {
    
    var consoleTable = new ConsoleTable(size); 
    consoleTable.printTableWithValues();
    return consoleTable; 
  };

  var drawByUI = function () {
    var uiTable = new UiTable(size);
    uiTable.createTable();
    return uiTable;
  };
  
  this.playByConsole = function (posX,posY) {
     consoleTable.displaySelectedElm(posX,posY);

  };
 
};