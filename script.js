function convertCurrency(event) {
    event.preventDefault();

    // Get the values from the form
    var amount = parseFloat(document.getElementById("amount").value);
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;

    // Perform the conversion (you can replace this with your own conversion logic)
    var conversionRate = getConversionRate(fromCurrency, toCurrency);
    var result = amount * conversionRate;

    // Display the result
    document.getElementById("result").innerHTML = `${amount} ${fromCurrency} is equal to ${result.toFixed(2)} ${toCurrency}`;
}

// Replace this function with your own conversion logic or API call
function getConversionRate(fromCurrency, toCurrency) {
    // Example conversion rates (replace with your own)
    var conversionRates = {
        "NPR": { "NPR": 1, "INR": 0.625, "KRW": 12.45, "USD": 0.009, "EUR": 0.007 },
        "INR": { "NPR": 1.6, "INR": 1, "KRW": 20.16, "USD": 0.012, "EUR": 0.009 },
        "KRW": { "NPR": 0.08, "INR": 0.05, "KRW": 1, "USD": 0.0008, "EUR": 0.0006 },
        "USD": { "NPR": 110.55, "INR": 73.94, "KRW": 1226.25, "USD": 1, "EUR": 0.82 },
        "EUR": { "NPR": 140.72, "INR": 89.65, "KRW": 1663.16, "USD": 1.22, "EUR": 1 }
    };

    return conversionRates[fromCurrency][toCurrency];
}

document.addEventListener("DOMContentLoaded", function () {
    // Check the user's preference for dark mode and update the UI accordingly
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.checked = localStorage.getItem("darkMode") === "enabled";
    updateDarkMode();

    // Add event listener for the dark mode toggle button
    darkModeToggle.addEventListener("change", function () {
        toggleDarkMode();
    });
});

function toggleDarkMode() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const isDarkModeEnabled = darkModeToggle.checked;

    if (isDarkModeEnabled) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
}

function updateDarkMode() {
    const isDarkModeEnabled = localStorage.getItem("darkMode") === "enabled";
    if (isDarkModeEnabled) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}
