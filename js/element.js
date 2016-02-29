 var Element = function () {
     
      var value = '*';
      var posX;
      var posY;
      var symbols=['ƒ','$','@','#','%','†'];
      var hidden = true;

      /**
      * generateValue is a function to assign an value to an element: ['ƒ','$','@','#','%','†']
      */
      this.generateValue = function () {
          value = symbols[getRandom()];

      };

      this.getGeneratedValue = function () {
          return value;
      };
      
      this.isHidden = function () {
        return hidden;
      };
      
      this.hide = function () {
         hidden = true;
      };   

      this.show = function () {
         hidden = false;
      };

      this.getValue = function () {
        if (hidden) {
            return '*';
        } else{
            return value;
        }
            
      };
      this.setValue = function (newValue) {
        value = newValue;
      };

      var getRandom = function () {
          return Math.floor((Math.random() * 5));
      };
     
      /**
       * set the position of the element 
       * @param {x} x represents the axis x
       * @param {y} y represents the axis y
       */
      this.setPosXY = function(x,y){
        posX = x;
        posY = y;
      };
     
      this.getPosX=function(){
        return posX;
      };
      
      this.getPosY=function(){
        return posY;
      };
     
   
    };