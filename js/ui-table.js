
var UiTable = function (size) {
   

   var table = new Table(size);
   var matrix = table.getMatrix();
   var assertListHtmlCells = []; //lista de acertados html //guess list
   var htmlCellsSelected = []; //pares 
   var numberOfClickTries = 0;       
   var elementsEventNumber = control.getListEvenNumber(); //pares
  
  var hideElements = function () {

          elementsEventNumber[0].hide();
          elementsEventNumber[1].hide(); 

  };
  var hideElementsByUI = function () {

          htmlCellsSelected[0].html(elementsEventNumber[0].getValue());
          htmlCellsSelected[1].html(elementsEventNumber[1].getValue());
          htmlCellsSelected = [];
          control.emptyListOfValues();
  };
  /*
  insertGuessList is a function that stores the cells selected
  in assertListHtmlCells array when these cells selected are equals.
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
                control.emptyListOfValues();
                htmlCellsSelected = [];
                return true;
        } 
        else{
           
                hideElements();
                setTimeout(hideElementsByUI,400)
              
        }
      }
      return false;
  };
  var matchingCells = function(){
      if (compareCellsSelected()){
      } 
  };


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


   var clickCell = function() { 
     var $target = $(this);
     if (containsHtmlCells($(this))) {
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
            matchingCells();
           

      }
      numberOfClickTries++;
       
    };

    var finishGame = function () {
      if (numberOfClickTries >= control.getNumberOfTries()) {
            $('tr').off('click','td', this.clickCell);
            $('h6').text('The game has finished your Score is : ' + control.getScore());
      }
      
    };

    var activeCell = function () {

       $(this).removeClass().addClass('active');

    };
    var unactiveCell = function () {    
       $(this).removeClass();
    };

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