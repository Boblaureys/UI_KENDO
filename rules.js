function getRules(){



    $("#rulesgrid").kendoGrid({
        //*****************************  dataSource START
        dataSource: {
            type: "odata",
            transport: {
                read: {
                    url: "https://sgnt5174.tmvw.be/sapidm/V8/V1/RULE",
                    dataType: "json",
                    cache : false
                },
                update: {

                    url: function(data) {
                        return "https://sgnt5174.tmvw.be/sapidm/V8/V1/RULE('" + data.CONDITIONNR + "')";
                    }

                },
                create: {
                    url: "https://sgnt5174.tmvw.be/sapidm/V8/V1/RULE",

                },
                destroy: {
                    url: function(data) {
                        return "https://sgnt5174.tmvw.be/sapidm/V8/V1/RULE('" + data.CONDITIONNR + "')";
                    }

                },



            },
            batch: false,
            serverPaging: false,
            schema: {

                model: {
                    id: "CONDITIONNR",
                    fields: {
                        CONDITIONNR: {  type: "number" , editable: false },
                        RESULT :{editable: true,validation: { required: true }},
                        MX_FS_EMPLOYMENT_STATUS_ID_ATTROP :{editable: true} ,
                        MX_FS_EMPLOYMENT_STATUS_ID_ATTRMIN:{editable: true} ,
                        MX_FS_EMPLOYMENT_STATUS_ID_ATTRMAX :{editable: true},
                        MX_FS_COMPANY_CODE_ATTROP:{editable: true},
                        MX_FS_COMPANY_CODE_ATTRMIN:{editable: true},
                        MX_FS_COMPANY_CODE_ATTRMAX:{editable: true},
                        FARYS_FUNCTIONELE_DIENST_ID_ATTROP:{editable: true},
                        FARYS_FUNCTIONELE_DIENST_ID_ATTRMIN:{editable: true},
                        FARYS_FUNCTIONELE_DIENST_ID_ATTRMAX:{editable: true},
                        FARYS_DEPARTEMENT_ID_ATTROP:{editable: true},
                        FARYS_DEPARTEMENT_ID_ATTRMIN:{editable: true},
                        FARYS_DEPARTEMENT_ID_ATTRMAX:{editable: true},
                        MX_FS_ORGANIZATIONAL_UNIT_ID_ATTROP:{editable: true},
                        MX_FS_ORGANIZATIONAL_UNIT_ID_ATTRMIN:{editable: true},
                        MX_FS_ORGANIZATIONAL_UNIT_ID_ATTRMAX:{editable: true},
                        MX_FS_EMPLOYEE_SUBGROUP_ID_ATTROP:{editable: true},
                        MX_FS_EMPLOYEE_SUBGROUP_ID_ATTRMIN:{editable: true},
                        MX_FS_EMPLOYEE_SUBGROUP_ID_ATTRMAX:{editable: true},
                        FARYS_TEAM_ID_ATTROP:{editable: true},
                        FARYS_TEAM_ID_ATTRMIN:{editable: true},
                        FARYS_TEAM_ID_ATTRMAX:{editable: true},
                        MX_FS_POSITION_ATTROP:{editable: true},
                        MX_FS_POSITION_ATTRMIN:{editable: true},
                        MX_FS_POSITION_ATTRMAX:{editable: true},
                        MX_FS_PERNR_IS_MANAGER_ATTROP:{editable: true},
                        MX_FS_PERNR_IS_MANAGER_ATTRMIN:{editable: true},
                        MX_FS_PERNR_IS_MANAGER_ATTRMAX:{editable: true},
                        MX_FS_IDENTITY_TYPE_ATTROP:{editable: true},
                        MX_FS_IDENTITY_TYPE_ATTRMIN:{editable: true},
                        MX_FS_IDENTITY_TYPE_ATTRMAX:{editable: true},
                        MX_FS_PERSONNEL_AREA_ID_ATTROP:{editable: true},
                        MX_FS_PERSONNEL_AREA_ID_ATTRMIN:{editable: true},
                        MX_FS_PERSONNEL_AREA_ID_ATTRMAX:{editable: true},
                        MX_FS_PERSONNEL_SUBAREA_ID_ATTROP:{editable: true},
                        MX_FS_PERSONNEL_SUBAREA_ID_ATTRMIN:{editable: true},
                        MX_FS_PERSONNEL_SUBAREA_ID_ATTRMAX:{editable: true}
                    }
                }
            },
        },
        //********************************* datasource END

        editable: "inline",
        toolbar: [ { name: "create", text: "Nieuwe Rule" },{ name: "simuleer", text: "Simuleer Rule" }],
        sortable: true,
        resizable: true,
        scrollable : true,
        reorderable: true,
        filterable: true,
        pageable : {
            refresh : true,
            pageSizes : true,
            filterable : {
                mode : "row"
            },
            buttonCount : 5
        },
        columnMenu: true,
        columns: [
            { command: ["edit", "destroy"], title: "&nbsp;", width: "200px" },
            {
                field: "CONDITIONNR",
                title: "Nbr",
                locked: true,
                width: "75px",
                sortable: {
                    initialDirection: "asc"
                },
            },
            {
                field: "RESULT",
                title: "Business Role",
                locked: true,
                width: "390px",

            },
            {
                title: "Status Dienstverband",
                columns: [{
                    field: "MX_FS_EMPLOYMENT_STATUS_ID_ATTROP",
                    title: "Operation",
                    width: 100
                },{
                    field: "MX_FS_EMPLOYMENT_STATUS_ID_ATTRMIN",
                    title: "MinValue",
                    width: 100
                },{
                    field: "MX_FS_EMPLOYMENT_STATUS_ID_ATTRMAX",
                    title: "MaxValue",
                    width: 100
                }]
            },
            {
                title: "Company Code",
                columns: [{
                    field: "MX_FS_COMPANY_CODE_ATTROP",
                    title: "Operation",
                    width: 100
                },{
                    field: "MX_FS_COMPANY_CODE_ATTRMIN",
                    title: "MinValue",
                    width: 100
                },{
                    field: "MX_FS_COMPANY_CODE_ATTRMAX",
                    title: "MaxValue",
                    width: 100
                }]
            },
            {
                title: "Departement",
                columns: [{
                    field: "FARYS_DEPARTEMENT_ID_ATTROP",
                    title: "Operation",
                    width: 100
                },{
                    field: "FARYS_DEPARTEMENT_ID_ATTRMIN",
                    title: "MinValue",
                    width: 100
                },{
                    field: "FARYS_DEPARTEMENT_ID_ATTRMAX",
                    title: "MaxValue",
                    width: 100
                }]
            },
            {
                title: "Functionele Dienst",
                columns: [{
                    field: "FARYS_FUNCTIONELE_DIENST_ID_ATTROP",
                    title: "Operation",
                    width: 100
                },{
                    field: "FARYS_FUNCTIONELE_DIENST_ID_ATTRMIN",
                    title: "MinValue",
                    width: 100
                },{
                    field: "FARYS_FUNCTIONELE_DIENST_ID_ATTRMAX",
                    title: "MaxValue",
                    width: 100
                }]
            },
            {
                title: "Org Unit",
                columns: [{
                    field: "MX_FS_ORGANIZATIONAL_UNIT_ID_ATTROP",
                    title: "Operation",
                    width: 100
                },{
                    field: "MX_FS_ORGANIZATIONAL_UNIT_ID_ATTRMIN",
                    title: "MinValue",
                    width: 100
                },{
                    field: "MX_FS_ORGANIZATIONAL_UNIT_ID_ATTRMAX",
                    title: "MaxValue",
                    width: 100
                }]
            },
            {
                title: "Team",
                columns: [{
                    field: "FARYS_TEAM_ID_ATTROP",
                    title: "Operation",
                    width: 100
                },{
                    field: "FARYS_TEAM_ID_ATTRMIN",
                    title: "MinValue",
                    width: 100
                },{
                    field: "FARYS_TEAM_ID_ATTRMAX",
                    title: "MaxValue",
                    width: 100
                }]
            },
            {
                title: "Functie (Beschrijving)",
                columns: [{
                    field: "MX_FS_POSITION_ATTROP",
                    title: "Operation",
                    width: 100
                },{
                    field: "MX_FS_POSITION_ATTRMIN",
                    title: "MinValue",
                    width: 100
                },{
                    field: "MX_FS_POSITION_ATTRMAX",
                    title: "MaxValue",
                    width: 100
                }]
            },
            {
                title: "Manager?",
                columns: [{
                    field: "MX_FS_PERNR_IS_MANAGER_ATTROP",
                    title: "Operation",
                    width: 100
                },{
                    field: "MX_FS_PERNR_IS_MANAGER_ATTRMIN",
                    title: "MinValue",
                    width: 100
                },{
                    field: "MX_FS_PERNR_IS_MANAGER_ATTRMAX",
                    title: "MaxValue",
                    width: 100
                }]
            },
            {
                title: "EmployeeSubgroep",
                columns: [{
                    field: "MX_FS_EMPLOYEE_SUBGROUP_ID_ATTROP",
                    title: "Operation",
                    width: 100
                },{
                    field: "MX_FS_EMPLOYEE_SUBGROUP_ID_ATTRMIN",
                    title: "MinValue",
                    width: 100
                },{
                    field: "MX_FS_EMPLOYEE_SUBGROUP_ID_ATTRMAX",
                    title: "MaxValue",
                    width: 100
                }
                ]
            },
            {
                title: "Type identiteit",
                columns: [{
                    field: "MX_FS_IDENTITY_TYPE_ATTROP",
                    title: "Operation",
                    width: 100
                },{
                    field: "MX_FS_IDENTITY_TYPE_ATTRMIN",
                    title: "MinValue",
                    width: 100
                },{
                    field: "MX_FS_IDENTITY_TYPE_ATTRMAX",
                    title: "MaxValue",
                    width: 100
                }
                ]
            },
            {
                title: "Personeelsgebied",
                columns: [{
                    field: "MX_FS_PERSONNEL_AREA_ID_ATTROP",
                    title: "Operation",
                    width: 100
                },{
                    field: "MX_FS_PERSONNEL_AREA_ID_ATTRMIN",
                    title: "MinValue",
                    width: 100
                },{
                    field: "MX_FS_PERSONNEL_AREA_ID_ATTRMAX",
                    title: "MaxValue",
                    width: 100
                }
                ]
            },
            {
                title: "Personeelssubgebied",
                columns: [{
                    field: "MX_FS_PERSONNEL_SUBAREA_ID_ATTROP",
                    title: "Operation",
                    width: 100
                },{
                    field: "MX_FS_PERSONNEL_SUBAREA_ID_ATTRMIN",
                    title: "MinValue",
                    width: 100
                },{
                    field: "MX_FS_PERSONNEL_SUBAREA_ID_ATTRMAX",
                    title: "MaxValue",
                    width: 100
                }
                ]
            },
            { command: ["edit", "destroy"], title: "&nbsp;", width: "200px" }
        ]
    });

}