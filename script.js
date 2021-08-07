function calc() {
    var height = parseFloat(document.getElementById("in1").value);
    var weight = parseFloat(document.getElementById("in2").value);
    var bmi = 0;

    let range1 = document.getElementById("range1").value;
    let range2 = document.getElementById("range2").value;
    if (range2 == "lbs") {
        weight = weight / 2.2;
    }
    if (range1 == "cm") {
        bmi = (weight / (height * height) / 10000);
    } else {
        bmi = weight / (height * height);
    }


    if (bmi < 18.6) {
        document.getElementById('out').value = bmi;
        document.getElementById('div').innerText = "under weight";
    } else if (bmi >= 18.6 && bmi < 24.9) {
        document.getElementById('out').value = bmi;
        document.getElementById('div').innerText = "normal range";
    } else if (bmi >= 25.0 && bmi < 29.9) {
        document.getElementById('out').value = bmi;
        document.getElementById('div').innerText = "over weight";
    } else if (bmi >= 30.0 && bmi < 34.9) {
        document.getElementById('out').value = bmi;
        document.getElementById('div').innerText = "obse class 1";
    } else if (bmi >= 35.0 && bmi < 39.9) {
        document.getElementById('out').value = bmi;
        document.getElementById('div').innerText = "obse class 2";
    } else if (bmi >= 40.0) {
        document.getElementById('out').value = bmi;
        document.getElementById('div').innerText = "obse class 3";
    }
}

function reset() {
    document.getElementById("in1").value = "";
    document.getElementById("in2").value = "";
    document.getElementById("out").value = "";
    document.getElementById("div").innerText = "";
}