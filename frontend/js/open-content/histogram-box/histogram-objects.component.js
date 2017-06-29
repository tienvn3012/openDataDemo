angular.module("histogramObjects").
	component("histogramObjects",{
		templateUrl : "/frontend/view/open-content/histogram-box/histogram-objects.template.html",
		controller : function control(){
			this.header = "Histogram label";
			this.detail = "Only drop date/time or label data";
		}
	});