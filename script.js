var r;

function showRate()
{   
    // Show current slider value
    r = Number(document.getElementById("rate").value);
    document.getElementById("currentRate").innerHTML = r + "%";
}



function compute()
{
    // Simple Interest Formula
    let p = Number(document.getElementById("principal").value);
    
    // Make sure that a non-zero or negative number is not entered
    if (p < 1)
	{
		alert("Please enter a positive number. :)");
		document.getElementById("principal").focus();
		return;
	}
    
    let r = Number(document.getElementById("rate").value);
    let y = Number(document.getElementById("years").value);
    
    let si = (p * r * y) / 100;
    
    
    // Figure out the number of years
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let numYears = year + y;
    

    
    
    // Output the results
    let output = "If you deposit <mark>" + p + "</mark>,<br>" + 
			     "at an interest rate of <mark>" + r + "%</mark>.<br>" + 
			     "You will receive an amount of <mark>" + si + "</mark>,<br>" + 
			     "in the year <mark>" + numYears + "</mark>.";
    
    document.getElementById("output").innerHTML = output;
	
	return false;
}
