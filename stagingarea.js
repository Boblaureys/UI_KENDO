
function getStagingAreaPersons(){
	 $("#personsgrid").kendoGrid(
	            {
	                toolbar: [{
	                    name: "delete",
	                    text: "delete Person",
	                    click: function(e){
	                    	datasource.destroy();
	                    }
	                }],
	                dataSource : {
	                    type : "odata",
	                    transport : {
	                        read : {
	                             url : "/bd/sapidm/monitor.svc/Persons",
	                            dataType : "json"
	                        },
	                        destroy: {
	                            url: "/bd/sapidm/monitor.svc/Persons/Destroy",
	                            dataType: "jsonp"
	                          },
	                     },
	                     pageSize: 5
	                    
	                }, 
	                filterable: {
	                    mode: "row"
	                },
	                selectable: "multiple",
	                sortable: true,
	                scrollable : true,
	                reorderable: true,               
	                columns : [ 
	                    {
	                        field : "Mskeyvalue",
	                        title : "LOGINID",
	                        filterable: {
	                            cell: {
	                                showOperators: false,
	                                operator: "eq",                            
	                                suggestionOperator: "eq"
	                            }
	                        }
	                    },                                  
	                    {
	                        field : "PersoneelsNummer",
	                        title : "PersoneelsNummer",
	                        filterable: {
	                            cell: {
	                                showOperators: false,
	                                operator: "eq",
	                                suggestionOperator: "eq"
	                            }
	                        },
	                        width : 250
	                       
	                    }
	                ],
	                pageable : {
	                    alwaysVisible : true,
	                    pageSizes: [5,10,20,50,100,"all"],
	                    buttonCount : 5,
	                    pageSize: 5,   
	                }               
	            });
	
}






function getStagingAreaInfo(){
	//var url = "http://ols13u05.ont.belastingdienst.nl:50000";
     $("#currentgroupsgrid").kendoGrid(
            {
                toolbar: [{
                    name: "retry",
                    text: "Retry Group membership",
                    click: function(e){
                    	datasource.destroy();
                    }
                },{
                    name: "retry",
                    text: "Delete Group membership",
                    click: function(e){
                    	datasource.destroy();
                    }
                }],
                dataSource : {
                    type : "odata",
                    transport : {
                        read : {
                             url : "/bd/sapidm/monitor.svc/GROUPS",
                            dataType : "json"
                        },
                        destroy: {
                            url: "/bd/sapidm/monitor.svc/GROUPS/Destroy",
                            dataType: "jsonp"
                          },
                     },
                     pageSize: 5,
                     serverFiltering: true,
                     filter: {
                    	    logic: "and",
                    	    filters: [
                    	        { field: "Mskeyvalue", operator: "eq", value: "" },
                    	        { field: "Member", operator: "eq", value: "" }
                    	    ]
                    	}
                }, 
                filterable: {
                    mode: "row"
                },
                selectable: "multiple",
                sortable: true,
                scrollable : true,
                reorderable: true,               
                columns : [ 
                    {
                        field : "Mskeyvalue",
                        title : "Group",
                        filterable: {
                            cell: {
                                showOperators: false,
                                operator: "eq",                            
                                suggestionOperator: "eq"
                            }
                        }
                    },                                  
                    {
                        field : "Member",
                        title : "Member",
                        filterable: {
                            cell: {
                                showOperators: false,
                                operator: "eq",
                                suggestionOperator: "eq"
                            }
                        },
                        width : 250
                       
                    },
                    {
                        field : "LastChanged",
                        title : "Datum",
                        width : 150,
                        type: "date", template: '#= kendo.toString(LastChanged, "dd/MM/yyyy") #',
                        filterable: false
                    }
                ],
                pageable : {
                    alwaysVisible : true,
                    pageSizes: [5,10,20,50,100,"all"],
                    buttonCount : 5,
                    pageSize: 5,   
                }               
            });
    
$("#membershiphistorygrid")
        .kendoGrid(
            {
            	dataSource : {
                    type : "odata",
                    transport : {
                        read : {
                             url : "/bd/sapidm/monitor.svc/GROUPSHISTORY",
                            dataType : "json"
                        },
                     },
                     pageSize: 5,
                     serverFiltering: true,
                     filter: {
                    	    logic: "and",
                    	    filters: [
                    	        { field: "Mskeyvalue", operator: "eq", value: "" },
                    	        { field: "Member", operator: "eq", value: "" }
                    	    ]
                    	}
                }, 
                filterable: {
                    mode: "row"
                },               
                columns : [ 
                           {
                               field : "Mskeyvalue",
                               title : "Group",
                               filterable: {
                                   cell: {
                                       showOperators: false,
                                       operator: "eq",                            
                                       suggestionOperator: "eq"
                                   }
                               }
                           },                                  
                           {
                               field : "Member",
                               title : "Member",
                               filterable: {
                                   cell: {
                                       showOperators: false,
                                       operator: "eq",
                                       suggestionOperator: "eq"
                                   }
                               },
                               width : 250
                              
                           },
                           {
                               field : "LastChanged",
                               title : "Verwijderd",
                               width : 150,
                               type: "date", template: '#= kendo.toString(LastChanged, "dd/MM/yyyy") #',
                               filterable: false
                           }
                       ],
                       pageable : {
                           alwaysVisible : true,
                           pageSizes: [5,10,20,50,100,"all"],
                           buttonCount : 5,
                           pageSize: 5,   
                       }               
                   });	
}

