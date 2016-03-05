var TableDrawer = function(size,option) {
  /*
  draw is a function that decide if draw by:
  -Console
  -UI
  */
  this.draw = function () {
  	if (option == 'Play by Ui') {
  	    drawByUI();
      
  	}
  	if (option == 'Play by Console') {
  		return drawByConsole();
  	}

  };
  /*
   * This method is to display one table by console
   */
  var drawByConsole = function () {
    
    var consoleTable = new ConsoleTable(size); 
    consoleTable.printTableWithValues();
    return consoleTable; 
  };
  /*
   * This method is to draw one table by UI
   */
  var drawByUI = function () {
    var uiTable = new UiTable(size);
    uiTable.createTable();
  };
  /**
   * This method is to receive positions X and Y , and send them to displaySelectedElm
   * @param  {int} posX position in axis X
   * @param  {int} posY position in axis Y
   */
  this.playByConsole = function (posX,posY) {
     consoleTable.displaySelectedElm(posX,posY);

  };
 
};