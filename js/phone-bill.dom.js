//increaseCall ????

const callTotalElem = document.querySelector(".callTotal");
const smsTotalElem = document.querySelector(".smsTotal");
const totalElem = document.querySelector(".grandTotal");

const makeCallBtn = document.querySelector(".makeCall");
const sendSmsBtn = document.querySelector(".sendSms");

const phoneBill = PhoneBill()

// phoneBill.makeCall();
// phoneBill.sendSms();

// this put the totals on the screen that comes from the Factory Function
callTotalElem.innerHTML = phoneBill.callTotal().toFixed(2);
smsTotalElem.innerHTML = phoneBill.smsTotal().toFixed(2);
totalElem.innerHTML = phoneBill.grandTotal().toFixed(2);

//phoneBill.callTotal();
//phoneBill.smsTotal();
//phoneBill.grandTotal();

makeCallBtn.addEventListener('click', function() {
    //update the factory functions
    phoneBill.makeCall();
    //show the new value
    callTotalElem.innerHTML = phoneBill.callTotal().toFixed(2);
    totalElem.innerHTML = phoneBill.grandTotal().toFixed(2);
});
sendSmsBtn.addEventListener('click', function() {
    //update the factory functions
    phoneBill.sendSms();
    //show the new value
    smsTotalElem.innerHTML = phoneBill.smsTotal().toFixed(2);
    totalElem.innerHTML = phoneBill.grandTotal().toFixed(2);
});