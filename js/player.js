var Player=function(name, size){

    var name;
     
    /*
      This method is to set the name of the player
     */ 
    this.setName= function (n) {
        name=n;
    };
    /*
     * This method is to return name of the player 
     */
    this.getName = function () {
        return name;
    }
};