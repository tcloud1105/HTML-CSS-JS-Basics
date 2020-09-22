alert("i am the pop up windows")

// single-line comment
/*
multiple line comment
*/


// Variable
var name = "cedric"

// If Statement
var condition = true
if(condition){
	alert("condition is true");
}else{
	alert("condition is false");
}

// SWITCH Statement
var condition = 1;

switch(condition){
	case 1:
	alert("condition is 1");
	break;
	case 2:
	alert("condition is 2");
	break;
	case 3:
	alert("condition is 3");
	break;
	default:
	alert("default value");
}

// WHILE Statement
var counter = 1:
while(counter<=10){
	alert("This is a pop up window "+ i);
	counter++;
}

// FOR Statement
for(var counter=1;counter<=10;counter++){
	console.log(i);
}

// Array
 var names = [1,2,3]
 
 
 // Function
 function function_name(arg1,arg2){
	 alert("the first argument is "+arg1);
	 alert("the second argument is "+ arg2);
	
 }
 
 // CALLING THE FUNCTION
 function_name("argument 1","argument 2");
 
 // DOM Manipulation
 // Absolute Selection
 var first = document.getElementById('first');
 var content = first.innerText // to retrieve the text of selected element
 first.innerText = "New content" // change the text of the selected element
 
 var ul = document.getElementById('ul')
 var htmlcontent = ul.innerHTML;// Retrieve the HTML content of the selected element
 ul.innerHTML = "<p>new content </p>"; // set a new content
 
 // Relative Selection
 var parentElement = document.getElementById('ul');
 var element1 = parentElement.firstElementChild;// select Type 1 Node
 var node1 = parentElement.firstChild; // any first node
 parentElement.firstElementChild.nodeType; // nodeType attribue returns the type of node 
 parentElement.childElementCount // return the number of node type 1
 parentElement.childNodes // return an array of all nodes
 
 parentElement.lastChild // return the last child node
 parentElement.lastElementChild // return the last element
 
 parentElement.firstElementChild.nextSibling;// return next node
 parentElement.firstElementChild.nextElementSibling;// return the next element sibling
 
 parentElement.firstElementChild.previousSibling; // return the previous node
 parentElement.firstElementChild.previousElementSibling;// return the previous element sibling
 
 parentElement.children;// return arrays of all children
 
 // Creating a new element
 var img = document.createElement('img');
 img.src="./images/image.jpg";
 img.alt="Set by JS";
 img.title="image";
 img.style.width = '100px';
 
 var node = document.createTextNodeNode('I am text node');
 var p = document.createElement('p');
 p.appendChild(node)
 
 // Inserting Created Element
 var newli = document.createElement('li');
 var first = document.getElementById('first');
 first.parentElement.insertBefore(newli,first);
 
 // Deleting Element
 
 