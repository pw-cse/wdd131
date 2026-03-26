// FOOTER
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;


// WEATHER VALUES (STATIC)
const temp = 10; // °C
const speed = 5; // km/h


// WIND CHILL FUNCTION
function calculateWindChill(t, v) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}


// DISPLAY WIND CHILL
const windChill = document.querySelector("#windchill");

if (temp <= 10 && speed > 4.8) {
    windChill.textContent = calculateWindChill(temp, speed) + " °C";
} else {
    windChill.textContent = "N/A";
}