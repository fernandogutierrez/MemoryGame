
var UiTable = function (size) {
   
   var table = new Table(size);
   var matrix = table.getMatrix();
   var assertListHtmlCells = []; 
   var htmlCellsSelected = []; //pair
   var numberOfClickTries = 0;       
   var elementsEventNumber = control.getListEvenNumber(); 
  

  /**
   * This method is to change the status of the Element in the table, from show to hide
   */
  var hideElements = function () {

          elementsEventNumber[0].hide();
          elementsEventNumber[1].hide(); 

  };

  /**
   * This method is to hide or change the value of the cells in the UI table
   */
  var hideElementsByUI = function () {

          htmlCellsSelected[0].html(elementsEventNumber[0].getValue());
          htmlCellsSelected[1].html(elementsEventNumber[1].getValue());
          htmlCellsSelected = [];
          control.emptyListEvenNumber();  
  };

  /*
  insertGuessList is a function that stores the cells selected
  in assertListHtmlCells array when these cells selected are equals (guess cells).
  */
  var insertGuessList = function () {

     assertListHtmlCells.push(htmlCellsSelected[0]);
     assertListHtmlCells.push(htmlCellsSelected[1]);            
  };
  /*
  compareCellsSelected is a function that compare two cells
  if are equals returns true.
  */
  var compareCellsSelected = function() {

      if(control.areTwoElements()){
        if (control.compareTwoElements()) {

                control.incrementScore();
                insertGuessList();
                control.emptyListEvenNumber();
                htmlCellsSelected = [];
                return true;
        } 
        else{
           
                hideElements();
                setTimeout(hideElementsByUI,200)
              
        }
      }
      return false;
  };
 /**
  * method to control the guess selected
  * @param  {html} htmlObject 
  */
   var containsHtmlCells = function (htmlObject) {
      var res = false;
      for (var i = 0; i < assertListHtmlCells.length; i++) {

          var assertElement = assertListHtmlCells[i];
          if(htmlObject.attr('id') === $(assertElement).attr('id')) {
          res = true;        
          }
      }
     return res;   
   }; 



  /*
   This is an event handler to manage when the user do a click on a cell
  */
   var clickCell = function() { 
     var $target = $(this);
     if (containsHtmlCells($target)) {
         return false;
     }
     else {
            htmlCellsSelected.push($target);

            var x = ($target.attr('id')).charAt(0);
            var y = ($target.attr('id')).charAt(1);
            var element = matrix[x][y]; 
            element.show();  
            control.addListEvenNumber(element);           
            $target.html(element.getValue());
            compareCellsSelected();
           
      }
      numberOfClickTries++;
       
    };
    /**
     * This method event handler determine if the game has been finished
     * and display the score of the player
     */
    var finishGame = function () {
      if (numberOfClickTries >= control.getNumberOfTries()) {
            $('tr').off('click','td', this.clickCell);
            $('tr').off('mouseover','td', activeCell);

            if (control.getScore() >= control.goal) {
               $('h6').text('The game has finished YOU WIN : ' + 'Your score is: ' +control.getScore());
            
            }else{
               $('h6').text('The game has finished YOU LOST : ' + 'Your score is: ' +control.getScore());
            }
      }
      
    };
    /*
      This method is to add class active to the selected cell of the Ui table
     */  
    var activeCell = function () {
       var $target = $(this);
       if (containsHtmlCells($target)) {
           return false;
       }
       else{

          $target.removeClass().addClass('active'); 
       }
    };
    /**
     * This method is to remove the classes when the mouse is out
     */
    var unactiveCell = function () {    
       $(this).removeClass();
    };
    /**
     * This method is to create a UI table and add the necessary events for each cell
     */
    this.createTable = function () { 
        
        var page = $('#gamePage');
        var table = $('<table></table>');
        for (var i = 0; i < size; i++){      
        var tr = $('<tr></tr>');
              for (var j = 0; j < size; j++){
                  var td = $('<td>  </td>');
                  td.text(matrix[i][j].getValue());
                  var id = i + '' + j;
                  td.attr('id',id);
                  tr.append(td);
               }   
               table.append(tr);
        }
        page.append(table);
        var h6 = $('<h6></h6>')
        page.append(h6);        
        $('tr').on('click','td', clickCell);        
        $('tr').on('click','td', finishGame);
        $('tr').on('mouseover','td', activeCell);
        $('tr').on('mouseout','td', unactiveCell);
                
      };
};