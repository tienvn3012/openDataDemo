angular.module("inputData").
	component("inputData" , {
		transclude: true,
		templateUrl : "/frontend/js/input-data.template.html",
		controller : function inputData($scope,$element,$attrs){
			this.getData = function(){
				alert(this.input);
			}
		},
		bindings : {
			data : '<'
		}
	})
//demo Intercomponent Communication from component "inputData" to "abc"

.component("abc", {
		transclude: true,
		template : "<button ng-click='$ctrl.click()'>click</button>",
		require : {
			inputData : "^inputData"
		},
		bindings: {},
		controller : function openHistogram($rootScope){ //$rootScope use to call function of another component out this module
			this.click = function(){
				// this.inputData.getData();
				//function this.inputData.getData();
				//variable this.inputData.input;
				// this just for demo
		
			allData = classify(cutData(cutRow(this.inputData.input))); //get input and detect it to "allData" variable (this is public variable for all module)
			$rootScope.draw(); //function draw in "openHistogram" component
			}
		}



});

function cutRow(data){ //cut each line of input
	var cut = [];
	var sub = "";
	for(var i=0;i<data.length;i++){
		if(data.charAt(i) != '\n'){
			sub+=data.charAt(i);
		}else{
			if(((i+1) <= data.length) && (data.charAt(i+1) == '\n')){
				continue;
			}else{
				cut.push(sub);
				sub = "";
			}
		}
	}
	cut.push(sub);
	return cut;
}

function cutData(data){ //cut each item in line by ","
	var char =[];
	
	for(var i=0;i<data.length;i++){
		char[i] = data[i].split(",");
	}
	return char;
}


function IsNumeric(input){
    var RE = /^-{0,1}\d*\.{0,1}\d+$/;
    return (RE.test(input));
}

function classify(char){ //classify data
	var cl = [];
	
	var labels = []; //detect line of labels
	for(var i=0;i<char.length;i++){
		var flag = true;
		for(var j=0;j<char[i].length;j++){
			if(IsNumeric(char[i][j])){
				flag = false;
				break;
			}
		}
		if(!flag){
			continue;
		}else{
			
			labels = char[i];
			for(var k=0;k<char[i].length;k++){
				var obj = {};
				obj["label"] = char[i][k];
				obj['data'] = [];
				obj['type'] = 0;
				cl.push(obj);
			}
			char.splice(i, 1); //cut this line from data array
			break;
		}
	}

	for(var x=0;x<char.length;x++){ 
		for(var y=0;y<char[x].length;y++){
			cl[y]['data'].push(char[x][y]);
		}
	}

	for(var i=0;i<cl.length;i++){
		var f = true;
		var fl;
		for(var j=0;j<cl[i]["data"].length;j++){
			fl = IsNumeric(cl[i]["data"][j]);
			if(j === 0){
				continue;
			}else{
				if(fl != IsNumeric(cl[i]['data'][j-1])){
					f = false;
					break;
				}
			}
		}
		if(!f){
			cl[i]['type'] = 0;
		}else{
			if (fl) {
				cl[i]["type"] = 2;
			}else{
				cl[i]["type"] = 1;
			}
		}
	}

	return cl;
}