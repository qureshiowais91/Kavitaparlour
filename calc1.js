

function getHistory() {
	return document.getElementById("history-output").innerText;

}

function printHistory(num) {
	document.getElementById("history-output").innerText =num;

}
    
function getOutput() {
	return document.getElementById("output-value").innerText;

}

function printOutput(num){
	if(num==""){
	document.getElementById("output-value").innerText=num;
	}
	else{
	document.getElementById("output-value").innerText =getFormattedNumber(num);
}

}

function getFormattedNumber(num) {
	var a = Number(num);
	var value = a.toLocaleString("en");
	return value;
}


function reverseNumberFormat(num) {
	return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){


		if(this.id=="clear"){
		printHistory("");
		printOutput("");
	}

	if(this.id=="backspace"){
		var output = reverseNumberFormat(getOutput()).toString();
		output=output.substr(0,output.length-1);
		printOutput(output);
	}



	});
	}
	
var number = document.getElementsByClassName("number");
for(var a=0;a<number.length;a++){
	number[a].addEventListener('click',function(){

		var output =reverseNumberFormat(getOutput());
		if(output!=NaN){
			output=output+this.id;
			printOutput(output);
		}
	});
	}

