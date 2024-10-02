function bodyMassIndex () {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    var result = weight / (height/100.0 * height/100.0)

    if (result <= 18.4) {
        console.log("Body mass index is " + result.toFixed(2) + " (Weight less than normal weight)")
    }
    if (result >= 18.0 &&  result <= 24.9) {
        console.log("Body mass index is " + result.toFixed(2) + " (Normal weight)")
        else
            console.log("Body mass index is " + result.toFixed(2) + " (Overweight)")
    }

}