/**
 * Created by LuceroPenarrieta on 2/4/2016.
 */
var Table=function(){
    var iMaxNum = 5;
    var i, j;
    var newArray = new Array(iMaxNum + 1);
    for (i = 1; i <= iMaxNum; i++)
    {
        newArray[i] = new Array(iMaxNum + 1);
        for (j = 1; j <= iMaxNum; j++)
        {
            newArray[i][j] = "*";
            console.log(newArray[i][j]);

        }
    }

    this.display=function(){
        for (i = 1; i <= iMaxNum; i++){
            for (j = 1; j <= iMaxNum; j++)
            {
                console.log(newArray[i][j].concat("*"));
            }
        }
    };
};