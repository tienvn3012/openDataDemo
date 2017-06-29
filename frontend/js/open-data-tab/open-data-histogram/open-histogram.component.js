angular.module("openHistogram" , ).
	component("openHistogram" , {
		transclude: true,
		templateUrl : "/frontend/js/open-data-tab/open-data-histogram/open-histogram.template.html",
		// require : {
		// 	inputData : "^inputData"
		// },
		// bindings : {},
		controller : function openHistogram($rootScope){
			

			this.click = function(abc){
				alert(abc);
			};
			this.abc = "abc";


			$rootScope.render = function(){ //demo 
				var objs = [];
				var dats = [];
				for (var i = 0; i < allData.length; i++) {
					if(allData[i]['type'] == 0){
						continue;
					}else if(allData[i]['type'] == 1){
						objs.push({
							label : allData[i]['label']
						});
					}else{
						dats.push({
							label : allData[i]['label']
						});
					}
				}
				this.objects = objs;
				this.datas = dats;


			}


			$rootScope.draw = function(){ //draw chart
			// 	var labels = ["January","February","March","April","May","June"];
			// var data = [];
			// data[0] = [456,479,324,569,702,600];
			// data[1] = [364,504,605,400,345,320];


			var labels = [];
			var data = [];
			for(var i=0;i<allData.length;i++){
				if(allData[i]['type'] == 0){
					continue;
				}else if(allData[i]['type'] == 1){
					labels = allData[i]['data'];
				}else{
					data.push(allData[i]['data']);
				}
			}
			bar_chart(labels,data);

			}

			// this.click = function(){
			// 	this.inputData.getData();
			// }

			
		}



	});