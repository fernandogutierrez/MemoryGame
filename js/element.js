 var Element = function () {
     
      var value = '*';
      var posX;
      var posY;
      var symbols=['ƒ','$','@','#','%','†',
                   'S','X','A','B','C','D',
                   'E','F','G','H','I','J',
                   'K','L','M','N','O','P',
                   'Q','R','T','U','V','W',
                   'Y','Z'];
      var hidden = true;

      /**
       * This method is to generate a random value
       */
      this.generateValue = function () {
          value = symbols[getRandom()];
      };
      /**
       * This method returns the generated value
       */
      this.getGeneratedValue = function () {
          return value;
      };
      /**
       * This method say us if the element is hidden 
       */
      this.isHidden = function () {
        return hidden;
      };
      /**
       * This method is to hide elements
       */
      this.hide = function () {
         hidden = true;
      };   
      /*
       * This method is to reveal the hidden element
       */
      this.show = function () {
         hidden = false;
      };
      /*
        This method is to return the current value of the Element that was generated
       */
      this.getValue = function () {
        if (hidden) {
            return '*';
        } else{
            return value;
        }
            
      };
      /*
        This method is to change the current value of the Element
       */
      this.setValue = function (newValue) {
        value = newValue;
      };
      /*
       * This method is to generated a random number from 0 to 32
       */
      var getRandom = function () {
          return Math.floor((Math.random() * 32));
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
       * This method returns pos X for the Element
       */
      this.getPosX=function(){
        return posX;
      };
      /*
       * This method returns pos Y for the Element 
       */
      this.getPosY=function(){
        return posY;
      };
     
   
    };