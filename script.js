// Use insert() function to insert the number in textview.  
function insert(num, curop) {
	document.getElementById(curop).innerHTML = document.getElementById(curop).innerHTML + num;
	document.getElementById('previous-operand').innerHTML = "";
}

// Use equal() function to return the result based on passed values.  
function equal(curop, preop, query, hist) {
	var exp = document.getElementById(curop).innerHTML;	
	if (exp != " ") {
		if(exp.includes("^")){
			exp = exp.replace("^", "**");
		}
		document.getElementById(preop).innerHTML = document.getElementById(curop).innerHTML;
		document.getElementById(curop).innerHTML = eval(exp);
		addToHistory(eval(exp), preop, query, hist);
	}

}

// For backspace
function backspace(curop, preop) {
	document.getElementById(preop).innerHTML = "";
	var exp = document.getElementById(curop).innerHTML;
	document.getElementById(curop).innerHTML = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */
}

//Clear all
function clearall(curop, preop) {
	document.getElementById(curop).innerHTML = '';
	document.getElementById(preop).innerHTML = '';
}


//Adding History of calculator
let history = [''];
let data = [''];
var arr = [];

// preop - previous operand
// hist  - sci history (main ans)
// query - sci query (question)
// value - expression is also answer
function addToHistory(value, preop, query, hist) {
	var total = '';
	arr = [];

	history.push(value);
	data.push(document.getElementById(preop).innerHTML);
	for (var i = 0; i < history.length; i++) {
		arr.push(data[i] + " = " + history[i] + " ");
		// window.alert(arr[i]);
	}
	document.getElementById(hist).innerHTML = " ";
	document.getElementById(query).innerHTML = " ";

	for (var j = arr.length - 1; j > 0; j--) {
		document.getElementById(hist).innerHTML += "" + arr[j] + "<hr>";
	}
}



//Clearing History
function clearhistory(query, hist) {

	while (history.length > 1) {
		arr.pop();
		history.pop();
		data.pop();
	}
	document.getElementById(hist).innerHTML = " ";
	document.getElementById(query).innerHTML = " ";

}


//Show History mobile view with localStorage

function showhistory() {
	if (localStorage.getItem('currentCalculator') == 'scientific') {
		if (document.getElementById('sci-operation-history').style.display == "block") {
			document.getElementById('sci-operation-history').style.display = "none";
		} else {
			document.getElementById('sci-operation-history').style.display = "block";
		}	
	}

}

function trigofunctions(value) {
	var x = document.getElementById('sci-current-operand');
	var y = document.getElementById('sci-previous-operand');
	var ansop;
	if(value == 'sin') {
		ansop = Math.sin(x.innerHTML);
		y.innerHTML = "sin (" + x.innerHTML + " )";
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');
	}
	else if(value == 'cos') {
		ansop = Math.cos(x.innerHTML);
		y.innerHTML = "cos (" + x.innerHTML + " )";
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');
	}
	else if(value == 'tan') {
		ansop = Math.tan(x.innerHTML);
		y.innerHTML = "tan (" + x.innerHTML + " )";
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');

	}
	else if(value == 'sec') {
		ansop = 1/Math.cos(x.innerHTML);
		y.innerHTML = "sec (" + x.innerHTML + " )";
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');

	}
	
	else{
		alert("Error");
	}
} 


function basicfunctions(value) {
	var x = document.getElementById('sci-current-operand');
	var y = document.getElementById('sci-previous-operand');
	var ansop;
	if(value == 'floor') {
		ansop = Math.floor(x.innerHTML);
		y.innerHTML = "floor (" + x.innerHTML + " )";
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');
	}
	else if(value == 'ceil') {
		ansop = Math.ceil(x.innerHTML);
		y.innerHTML = "ceil (" + x.innerHTML + " )";
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');
	}
	else if(value == 'round') {
		ansop = Math.round(x.innerHTML);
		y.innerHTML = "round (" + x.innerHTML + " )";
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');
	}
	else if(value == 'degree') {
		ansop = x.innerHTML * Math.PI / 180;
		y.innerHTML = "degree (" + x.innerHTML + " )";
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');
	}
	else if(value == 'rand') {
		ansop = Math.random();
		x.innerHTML = ansop;
		// addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');
	}
}



//Scientific calc
function scientificfun(op) {
	var x = document.getElementById('sci-current-operand');
	var y = document.getElementById('sci-previous-operand');
	var ansop;
	if (op == 'square') {
		ansop = Math.pow(x.innerHTML, 2);
		y.innerHTML = x.innerHTML + "^2";
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');
	}
	else if (op == 'cube') {
		ansop = Math.pow(x.innerHTML, 3);
		y.innerHTML = x.innerHTML + "^3";
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');

	}
	else if (op == 'sqrt') {
		ansop = Math.sqrt(x.innerHTML);
		y.innerHTML = "√" + x.innerHTML;
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');

	}
	else if (op == 'log') {
		ansop = Math.log(x.innerHTML);
		y.innerHTML = "log" + x.innerHTML;
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');

	}
	else if (op == '1byx') {
		ansop = 1 / x.innerHTML;
		y.innerHTML = "1/" + x.innerHTML;
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');

	}
	else if (op == 'abs') {
		ansop = Math.abs(x.innerHTML);
		y.innerHTML = "|" + x.innerHTML + "|";
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');

	}
	else if(op == 'factorial') {
		ansop = 1;
		for(var i = 1; i <= x.innerHTML; i++) {
			ansop *= i;
		}
		y.innerHTML = x.innerHTML + "!";
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');

	}
	else if(op == '10raisex'){
		ansop = Math.pow(10, x.innerHTML);
		y.innerHTML = "10^" + x.innerHTML;
		x.innerHTML = ansop;
		addToHistory(ansop, 'sci-previous-operand', 'sci-query', 'sci-history');

	}
	else {
		alert("Error");
	}

}



function showScientific() {
	document.getElementById('Scientific').style.display = "block";
	localStorage.setItem('currentCalculator', 'scientific');
	document.getElementById('currency-con').style.display = "none";
	document.getElementById('show-history-btn').style.display = "block";
	document.getElementById('calc-type').innerHTML = "Scientific";
	
}
