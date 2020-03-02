
// create variable to hold data from data.js
var tableData = data;
console.log(tableData)

// Getting reference to table body 
var tbody = d3.select("tbody");

// function to build the table 
function ufoTable(data) {
    // Clear HTML, in order to create new data
    tbody.html("");
    // Using forEach to loop through each sighting object (each dictionary) in the data, 
    data.forEach((sighting) => {
        // Appending 'tr' element for each sighting to table body
        var row = tbody.append("tr");
        Object.values(sighting).forEach((val) => {
            // Append a cell to row for each of the values
            var cell = row.append("td");
            cell.text(val);
        });
    })
}
// When button is clicked, event triggers function
function handleClick() {
    // Select the input element and get the raw HTML node, and 
    // Get the value property of the input element
    var dateInput = d3.select("#datetime").property("value");
    console.log(dateInput);
    // Declaring variable that holds keys of each dictionaries
    var fData = tableData;
    // If date was inputed, then filter data.js 
    // keeping the rows that match the datetime value found in dataset. 
    if (dateInput) {
        fData = fData.filter((row) => row.datetime === dateInput);
    }
    ufoTable(fData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

ufoTable(tableData);

// data.forEach((weatherReport) => {
//   var row = tbody.append("tr");
//   Object.values(weatherReport).forEach((weatherReport) => {
//     var cell = row.append("td");
//     cell.text(weatherReport);
//   });
// });