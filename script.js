
var exchangeForm = document.querySelector(".exchangeForm");

exchangeForm.onsubmit = function (e) {
    e.preventDefault();

    var elements = e.target.elements;
    var amount = elements[0].value;
    var currency = elements[1].value;

    if (currency == "dollar") {
        document.querySelector(".result").textContent = (`Amount equal ${amount * 3.5} nis`);
    }
    else if (currency == "dinar") {
        document.querySelector(".result").textContent = (`Amount equal ${amount * 5} nis`);
    }
    else {
        document.querySelector(".result").textContent = (`Amount equal ${amount} nis`);
    }
}
