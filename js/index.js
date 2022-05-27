function openPage(pageUrl){
    window.open(pageUrl);
}



//Best So Far
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

    // By Tomas S.(etter akser)
 var tooltip = d3.select("body").append("div").attr("class", "toolTip");   
    // END by Tomas S.
 
 
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
     .attr("x", function(d) { return x(d.group); })
       .attr("y", function(d) { return y(d.value); })
       .attr("width", x.bandwidth())
       .attr("height", function(d) { return height - y(d.value); })
       .attr("fill", "#ADD8E6")
     .merge(u) // get the already existing elements as well
     .transition() // and apply changes to all of them
     .duration(1000)
     // By Tomas S.
     // Based on this example:
     // https://bl.ocks.org/alandunning/274bf248fd0f362d64674920e85c1eb7
     .on("mousemove", function(d){
        tooltip
          .style("left", d3.event.pageX - 75 + "px")
          .style("top", d3.event.pageY + 25 + "px")
          .style("display", "inline-block")
          .html("Land: " + (d.group) + "<br>" + "Verdi: " + (d.value));
    })
    .on("mouseout", function(d){ tooltip.style("display", "none");})
    // END by Tomas S.
       
       
  }
 // Initialize the plot with the first dataset
 update(data1)




/*
   // By Tomas S.(etter akser)
 var tooltip = d3.select("body").append("div").attr("class", "toolTip");   
 // END by Tomas S.
*/




