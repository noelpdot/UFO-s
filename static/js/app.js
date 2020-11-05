// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters ={}

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.

    // 4b. Save the value that was changed as a variable.

console.log (changedvariable)
    // 4c. Save the id of the filter that was changed as a variable.
  var changedinput=d3.select(this).select("input")
  var changedvariable=changedinput.property("value")
changedId=changedinput.attr("id")
  console.log(changedvariable)
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 if (changedvariable){
filters[changedId]=changedvariable
 }
 else{
delete filters[changedId]
 }
  console.log(filters)
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    var filterdata=tableData
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key,value])=>{
      console.log(value)
      console.log(key)
      filterdata=filterdata.filter(obj=>obj [key]==value)
    })
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filterdata)
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll(".filter").on("change",updateFilters)
  
  // Build the table when the page loads
  buildTable(tableData);
