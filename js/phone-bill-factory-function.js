function PhoneBill () {

    let theCallTotal = 0.00;
    let theSmsTotal = 0.00;

function makeCall() {
    // call total should increase by 2.75
    if (grandTotal() <= 50) {
        theCallTotal += 2.75
    }
}

function sendSms() {
    // sms total should increase by 0.75
    if (grandTotal() <= 50) {
        theSmsTotal += 0.75
    }
}

function callTotal() {
    return theCallTotal
}

function smsTotal() {
    return theSmsTotal
}

function grandTotal() {
    return theCallTotal + theSmsTotal;
}

function totalStyle() {
    if (grandTotal() >= 30 && grandTotal() < 50) {
        return "warning"
    }
    else if (grandTotal() >= 50) {
        return "danger";
    }
    return "";
}

return {
   makeCall,
   sendSms,
   callTotal,
   smsTotal,
   grandTotal,
   totalStyle
}

}
