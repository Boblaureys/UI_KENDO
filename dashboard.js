function getAnalytics() {
	//var url = "http://ols13u05.ont.belastingdienst.nl:50000";
	var url = window.location.hostname;
	var analyticDataSource = new kendo.data.DataSource({
		type : "odata",
		transport : {
			read : {
				url : "/bd/sapidm/monitor.svc/ANALYTICS",
				dataType : "json",
				cache : false
			}
		}
	});

	analyticDataSource.fetch(function(){
		var datasourcedata = analyticDataSource.data();
		$("#Analytics_QueuSize").html(datasourcedata[0].queuesize );
		$("#Analytics_JobsRunning").html(analyticDataSource.at(0).runningjobs);
		$("#Analytics_NbrOfErrors").html(analyticDataSource.at(0).errors);
		$("#Analytics_DispatcherStatus").html(analyticDataSource.at(0).dispatchers);
		$("#Analytics_EnabledSystems").html(analyticDataSource.at(0).enabledsystems);
		$("#Analytics_DisabledSystems").html(analyticDataSource.at(0).disabledsystems);
	});
};





function loadAdminUI() {

	

};

function triggerFilters() {
	
};