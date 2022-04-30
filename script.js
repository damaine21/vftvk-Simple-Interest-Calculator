function compute()
{
    // Simple Interest Formula
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    
    i = (p * r * y) / 100;
    
    
    // Figure out the number of years
    currentDate = new Date();
    let year = currentDate.getFullYear();
    numYears = currentDate + y;
    
    
    // Output the results
    output = "If you deposit " + p + ",<br>" +
             "at an interest rate of " + r + "%.<br>" +
             "You will receive an amount of " + i + ",<br>" +
             "in the year " + numYears;
    
    document.getElementById("output").innerHTML(output);
    

}
        
