function compute()
{
    // Simple Interest Formula
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let y = Number(document.getElementById("years").value);
    
    let si = (p * r * y) / 100;
    
    
    // Figure out the number of years
    currentDate = new Date();
    let year = currentDate.getFullYear();
    numYears = currentDate + y;
    
    
    // Output the results
    output = "If you deposit " + p + ",<br>" +
             "at an interest rate of " + r + "%.<br>" +
             "You will receive an amount of " + si + ",<br>" +
             "in the year " + numYears;
    
    document.getElementById("output").innerHTML("test");
    

}
        
