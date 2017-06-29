angular.module("histogramComponent").
	component("histogramComponent",{
		templateUrl : "/frontend/view/open-content/histogram-component/histogram-component.template.html",
		// template : "<div>sahncsahn</div>",
		controller : function control(){
			this.header = "Components";
			this.components = [
				{
					label : "Years",
					type : "1"
				},
				{
					label : "number a",
					type : "2"
				},
				{
					label : "number b",
					type : "2"
				},
				{
					label : "number c",
					type : "2"
				},
				{
					label : "caskc",
					type : "0"
				},
				{
					label : "acjasnusa",
					type : "0"
				},
				{
					label : "abcde",
					type : "1"
				},
			];
		}
	});