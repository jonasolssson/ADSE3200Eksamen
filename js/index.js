function openPage(pageUrl){
    window.open(pageUrl);
}


var data1 = [
    {group: "Niger", value: 264257},
    {group: "Mali", value: 350110},
    {group: "Chad", value: 406573},
    {group: "Burkina Faso", value: 1814283}
 ];
 
 var data2 = [
    {group: "Niger", value: 1.018},
    {group: "Mali", value: 1.636},
    {group: "Chad", value: 2.343},
    {group: "Burkina Faso", value: 8.239}
 ];
 // set the dimensions and margins of the graph
 var margin = {top: 30, right: 30, bottom: 60, left: 70},

width = 500 - margin.left - margin.right;
height = 440 - margin.top - margin.bottom;

var svg = d3.select("#VizBox")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
 // Initialize the X axis
 var x = d3.scaleBand()
   .range([ 0, width ])
   .padding(0.2);
 var xAxis = svg.append("g")
   .attr("transform", "translate(0," + height + ")")
 
 // Initialize the Y axis
 var y = d3.scaleLinear()
   .range([ height, 0]);
 var yAxis = svg.append("g")
   .attr("class", "myYaxis")
 
 
 // A function that create / update the plot for a given variable:
 function update(data) {
 
   // Update the X axis
   x.domain(data.map(function(d) { return d.group; }))
   xAxis.call(d3.axisBottom(x))
 
   // Update the Y axis
   y.domain([0, d3.max(data, function(d) { return d.value }) ]);
   yAxis.transition().duration(1000).call(d3.axisLeft(y));
 
   // Create the u variable
   var u = svg.selectAll("rect")
     .data(data)
 
   u
     .enter()
     .append("rect") // Add a new rect for each new elements
     .merge(u) // get the already existing elements as well
     .transition() // and apply changes to all of them
     .duration(1000)
       .attr("x", function(d) { return x(d.group); })
       .attr("y", function(d) { return y(d.value); })
       .attr("width", x.bandwidth())
       .attr("height", function(d) { return height - y(d.value); })
       .attr("fill", "#ADD8E6")
       .attr("id", "rect")

       var tooltip = d3.select("#VizBox")
       .append("div")
         .style("position", "releative")
         .style("visibility", "hidden")
         .html("<h3>Hei</h3>");
 
    d3.select("#VizBox")
        .on("mouseover", function(){return tooltip.style("visibility", "visible");})
        .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
 }
 
 // Initialize the plot with the first dataset
 update(data1)





























/*
// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#VizBox")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv", function(data) {

// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.Country; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 13000])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.Country); })
    .attr("y", function(d) { return y(d.Value); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.Value); })
    .attr("id", "enSoyle")
    .attr("fill", "#69b3a2")

})

var tooltip = d3.select("#VizBox")
  .append("div")
    .style("position", "absolute")
    .style("visibility", "hidden") // den finnes, mouseover fungerer ikke
    .text("Tjohei");

//
d3.select("#enSoyle")
  .on("mouseover", function(){return tooltip.style("visibility", "visible");})
  .on("mouseout", function(){return tooltip.style("visibility", "hidden");});

*/




































/*
Fungerende sirkel
// Start by creating the svg area
var svg = d3.select("#VizBox")
  .append("svg")
    .attr("width", 400)
    .attr("height", 400)

// Append a circle
svg.append("circle")
  .attr("id", "circleBasicTooltip")
  .attr("cx", 150)
  .attr("cy", 200)
  .attr("r", 40)
  .attr("fill", "#69b3a2")

// create a tooltip
var tooltip = d3.select("#VizBox")
  .append("div")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .text("I'm a circle!");

//
d3.select("#circleBasicTooltip")
  .on("mouseover", function(){return tooltip.style("visibility", "visible");})
  .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
*/

























































/*
// UTEN CSV
// create 2 data_set
var data1 = [
    {group: "Niger", value: 264257},
    {group: "Mali", value: 350110},
    {group: "Chad", value: 406573},
    {group: "Burkina Faso", value: 1814283}
 ];
 
 var data2 = [
    {group: "Niger", value: 1.018},
    {group: "Mali", value: 1.636},
    {group: "Chad", value: 2.343},
    {group: "Burkina Faso", value: 8.239}
 ];
 // set the dimensions and margins of the graph
 var margin = {top: 30, right: 30, bottom: 60, left: 70},

width = 500 - margin.left - margin.right;
height = 440 - margin.top - margin.bottom;

var svg = d3.select("#VizBox")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
 // Initialize the X axis
 var x = d3.scaleBand()
   .range([ 0, width ])
   .padding(0.2);
 var xAxis = svg.append("g")
   .attr("transform", "translate(0," + height + ")")
 
 // Initialize the Y axis
 var y = d3.scaleLinear()
   .range([ height, 0]);
 var yAxis = svg.append("g")
   .attr("class", "myYaxis")
 
 
 // A function that create / update the plot for a given variable:
 function update(data) {
 
   // Update the X axis
   x.domain(data.map(function(d) { return d.group; }))
   xAxis.call(d3.axisBottom(x))
 
   // Update the Y axis
   y.domain([0, d3.max(data, function(d) { return d.value }) ]);
   yAxis.transition().duration(1000).call(d3.axisLeft(y));
 
   // Create the u variable
   var u = svg.selectAll("rect")
     .data(data)
 
   u
     .enter()
     .append("rect") // Add a new rect for each new elements
     .merge(u) // get the already existing elements as well
     .transition() // and apply changes to all of them
     .duration(1000)
       .attr("x", function(d) { return x(d.group); })
       .attr("y", function(d) { return y(d.value); })
       .attr("width", x.bandwidth())
       .attr("height", function(d) { return height - y(d.value); })
       .attr("fill", "black")
 
   
 }
 
 // Initialize the plot with the first dataset
 update(data1)
 */






































/*var margin = {top: 30, right: 30, bottom: 60, left: 70},

width = 500 - margin.left - margin.right;
height = 440 - margin.top - margin.bottom;

var svg = d3.select("#VizBox")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//text
svg.append("text")
.attr("transform", "translate(100,0)")
.attr("x", 50)
.attr("y", 5)
.attr("font-size", "24px")
.text("Placeholder");

// Initialize the X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .padding(0.2);
var xAxis = svg.append("g")
  .attr("transform", "translate(0," + height + ")")

// Initialize the Y axis
var y = d3.scaleLinear()
  .range([ height, 0]);
var yAxis = svg.append("g")
  .attr("class", "myYaxis")

// A function that create / update the plot for a given variable:
function update(selectedVar) {

  // Parse the Data
  d3.csv("/./csv/DataForUse.csv", function(data) {

    // X axis
    x.domain(data.map(function(d) { return d.group; }))
    xAxis.transition().duration(1000).call(d3.axisBottom(x))

    // Add Y axis
    y.domain([0, d3.max(data, function(d) { return +d[selectedVar] }) ]);
    yAxis.transition().duration(1000).call(d3.axisLeft(y));


 
    // variable u: map data to existing bars
    var u = svg.selectAll("rect")
      .data(data)

    // update bars
    u
      .enter()
      .append("rect")
      .merge(u)
      .transition()
      .duration(1000)
        .attr("id", "rect")
        .attr("x", function(d) { return x(d.group); })
        .attr("y", function(d) { return y(d[selectedVar]); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d[selectedVar]); })
        .attr("fill", "#ADD8E6")
        
  })
}

// Initialize plot
update('var1')*/

























