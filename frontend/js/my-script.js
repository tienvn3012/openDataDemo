var chart = null;
var barData = {};
var allData = null;

function allowDrop(ev) {
	ev.preventDefault();
}
 
function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}
 
function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	if(ev.target.id == "drop-data"){
		if(document.getElementById(data).getAttribute("data-type") < "2"){
			alert("can't drop here !");
			return;
		}
	}
    if(ev.target.id == "drop-object"){
        if(document.getElementById(data).getAttribute("data-type") > "1"){
            alert("can't drop here !");
            return;
        }
    }
	ev.target.appendChild(document.getElementById(data));
}

// function build_chart(){
// 	var barData = {
//     labels : ["January","February","March","April","May","June"],
//     datasets : [
//         {
//             fillColor : "#48A497",
//             strokeColor : "#48A4D1",
//             data : [456,479,324,569,702,600]
//         },
//         {
//             fillColor : "rgba(73,188,170,0.4)",
//             strokeColor : "rgba(72,174,209,0.4)",
//             data : [364,504,605,400,345,320]
//         }
//         ]
//     }
 
//     // get bar chart canvas
//     var income = document.getElementById("chart").getContext("2d");
 
//     // draw bar chart
//     new Chart(income).Bar(barData);
// }



//draw bar chart
function bar_chart(labels,data){
    
    var datasets = [];
    var dat = {};
    barData['labels'] = labels;
    if(data != null){
        for(var i=0;i<data.length;i++){
        dat = {};
        dat['fillColor'] = get_random_color();
        dat['strokeColor'] = get_random_color();
        dat['data'] = data[i];
        datasets.push(dat);
        }
    }
    barData['datasets'] = datasets;
 
    var p = document.getElementById("histogram");
    
    p.removeChild(document.getElementById("chart"));
    p.innerHTML = '<canvas id="chart" width="600" height="400" ></canvas>';
    // get bar chart canvas
    var income = document.getElementById("chart").getContext("2d");
    
    // draw bar chart
   
        chart = new Chart(income).Bar(barData);
    
}


//this function isn't running :(
function clear_chart(){ 
if(typeof chart != 'undefined'){
        chart.clear();
        return;
    }
}

function get_random_color() {
  function c() {
    var hex = Math.floor(Math.random()*256).toString(16);
    return ("0"+String(hex)).substr(-2); // pad with zero
  }
  return "#"+c()+c()+c();
}


