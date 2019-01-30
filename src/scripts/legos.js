// Event listener on save button that will add creation to json
saveButton.addEventListener("click", (event) => {

    // Select the user input values
    const creator = document.querySelector("#lego__creator").value;
    const color = document.querySelector("#lego__color").value;
    const shape = document.querySelector("#lego__shape").value;
    const creation = document.querySelector("#lego__creation").value;

    // Create new json object from user input
    const legoToSave = {
        creator: creator,
        color: color,
        shape: shape,
        creation: creation
    }

    // Post newly made object to json collection
    fetch("http://localhost:8088/legoCreations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoToSave)
    })

});