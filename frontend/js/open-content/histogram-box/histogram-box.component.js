var x = 0
angular.module("histogramBox").
	component("histogramBox",{
		templateUrl : "/frontend/view/open-content/histogram-box/histogram-box.template.html",
		controller : function histogramBox(){
			this.var = "click";
			this.but = "clear";
			this.clear = function(){
				clear_chart();
			};
			var labels = ["January","February","March","April","May","June"];
			var data = [];
			data[0] = [456,479,324,569,702,600];
			
			this.click = function(){
				if(x == 0){
					bar_chart(labels,null);
					x++;
				}else if(x == 1){
					bar_chart(labels,data);
					x++;
				}else{
					data[x-1] = [364,504,605,400,345,320];
					bar_chart(labels,data);
					x++;
				}
				
			};
		}
	});