function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    
    i = p(1 + (r*t));
    
    output = "If you deposit " + p + ",<br>" +
             "at an interest rate of " + r + "%.<br>" +
             "You will receive an amount of " + i + ",<br>" +
             "in the year " + y;
    
    document.getElementById("output").innerHTML(output);
}
        
