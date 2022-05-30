


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
// Dimensions and margins
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

var tooltip = d3.select("body").append("div").attr("class", "toolTip");   

// Update function called when changing variables
function update(data) {

 // X-axis update
 x.domain(data.map(function(d) { return d.group; }))
 xAxis.call(d3.axisBottom(x))

 // Y-axis update
 y.domain([0, d3.max(data, function(d) { return d.value }) ]);
 yAxis.transition().duration(1000).call(d3.axisLeft(y));

 // Create the u variable
 var u = svg.selectAll("rect")
 // Tooltip-attributes by Tomas Sandnes
 .on("mousemove", function(d){
  tooltip
    .style("left", d3.event.pageX - 75 + "px")
    .style("top", d3.event.pageY + 25 + "px")
    .style("display", "inline-block")
    .html("Land: " + (d.group) + "<br>" + "Verdi: " + (d.value));})
  .data(data)
   

.on("mouseout", function(d){ tooltip.style("display", "none");})
 u
   .enter()
   .append("rect") 
   .merge(u) 
   .transition() 
   .duration(1000)
     .attr("x", function(d) { return x(d.group); })
     .attr("y", function(d) { return y(d.value); })
     .attr("width", x.bandwidth())
     .attr("height", function(d) { return height - y(d.value); })
     .attr("fill", "#ADD8E6")

}

update(data2)
update(data1)