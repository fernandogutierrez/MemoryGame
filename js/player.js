var Player=function(name, size){
    var posxy;

    this.setName= function (n) {
        name=n;
    };
    this.setPosXY= function (pxy) {
        posxy=pxy;
    };
    this.getName= function () {
        return name;
    };
    this.getPosXY= function () {
        return posxy;
    };
    this.getSize = function () {
        return size;
    };
};