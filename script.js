function calculateTip() {

var billAmt = document.getElementById("billamt").value;
var serQual = document.getElementById("serviceQual").value;
var pplamt = document.getElementById("peopleamt").value;

//Validate input
if (billAmt === "" || billAmt === "0" || billAmt <= "0") {
    alert("Please enter valid values");
    return;
    }
if (serQual === "0") {
    alert("Please select a service rate");
    return;
}
//Calculate with selected rate    
var endtotal = ((billAmt * serQual) / pplamt)
var endtotal = Math.round(endtotal * 100) / 100
//Display in HTML
document.getElementById("tip").innerHTML = endtotal;

}

document.getElementById("calculate").onclick = function() {
    calculateTip()
}