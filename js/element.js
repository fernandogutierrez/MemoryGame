 var Element = function () {
      var status='hidden';
      var value = '*';
      var posX;
      var posY;
        var symbols=['ƒ','$','@','#','%','†'];


      this.getRandom = function () {
          return Math.floor((Math.random() * 5));
      };

      this.generateValue = function () {
          value = symbols[this.getRandom()];
      };
    
      this.getStatus = function (argument) {
            return status;
        }
        this.setStatus = function (s) {
                status = s;    
        }
        this.display = function () {
            console.log(value);
        };
        this.getValue=function (argument) {
            return value;
        } 
     
   
    };