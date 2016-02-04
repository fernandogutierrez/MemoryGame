/**
 * Created by LuceroPenarrieta on 2/4/2016.
 */

var Player=function(){
    var name;
    var posxy;
    /**
     *
     * @param n this string recive the name of the player
     */
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
};