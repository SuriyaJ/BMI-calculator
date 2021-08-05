var height = parseFloat(prompt("enter the height in cm:"));
var weight = parseFloat(prompt("enter the weight in kg:"));

if (height == "")
    document.write("Provide a valid Height!");

else if (weight == "")
    document.write("Provide a valid Weight!");
else {


    var bmi = weight / (height * height);


    if (bmi < 18.6) {
        console.log(bmi + ":Underweight")
        document.write(bmi + ":underweight");
    } else if (bmi >= 18.6 && bmi < 24.9) {
        console.log(bmi + ":normal range")
        document.write(bmi + ":normal range");
    } else if (bmi >= 25.0 && bmi < 29.9) {
        console.log(bmi + ":Over weight")
        document.write(bmi + ":Over weight");
    } else if (bmi >= 30.0 && bmi < 34.9) {
        console.log(bmi + ":obse class 1")
        document.write(bmi + ":obse class 1");
    } else if (bmi >= 35.0 && bmi < 39.9) {
        console.log(bmi + ":obse class 2")
        document.write(bmi + ":obse class 2");
    } else if (bmi >= 40.0) {
        console.log(bmi + ":obse class 3")
        document.write(bmi + ":obse class 3");
    }
}