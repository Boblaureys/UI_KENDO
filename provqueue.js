


function refreshProvQueue(){
	$("#roleprovqueue").data("kendoGrid").dataSource.read();
}


function getProvisioningQueue(){
	//var url = "http://ols13u05.ont.belastingdienst.nl:50000";
    $("#roleprovqueue").kendoGrid({
    	//MCTHISMSKEYVALUE,MCOTHERMSKEYVALUE,MCEXECSTATE,mcreason,mcmodifytime
    	scrollable: true,      
        dataSource: {
            type: "odata",
            transport: {
                read: {
                    url: "/bd/sapidm/monitor.svc/ASSIGNMENTSQUEUE",
                    dataType: "json",
                    cache : false
                },           
            },
        },
        filterable: {
            mode: "row"
        },      
        sortable: true,
        pageable: {
            refresh: true,
            pageSizes: true,
            filterable: {
                mode: "row"
            },
            buttonCount: 5
        },
        columns: [{

            field: "MCTHISMSKEYVALUE",
            title: "Account",
            filterable: {
                cell: {
                    showOperators: true
                }
            },
        }, {
            field: "MCOTHERMSKEYVALUE",
            title: "Bevoegdheid",
            filterable: {
                cell: {
                    showOperators: false
                }
            },
        }, {
            field: "MCEXECSTATE",
            title: "Status",

        }, {
            field: "mcreason",
            title: "Reden",

            filterable: {
                cell: {
                    showOperators: false
                }
            },
        }, {
            field: "mcmodifytime",
            title: "Datum",
        }]
    });

};
