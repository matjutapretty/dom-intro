function PhoneBill () {

    let theCallTotal = 0.00;
    let theSmsTotal = 0.00;
    let theGrandTotal = 0.00;

function makeCall() {
    // call total should increase by 2.75
    theCallTotal += 2.75
}

function sendSms() {
    // sms total should increase by 0.75
    theSmsTotal += 0.75
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

return {
   makeCall,
   sendSms,
   callTotal,
   smsTotal,
   grandTotal
}

}
