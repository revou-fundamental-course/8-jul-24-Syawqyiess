function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const gender = document.getElementById('gender').value;

    if (height > 0 && weight > 0 && gender) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        let resultText = `Your BMI is ${bmi}. `;

        if (bmi < 18.5) {
            resultText += "You are underweight.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultText += "You have a normal weight.";
        } else if (bmi >= 25 && bmi < 29.9) {
            resultText += "You are overweight.";
        } else {
            resultText += "You are obese.";
        }

        document.getElementById('result').innerText = resultText;
    } else {
        document.getElementById('result').innerText = "Please enter valid height, weight, and gender.";
    }
}
