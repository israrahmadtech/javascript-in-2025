const result = document.querySelector('.result');

function temperatureConverter(event) {
  event.preventDefault();

  const temperature = parseFloat(document.getElementById('temperature').value);
  const unit = document.getElementById('unit').value;

  let resultOne;
  let resultTwo;
  let message = '';

  if (isNaN(temperature)) {
    result.innerHTML = "❗ Please enter a valid number.";
    return;
  }

  switch (unit) {
    case 'celsius':
      resultOne = (temperature * 9 / 5) + 32;
      resultTwo = temperature + 273.15;
      message = `The temperature is ${resultOne.toFixed(2)} °F and ${resultTwo.toFixed(2)} K`;
      break;

    case 'fahrenheit':
      resultOne = (temperature - 32) * 5 / 9;
      resultTwo = resultOne + 273.15;
      message = `The temperature is ${resultOne.toFixed(2)} °C and ${resultTwo.toFixed(2)} K`;
      break;

    case 'kelvin':
      resultOne = temperature - 273.15;
      resultTwo = (resultOne * 9 / 5) + 32;
      message = `The temperature is ${resultOne.toFixed(2)} °C and  ${resultTwo.toFixed(2)} °F`;
      break;

    default:
      message = "⚠️ Please select a valid unit.";
  }

  result.innerHTML = message;
}
