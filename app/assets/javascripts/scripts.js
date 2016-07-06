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

	/*
	var1 = 1
	var2 = 2
	init  [{"cmd" : "#setup" }]
	setup
		[{"cmd":"update", "id": "var1", "value":3.5},
	    {"cmd":"print", "value": "#var1"},
	    {"cmd":"#sum", "id": "var1", "value1":"#var1", "value2":"#var2"},
	    {"cmd":"print", "value": "#var1"},
	    {"cmd":"create", "id": "var3", "value":5},
	    {"cmd":"delete", "id": "var1"},
	    {"cmd":"#printAll"}]
	sum	
		[{"cmd":"add", "id": "$id", "operand1":"$value1", "operand2":"$value2"}]
	printAll
		[{"cmd":"print", "value": "#var1"},
	    {"cmd":"print", "value": "#var2"},
	    {"cmd":"print", "value": "#var3"}]
	
	
	*/

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
			console.log(var1);
			console.log(var2);
			console.log(var3);
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
		}
	}
};