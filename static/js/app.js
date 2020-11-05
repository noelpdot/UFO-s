// import data from data.js file and
// declare a variable tableData using const declaration
const tableData = data;

//reference the HTML table using d3(a javaScript library)
var tbody = d3.select('tbody');

// creating a new function to buildTable
function buildTable(data) {
    tbody.html("");
    
    // Next, Loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow => {
        //Append a row to the table body
        let row = tbody.append("tr");

        // loop through data rows
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
                }
            );
        });
    }

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // if-statement syntax
    // if (condition) {code to execute}

    // pseudo practice
    // if (a data is entered) {
    // filter the defaut data to show only the date enetered
    // }

    // check to see if a date was entered and filter
    //the data using that date
    if (date) {
        // apply filter to the table data to only keep the
        //rows where the datetime value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);   
    };
    // Rebuild the table using the filtered data
    // @note: if no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

// listen for events that occur on a webpage. 
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads
buildTable(tableData);

