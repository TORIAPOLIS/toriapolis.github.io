//Madlibs Javascript
//by Victoria Yuen-Ruan 
//www.yuenruan.me

//Does my JS work? 
console.log("Testing Testing!"); 

//Capture the list submit! 
document.list.onsubmit=capture; 

//define capture function 
function capture(){

	//store all the madlibs input into variables!
	var user=document.list.user.value;
	var n1=document.list.n1.value;
	var a1=document.list.a1.value;
	var n2=document.list.n2.value;
	var v1=document.list.v1.value;
	var p1=document.list.p1.value;
	var number1=document.list.number1.value;
	var pn1=document.list.pn1.value;

	//store loveletter into a variable! 
	var loveletter=document.getElementById("loveletter"); 



	if (!loveletter || !user || !n1 || !a1 || !n2 || !v1 || !p1 || !number1 || !pn1){
		sweetAlert("Oops...", "Did you remember to fill out the whole form?", "error");

	}

	//push new submission to loveletter
	loveletter.innerHTML="Dear " + user + ", I love you. You are the " + n1 + " to my heart, as well as the " + a1 + " "  + n2 +  " I know. " 
 	+ v1 + " me and tell me how awesome I am (and when I say me, I mean you)! Let's go to "
 	+ p1 + " and celebrate your existence. I hope you wake up to " + number1 + 
  	" " + pn1 + " smiling down upon you. Love, Me. ";

	return false;

}

