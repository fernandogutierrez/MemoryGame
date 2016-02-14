
var name = prompt("What is your name?");
var player = new Player(name);
var sizeTable = prompt("Insert the size");

var numberOfFields = (sizeTable + 1) * (sizeTable + 1);
var numberOfPairs = Math.floor(numberOfFields/2);
var elements = []; 
	while (numberOfPairs>0)
	{
         var el = new Element();
         el.generateValue();
         elements.push(el.getValue());
         numberOfPairs--;
	}

var table = new Table(sizeTable,elements);
console.log(elements);







var element =  new Element();
element.generateValue();
var value = element.getValue();
table.fillPairs(value);












