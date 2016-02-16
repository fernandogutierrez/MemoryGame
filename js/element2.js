var Element = function () {

    	var value = "";
        var symbols=['*','$','@','#','%','ªª','!!'
        ,'Ç','ºº','£','†','ê','ž','ƒ','┌','║'];


    	var getRandom = function () {
    	    return Math.floor((Math.random() * 10));
    	};
          
    	this.generateValue = function () {
    	    value = symbols[this.getRandom()];
    	};       
        this.getValue = function (argument) {
            return value;
        }
    
    };