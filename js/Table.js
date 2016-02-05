/**
 * Created by LuceroPenarrieta on 2/4/2016.
 */


var Table=function(){
    var iMaxNum = 5;
    var i, j;
    var v;
    var symbols=['*','$','@','#','%'];
    this.newArray = [];//new Array(iMaxNum - 1);


    var getRandom= function(){
        return Math.floor((Math.random()*5));
    };
    for (i = 0; i <= iMaxNum; i++)
    {
        this.newArray[i] = [];
        for (j = 0; j <= iMaxNum; j++)
        {
            this.newArray[i][j] = symbols[getRandom()];
        }
    }

    this.display=function(){
        for (i = 0; i <= iMaxNum; i++){
            //for (j = 0; j <= iMaxNum; j++)
            //{
            //    v=this.newArray[i][j];
            //}
            //console.log(newArray[i]);
            console.log(i, this.newArray[i].join(' - '));
        }
    };



};