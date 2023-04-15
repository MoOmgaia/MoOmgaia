function _1(md){return(
md`# Clouds`
)}

function* _clouds(d3,seed,width)
{
  const height = 300;
  const frequency = 0.011;
  const octaves = 5;
  const blur_intensity = 23;
  const scale = 140;
  const cloud_opacity = 0.2;
  const cloud_number = 47;
  
  const cloudColors = d3.scaleLinear().domain([0, 1]).range(["#c7dae2","#5c90a6"]); //"#ffffff","#bfbfbf"
  const random = d3.randomLcg(seed);
  
  const cloudData = [];
  for (let i=0; i<cloud_number; i++) { cloudData.push({ x:Math.floor(random() * width), y: Math.floor(random() * height), color:cloudColors(random()) }) }
 
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height+100])
      .attr("id", "CLOUDS");

  const defs = svg.append("defs");  
  const cloud_filter = defs.append("filter").attr("id","cloud")
    .attr("height","300%")
    .attr("width","300%")
    .attr("y","-100%")
    .attr("x","-100%");

  cloud_filter.append("feColorMatrix")
		.attr("type", "matrix")
		.attr("values", `0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 0 ${cloud_opacity} 0`);

  cloud_filter.append("feTurbulence")
    .attr("type", "fractalNoise")
    .attr("baseFrequency", frequency)
    .attr("numOctaves", octaves)
    .attr("seed", "462")
    .attr("result", "noise1");
  
  cloud_filter.append("feGaussianBlur")
	  .attr("stdDeviation", blur_intensity)
	  .attr("in", "SourceGraphic");

  cloud_filter.append("feDisplacementMap")
	  .attr("scale", scale)
	  .attr("in2", "noise1")
    .attr("result", "cloud1");

  
  svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "#89b4c5"); // #89b4c5 #292929
  
  const allClouds = svg.selectAll("ellipse").data(cloudData);

  // UPDATE
  allClouds
    .transition() // <---- Here is the transition
      .duration(5000) // 2 seconds
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .style("fill", d => d.color) // 2 seconds;
    //.end();

  // ENTER
  let cloud = allClouds.enter().append("ellipse");
  cloud
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("rx", "120")
    .attr("ry", "40")
    .style("filter", "url(#cloud)")
    .style("fill", d => d.color); // 2 seconds;

  // EXIT
     allClouds
        .exit()
        .remove();  

  yield svg.node();
}


function _seed(pulsar){return(
pulsar([123,229,315,401,56], 0.5)
)}

function _pulsar(Promises){return(
function* pulsar(list, speed) {
  let i = 0;
  yield list[i];
  do {
    yield Promises.tick(1000 / speed, list[i]);
    i = (i + 1) % list.length;
  } while (true);
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("clouds")).define("clouds", ["d3","seed","width"], _clouds);
  main.variable(observer("seed")).define("seed", ["pulsar"], _seed);
  main.variable(observer("pulsar")).define("pulsar", ["Promises"], _pulsar);
  return main;
}
