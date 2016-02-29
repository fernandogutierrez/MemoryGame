 var Element = function () {
     
      var value = '*';
      var posX;
      var posY;
      var symbols=['ƒ','$','@','#','%','†'];
      var hidden = true;

      /**
      * method to assign an value to an element
      */
      this.generateValue = function () {
          value = symbols[getRandom()];

      };
      this.getGeneratedValue = function (argument) {
          return value;
      }

      this.isHidden = function () {
        return hidden;
      }
      this.hide = function () {
         hidden = true;
      }    


      this.show = function () {
         hidden = false;
      }
      /**
       * return the value of the element that can be 'ƒ','$','@','#','%','†'
       */

      this.getValue = function () {
        if (hidden) {
            return '*';
        } else{
            return value;
        }
            
      } 
      this.setValue = function (newValue) {
        value = newValue;
      }

     /**
      * method to genererate a random number
      */
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
      /**
       * return an integer that represents axis x
       */
      this.getPosX=function(){
        return posX;
      };
      /**
        * return an integer that represents axis y
       */
      this.getPosY=function(){
        return posY;
      };
     
   
    };