angular.module("histogramData").
	component("histogramData",{
		templateUrl : "/frontend/view/open-content/histogram-box/histogram-data.template.html",
		controller : function control(){
			this.header = "Histogram data";
			this.detail = "Only drop box with numberic data";
		}
	});