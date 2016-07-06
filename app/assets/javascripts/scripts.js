// JavaScript Document

/*sample-script.txt*/
var fileUrl = 'sample-script.txt';

$.get(fileUrl, function(data) {
	//console.log(data);
var myObject = $.parseJSON(data);
	//console.log(myObject);
	generateFunctions(myObject);
});

var generateFunctions = function (object){

	// initializing two variables
	var var1 = object.var1, var2 = object.var2;

	// calling init function with object
	init(object);

	function init(object) {
		var command = object.init[0].cmd;
		runCommands(command, object);
	}

	function runCommands (name, object) {
	//console.log(name);
	//console.log(object);
		switch(name) {
			case '#setup':
			var1 = update(var1, object.setup[0].value);
			print(var1);
			var1 = sum(var1,var1,var2);
			print(var1);
			var var3 = 5;
			var1 = undefined;
			printAll();

			break;

			default: 
			//nothing much
		}
		function printAll() {
			var itemsToPrint = [var1,var2,var3];

			for (var i=0;i<itemsToPrint.length;i++){
				console.log(itemsToPrint[i]);
				$('ul').append('<li>' + itemsToPrint[i] + '</li>');	
			};
		}
		function update(val, newVal){
			val = newVal;
			return newVal;
		}
		function sum(id, operand1, operand2) {
			
			id = operand1+operand2;
			return id;
		}
		function print(valueToPrint){
			console.log(valueToPrint);
			$('ul').append('<li>' + valueToPrint + '</li>');
		}
	}
};