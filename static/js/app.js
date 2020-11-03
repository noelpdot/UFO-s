// import data from data.js file and
// declare a variable tableData using const declaration
const tableData = data;

//reference the HTML table using d3(a javaScript library)
var tbody = d3.select('tbody');

// creating a new function 
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


