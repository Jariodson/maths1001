function show (name)
{
	var elem = document.getElementById(name);
	if(elem)
	elem.style.display = "block";
}
function check()
{
	if ( test1.answer1.value == "0")
	    alert("Правильно!");
	    else alert("Непрвильно");
}

