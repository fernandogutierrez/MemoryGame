var Element = function () {
	var status='hidden';
	var value;
	var posX;
	var posY;

	this.getStatus = function (argument) {
		return status;
	}
    this.setStatus = function (s) {
         status = s;    
    }

}