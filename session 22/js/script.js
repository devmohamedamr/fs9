function salary() {
    return document.getElementById("salary").value;
}

function bp() {
    let b = document.getElementById("pp").value;
    if (b > 0) {
        return b;

    } else {
        return 1;
    }
}

function tp() {
    let t = document.getElementById("tp").value;
    if (t > 0) {
        return t;

    } else {
        return 1;
    }
}


function ip() {
    return document.getElementById("ip").value;
}

function print(text, loc) {
    document.getElementById(loc).innerHTML = text;
}

// ===========================================
function printbouns(b) {
    let bafter = parseInt(b);

    let text = "Bonus = " + bafter + "EGP";
    print(text, "textbouns");
}

function printtaxes(taxes) {
    let taxesafter = parseInt(taxes);
    let texttaxes = "taxes = " + taxesafter + "EGP";
    print(texttaxes, "texttaxes");
}

function printinsurance(insurance) {
    let insuranceafter = parseInt(insurance);

    let textinsurance = "insurance = " + insuranceafter + "EGP";
    print(textinsurance, "textinsurance");
}

function printfinal(final) {
    let finalafter = parseInt(final);

    let textfinal = "final = " + finalafter + "EGP";
    print(textfinal, "textfinal");

}

// lunch program
let res = function() {
    // var
    let Bonus = salary() * bp() / 100;
    let taxes = ((salary() + Bonus) * (tp() / 100));
    let insurance = salary() * 5 / 100;
    let final = (salary() + Bonus) - (taxes + insurance);

    // methods
    printbouns(Bonus);
    printtaxes(taxes);
    printinsurance(insurance);
    printfinal(final);
}