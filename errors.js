function onDataBound(e) {
    var chart = $("#errorchart").data("kendoChart");
    
    var data = chart.dataSource.data();
    
    if (data.length > 10) {
        chart.options.categoryAxis.labels.step = 5;      
    }
    else {
        chart.options.categoryAxis.labels.step = 1;
    }    
}

function getErrors(){
	    $("#errorsgrid")
        .kendoGrid(
            {  
            	 toolbar: [{
                     name: "retry",
                     text: "Retry",
                    
                 }],
            	schema: {
                     data: function(result) {     
                       return result.data || result;
                     },
                     total: function(result) { 
                         var data = this.data(result);
                         return data ? data.length : 0;
                     }
                 },
                dataSource : {
                	type : "odata",
                	serverPaging: true,
                    serverSorting: true,
                    pageSize: 10,
                    transport : {
                        read : {
                            url : "/bd/sapidm/monitor.svc/ERROR",
                            dataType : "json",
                            cache : false
                        },
                        update: {
                        	url : "/bd/sapidm/monitor.svc/ERROR",
                            type: "post"
                        },
                        destroy: {
                            url: function (dataItem) {
                                return "/bd/sapidm/monitor.svc/ERROR(" + dataItem.ErrorID + ")";
                            },
                        	dataType: "json",
                        }
                        
                        
                    },
                    error: function (e) {
                        alert("error: " + kendo.stringify(e.errors[0]));
                    },
                },
                filterable : {
                    mode : "row"
                },
               
                selectable: "multiple",
                sortable: true,
                scrollable : true,
                reorderable: true,                                   
                columns : [
                    {
                        field : "ErrorID",
                        title : "ErrorID",
                        hidden : true
                    },
                    {
                        field : "LinkID",
                        title : "LinkID",
                        hidden : true
                    },
                    {
                        field : "Datefound",
                        title : "Date",  
                        width : 150,
                        filterable : {
                            multi : false,
                            search : true
                        },
                        template: "#= kendo.toString(kendo.parseDate(Datefound, 'yyyy-MM-dd HH:mm:ss'), 'yyyy-MM-dd HH:mm:ss') #"
                    },
                    {
                        field : "Account",
                        title : "Account",
                        width : 100,
                        filterable : {
                            multi : false,
                            search : true
                        }
                    },
                    {
                        field : "Displayname",
                        title : "Displayname",
                        width : 200,
                        filterable : {
                            multi : true,
                            search : true
                        }
                        
                    },
                    {
                        field : "Bevoegdheid",
                        title : "Bevoegdheid",
                        filterable : {
                            multi : true,
                            search : true
                        }
                    },
                    {
                        field : "LinkOperation",
                        title : "LinkOperation",
                        width : 100,
                        filterable : {
                            multi : true,
                            search : true
                        }                    
                    }, {
                        field : "Systeem",
                        title : "Systeem",
                        width : 150,
                        filterable : {
                            multi : true,
                            search : true
                        }                
                    }, {
                        field : "ErrorTxt",
                        title : "Foutmelding",   
                        width : 400,
                    } ]
            });
	    var errorgrid = $("#errorsgrid").data("kendoGrid");
	    $(".k-grid-retry").click(function(e){ 
	    	
         	var rows = errorgrid.select();
         	//Iterate through all selected rows
         	rows.each(function (index, row) {
         		//var selectedItem = errorgrid.dataItem(row);
         		// your action will go here
         		 $("#errorsgrid").data("kendoGrid").removeRow(row);
         		//console.log(selectedItem);        		
         		//errorgrid.dataSource.remove(selectedItem);
         		//console.log(errorgrid.dataSource.hasChanges());
         		
         	});
         	//errorgrid.saveChanges();

     		console.log("Done");
	    });
	    
};

function refreshErrorsChart(){
	$("#errorchart").data("kendoChart").dataSource.read();		
}

function getErrorsChart(){
	$("#errorchart").kendoChart({

        legend: {
            position: "bottom"
        },
        dataSource: new kendo.data.DataSource({            
            type: "odata",
            transport: {
                read: {
                	url : "/bd/sapidm/monitor.svc/ERROR",
                    dataType: "json",
                    cache: false
                },
            },
            group: {
                field: "Systeem"
            },
        }),
        series: [{
            type: "column",
            field: "ErrorID",
            categoryField: "Datefound",
            aggregate: "count"
        }],
        valueAxis: {
            //min:0,
            type: "log",
            minorGridLines: {
                visible: true
            }
        },
        categoryAxis: {
            baseUnit: "days",
            labels:{
                template: "#= kendo.toString(kendo.parseDate(value, 'yyyy-MM-dd HH:mm:ss'), 'yyyy-MM-dd HH:mm:ss') #"
            	//template: "#= labelsTemplate(value, dataItem) #"
            },

        },
        dataBound: onDataBound,    
    });

};






