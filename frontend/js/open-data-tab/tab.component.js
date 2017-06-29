angular.module("tab").
	component("tab" , {
		templateUrl : "/frontend/js/open-data-tab/tab.template.html",
		controller : function tabController(){
			this.hello = "hello";
		}
	});