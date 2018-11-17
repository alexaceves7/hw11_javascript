// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
var submit = d3.select("#filter-btn");

submit.on("click", function() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputElement);
    console.log(inputValue);

    var filterData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filterData);


    filterData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });

})


