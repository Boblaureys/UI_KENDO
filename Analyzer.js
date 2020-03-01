function getDataQueue(){
    var staginarea = [{},{},{}];
    var master = [{},{},{}];
    var sapsystem = [{},{},{}]
    
                      
                      
	
	var dataqueues = [{
        FIRSTNAME: "2017-08-20",
        LASTNAME: "Star Wars: A New Hope",
        MSKEYVALUE: "Star Wars: A New Hope",
        PERNR: "Star Wars: A New Hope",
        TaskName : "Star Wars: A New Hope",
        MSG: "Star Wars: A New Hope",
        rep_name: "TS0_400"
    }, {
        FIRSTNAME: "2017-08-20",
        LASTNAME: "Star Wars: A New Hope",
        MSKEYVALUE: "Star Wars: A New Hope",
        PERNR: "Star Wars: A New Hope",
        TaskName : "Star Wars: A New Hope",
        MSG: "Star Wars: A New Hope",
        rep_name: "TS0_400"
    }, {
        FIRSTNAME: "2017-08-20",
        LASTNAME: "Star Wars: A New Hope",
        MSKEYVALUE: "Star Wars: A New Hope",
        PERNR: "Star Wars: A New Hope",
        TaskName : "Star Wars: A New Hope",
        MSG: "Star Wars: A New Hope",
        rep_name: "TS0_400"
    },{
        FIRSTNAME: "2017-08-20",
        LASTNAME: "Star Wars: A New Hope",
        MSKEYVALUE: "Star Wars: A New Hope",
        PERNR: "Star Wars: A New Hope",
        TaskName : "Star Wars: A New Hope",
        MSG: "Star Wars: A New Hope",
        rep_name: "TS0_400"
    },{
        FIRSTNAME: "2017-08-20",
        LASTNAME: "Star Wars: A New Hope",
        MSKEYVALUE: "Star Wars: A New Hope",
        PERNR: "Star Wars: A New Hope",
        TaskName : "Star Wars: A New Hope",
        MSG: "Star Wars: A New Hope",
        rep_name: "TS0_400"
    },{
        FIRSTNAME: "2017-08-20",
        LASTNAME: "Star Wars: A New Hope",
        MSKEYVALUE: "Star Wars: A New Hope",
        PERNR: "Star Wars: A New Hope",
        TaskName : "Star Wars: A New Hope",
        MSG: "Star Wars: A New Hope",
        rep_name: "TS0_400"
    },{
        FIRSTNAME: "2017-08-20",
        LASTNAME: "Star Wars: A New Hope",
        MSKEYVALUE: "Star Wars: A New Hope",
        PERNR: "Star Wars: A New Hope",
        TaskName : "Star Wars: A New Hope",
        MSG: "Star Wars: A New Hope",
        rep_name: "TS2_400"
    },{
        FIRSTNAME: "2017-08-20",
        LASTNAME: "Star Wars: A New Hope",
        MSKEYVALUE: "Star Wars: A New Hope",
        PERNR: "Star Wars: A New Hope",
        TaskName : "Star Wars: A New Hope",
        MSG: "Star Wars: A New Hope",
        rep_name: "TS0_400"
    }];


    $("#dataprovqueue").kendoGrid({
       // autoBind: false,
        dataSource: new kendo.data.DataSource({
            data: dataqueues

        }),
      //  dataSource: {
    //        type: "odata",
   //         transport: {
  //              read: {
   //                 url: "https://sgnt5174.tmvw.be/sapidm/V8/V1/DATASYNCQUEUE",
   //                 dataType: "json",
   //                 cache: false
   //             },
   //             pageSize: 5
   //         },
   //     },
        filterable: {
            mode: "row"
        },
        pagesize : 10,
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

            field: "FIRSTNAME",
            title: "Voornaam",
            width: 240
        }, {
            field: "LASTNAME",
            title: "Naam",
        }, {
            field: "PERNR",
            title: "Personeelsnummer"
        }, {
            field: "MSKEYVALUE",
            title: "Account",
            width: 150
        }, {
            field: "TaskName",
            title: "TaskName",
            width: 150
        }, {
            field: "MSG",
            title: "MSG",
            width: 440
        }, {
            field: "rep_name",
            title: "Systeem",
            width: 150
        }]

    });

};


function getErrorList(){
    var errors = [{
        FIRSTNAME: "2017-08-20",
        LASTNAME: "Star Wars: A New Hope",
        MSKEYVALUE: "Star Wars: A New Hope",
        PERNR: "Star Wars: A New Hope",
        TaskName : "Star Wars: A New Hope",
        MSG: "Star Wars: A New Hope",
        rep_name: "TS0_400"
    }, {
        FIRSTNAME: "2017-08-20",
        LASTNAME: "Star Wars: A New Hope",
        MSKEYVALUE: "Star Wars: A New Hope",
        PERNR: "Star Wars: A New Hope",
        TaskName : "Star Wars: A New Hope",
        MSG: "Star Wars: A New Hope",
        rep_name: "TS0_400"
    }, {
        FIRSTNAME: "2017-08-20",
        LASTNAME: "Star Wars: A New Hope",
        MSKEYVALUE: "Star Wars: A New Hope",
        PERNR: "Star Wars: A New Hope",
        TaskName : "Star Wars: A New Hope",
        MSG: "Star Wars: A New Hope",
        rep_name: "TS0_400"
    },{
        FIRSTNAME: "2017-08-20",
        LASTNAME: "Star Wars: A New Hope",
        MSKEYVALUE: "Star Wars: A New Hope",
        PERNR: "Star Wars: A New Hope",
        TaskName : "Star Wars: A New Hope",
        MSG: "Star Wars: A New Hope",
        rep_name: "TS0_400"
    },{
        FIRSTNAME: "2017-08-20",
        LASTNAME: "Star Wars: A New Hope",
        MSKEYVALUE: "Star Wars: A New Hope",
        PERNR: "Star Wars: A New Hope",
        TaskName : "Star Wars: A New Hope",
        MSG: "Star Wars: A New Hope",
        rep_name: "TS0_400"
    },{
        FIRSTNAME: "2017-08-20",
        LASTNAME: "Star Wars: A New Hope",
        MSKEYVALUE: "Star Wars: A New Hope",
        PERNR: "Star Wars: A New Hope",
        TaskName : "Star Wars: A New Hope",
        MSG: "Star Wars: A New Hope",
        rep_name: "TS0_400"
    },{
        FIRSTNAME: "2017-08-20",
        LASTNAME: "Star Wars: A New Hope",
        MSKEYVALUE: "Star Wars: A New Hope",
        PERNR: "Star Wars: A New Hope",
        TaskName : "Star Wars: A New Hope",
        MSG: "Star Wars: A New Hope",
        rep_name: "TS2_400"
    },{
        FIRSTNAME: "2017-08-20",
        LASTNAME: "Star Wars: A New Hope",
        MSKEYVALUE: "Star Wars: A New Hope",
        PERNR: "Star Wars: A New Hope",
        TaskName : "Star Wars: A New Hope",
        MSG: "Star Wars: A New Hope",
        rep_name: "TS0_400"
    }];




}
