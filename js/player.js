var Player=function(name, size){

    var name;

    this.setName= function (n) {
        name=n;
    };
    
    this.getName = function () {
        return name;
    }
};