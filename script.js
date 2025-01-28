function convert() {

    let degrees = parseFloat(document.getElementById("degrees").value);
    let temp_type = document.getElementById("temp-type").value;
    let convert_to = document.getElementById("convert-to").value;

    let result;
    let resultunit;

    if (temp_type === "Fahrenheit" && convert_to === "Celcius") {
        result = (degrees - 32) / 1.8
        resultunit = "°C"
    } else if (temp_type === "Celcius" && convert_to === "Fehrenheit") {
        result = (1.8 * (degrees)) + 32
        resultunit = "°F"
    } else if (temp_type === "Kelvin" && convert_to === "Celcius") {
        result = degrees - 273.15
        resultunit = "°C"
    } else if (temp_type === "Celcius" && convert_to === "Kelvin") {
        result = degrees + 273.15
        resultunit = "K"
    } else if (temp_type === "Kelvin" && convert_to === "Fehrenheit") {
        result = (1.8 * (degrees - 273.15)) + 32
        resultunit = "°F"
    } else if (temp_type === "Fehrenheit" && convert_to === "Kelvin") {
        result = ((degrees - 32) / 1.8) + 273.15
        resultunit = "K"
    } else if (temp_type === "Celcius" && convert_to === "Rankine") {
        result = (1.8 * (degrees)) + 32 + 459.67
        resultunit = "°Ra"
    } else if (temp_type === "Fehrenheit" && convert_to === "Rankine") {
        result = degrees + 459.67
        resultunit = "°Ra"
    } else if (temp_type === "Kelvin" && convert_to === "Rankine") {
        result = (1.8 * (degrees - 273.15)) + 32 + 459.67
        resultunit = "°Ra"
    } else if (temp_type === "Rankine" && convert_to === "Fehrenheit") {
        result = degrees - 459.67
        resultunit = "°F"
    } else if (temp_type === "Rankine" && convert_to === "Celcius") {
        result = (degrees - 459.67 - 32) / 1.8
        resultunit = "°C"
    } else if (temp_type === "Rankine" && convert_to === "Kelvin") {
        result = ((degrees - 459.67 - 32) / 1.8) + 273.15
        resultunit = "K"
    } else if (temp_type === "Celcius" && convert_to === "Réaumur") {
        result = 0.8 * degrees
        resultunit = "°Re"
    } else if (temp_type === "Fehrenheit" && convert_to === "Réaumur") {
        result = ((degrees - 32) / 1.8) * 0.8
        resultunit = "°Re"
    } else if (temp_type === "Kelvin" && convert_to === "Réaumur") {
        result = 0.8 * (degrees - 273.15)
        resultunit = "°Re"
    } else if (temp_type === "Rankine" && convert_to === "Réaumur") {
        result = (((degrees - 459.67) - 32) / 1.8) * 0.8
        resultunit = "°Re"
    } else if (temp_type === "Réaumur" && convert_to === "Fehrenheit") {
        result = (1.8 * (degrees * 1.25)) + 32
        resultunit = "°F"
    } else if (temp_type === "Réaumur" && convert_to === "Celcius") {
        result = 1.25 * degrees
        resultunit = "°C"
    } else if (temp_type === "Réaumur" && convert_to === "Kelvin") {
        result = (1.25 * degrees) + 273.15
        resultunit = "K"
    } else if (temp_type === "Réaumur" && convert_to === "Rankine") {
        result = (1.8 * (degrees * 1.25)) + 32 + 459.67
        resultunit = "°Ra"
    } else if (temp_type === "Celcius" && convert_to === "Celcius") {
        result = degrees
        resultunit = "°C"
    } else if (temp_type === "Fehrenheit" && convert_to === "Fehrenheit") {
        result = degrees
        resultunit = "°F"
    } else if (temp_type === "Kelvin" && convert_to === "Kelvin") {
        result = degrees
        resultunit = "K"
    } else if (temp_type === "Rankine" && convert_to === "Rankine") {
        result = degrees
        resultunit = "°Ra"
    } else if (temp_type === "Réaumur" && convert_to === "Réaumur") {
        result = degrees
        resultunit = "°Re"
    }

    document.getElementById("result").value = result.toFixed(2) + " " + resultunit

}