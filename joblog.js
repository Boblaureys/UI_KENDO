function getErrors(){
	//var url = "http://ols13u05.ont.belastingdienst.nl:50000";
    $("#toolbar").kendoToolBar({
        items: [
            { text: "right",showText: "toolbar", type: "button", text: " Retry", id: "retry", imageUrl: "assets/css/images/process.png",showIcon: "toolbar" }
        ],
        resizable: false
    });


    $("#errorsgrid")
        .kendoGrid(
            {             
                dataSource : {
                   type : "odata",
                    transport : {
                        read : {
                            url : "/bd/sapidm/monitor.svc/JOBLOG",
                            dataType : "json",
                            cache : false
                        },                    
                    },
                },
                filterable : {
                    mode : "row"
                },
                selectable: "multiple",
                sortable: true,
                scrollable : true,
                reorderable: true,
                pageable : {
                    alwaysVisible : true,
                    pageSizes: [5,10],
                    buttonCount : 5,
                    pageSize: 5
                },
                
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
                        filterable : {
                            multi : true,
                            search : true
                        },
                        template: "#= kendo.toString(kendo.parseDate(Datefound, 'yyyy-MM-dd HH:mm:ss'), 'yyyy-MM-dd HH:mm:ss') #"
                    },
                    {
                        field : "Account",
                        title : "Account",
                        
                        filterable : {
                            multi : true,
                            search : true
                        }
                    },
                    {
                        field : "Displayname",
                        title : "Displayname",
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
                        width : 150,
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
                        width : 300,
                    } ]
            });

};
