// Function to build color options for dropdown
const colorOptionPrinter = (color) => {
    return `<option value="${color.id}">${color.name}</option>`
}

// Dynamically populate color dropdown menu by fetching options from local API
fetch("http://localhost:8088/colors")
    .then(response => response.json())
    .then(parsedColors => {
        parsedColors.forEach(color => {
            let newColorOption = colorOptionPrinter(color);
            colorOptions.innerHTML += newColorOption;
        });
    });