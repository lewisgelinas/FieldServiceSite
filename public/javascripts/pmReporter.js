
//General Information for Report Header
var servicesHeading = { 
    "Customer Information" : {
        id:"customerinformation",   
        inputs : [ 
            {name: "Company Name", type:"text", id:"companyName"}, 
            {name: "Company Address", type:"text", id: "companyAddress"}, 
            {name: "Company Contact", type:"text", id: "companyContact"}, 
        ],
    },

    "System Information" : { 
        id: "systeminformation", 
        inputs: [ 
            {name: "System ID", type:"text", id:'systemID'}, 
            {name: "System Version", type: "text", id:'systemVersion'}, 
            {name: "System Description", type: "text", id:'systemDescription'}, 
            {name: "AMS ID", type: "text", id:'amsID'}, 
            {name: "AMS Version", type: "text", id:'amsVersion'}, 
        ],
    }, 

    "General Information" : { 
        id: "generalinformation", 
        inputs: [ 
            {name: "Network Architecture", type:"text", id:'networkArchitecture'},
            {name: "Domain Name", type:"text", id:'domainName'},
            {name: "UserName", type: "text", id:'userName'}, 
           
        ],
    }
}

//--Workstations---------------------
// text = adds text input field
// choice = adds choice option

var workstationInformation = [ 
    {title: "Workstaion Information", type:'text'}, 
    {name: "Node Name", type:"text"},
    {name: "Location", type: "text"},
    {name: "Role", type:"text"},
    {name: "Dell type/tag", type: "text"},
    {name: "Primary IP Address", type:"text"},
]
var WindowsDiagnostics = [   
    {title: "Windows Diagnostics", type:'text'},
    {name: 'Example Choice', type: 'choice'}, 
    {name: 'Example Choice_2', type: 'choice'}, 
    {name: 'Example Choice_3', type: 'choice'},  
    {name: "CPU Loading (%)", type: 'text'},
    {name: "Memory Loading (%)", type: 'text'}, 
    {name: "C Drive Free Space", type: "text"},
    {name: "D Drive Free Space", type:"text"}, 
    {name: "Application Logs", type: "text"},
    {name: "System Logs", type: "text"}, 
]
var DeltaVDiagnostics = [ 
    {title:"DeltaV Diagnostics", type:'text'}, 
    {name:"Diagnostics Errors", type:"text"}, 
    {name:"TimeInSync = True", type:"text"}, 
    {name:"Network Communication Integrity", type:"text"}, 
    {name:"Auto-Update Service", type:"text"}, 

]

var allDiagnostics = [].concat(workstationInformation).concat(WindowsDiagnostics).concat(DeltaVDiagnostics);
var workstationTypes = { 
    "ProPlus" : { 
        verifications: allDiagnostics, 
         inputs : [ 
             {name: "Serial Number", type:"text"},
             {name: "Operating System", type:"text"},
             {name: "Workstation Model", type:"text"},
         ],
    },

    "Application Station" : { 
        verifications: allDiagnostics, 
        inputs : [ 
            {name: "Serial Number", type:"text"},
            {name: "Operating System", type:"text"},
            {name: "Workstation Model", type:"text"},
        ],

    }, 

    "Operator Station" : { 
        verifications: allDiagnostics,
        inputs : [ 
            {name: "Serial Number", type:"text"},
            {name: "Operating System", type:"text"},
            {name: "Workstation Model", type:"text"},
        ],
    },

    "Pro Station" : { 
        verifications : allDiagnostics,
         inputs : [ 
             {name: "Serial Number", type:"text"},
             {name: "Operating System", type:"text"},
             {name: "Workstation Model", type:"text"},
         ],
    },

    "Base Station" : { 
        verifications: allDiagnostics, 
         inputs : [ 
             {name: "Serial Number", type:"text"},
             {name: "Operating System", type:"text"},
             {name: "Workstation Model", type:"text"},
         ],
    },

}

//--controllers------------------
var controllerInformation = [ 
    {title:"Controller Information", type:"text"},
    {name:"CTRL Name: ", type:"text"}, 
    {name:"Location: ", type: "text"}, 
    {name:"CTRL Type: ", type:"text"}, 
    {name: "IP Address", type:"text"}, 
    {name: "Serial Number", type:"text"}
]
var controllerDiagnostics = [ 
    {title:"Controller Diagnostics", type:"text"},
    {name:"CTRL Free Time: ", type: "text"}, 
    {name:"CTRL Free Memory", type:"text"},
    {name:"Percent OnTime for Modules", type:"text"}, 
    {name:"Check I/O Subsystem Integrity", type:"text"},
    {name:"Redundant Controllers: verify PAVAIL is True", type:"text"}, 
    {name:"Verify the TimeInSync is True(NTP)", type:"text"}, 
    {name:"Verify the controller using TELNET command", type:"text"}, 
]
var controllerFirmware = [ 
    {title:"Controller Firmware", type:"text"},
    {name:"Current Firmware Version", type:"text"}, 
    {name:"Firmware Upgrade Required", type:"text"}, 
    {name:"Firmware Upgrade Performed", type:"text"},
]
var controllerActivities = [ 
    {title:"Controller Activities", type:"text"},
    {name:"Verfiy 24VDC Supply Voltage Busses", type:"text"}, 
    {name:"Verify the BPS is connected to the UPS Line", type:"text"}, 
    {name:"Verify the Primary Passthrough Power LED Status", type:"text"},
    {name:"Verify CTRL LED Status", type:"text"}, 
    {name:"Verify the I/O Cards LED Status", type:"text"}, 
    {name:"Verify the panle ventilation", type:"text"}, 
]
var controllerAll = [].concat(controllerInformation).concat(controllerDiagnostics).concat(controllerFirmware).concat(controllerActivities);
var controllerTypes = {
    "S - Series " : { 
        verifications : controllerAll,  
        inputs : [ 
            {name: "Type: ", type:"text"},
        ],
    }, 
    "M - Series " : { 
        verifications : controllerAll,   
        inputs : [ 
            {name: "Type: ", type:"text"},
        ],
    }, 
    "CIOC Cabinet " : { 
        verifications : controllerAll,  
        inputs : [ 
            {name: "Type: ", type:"text"},
        ],
    }, 

};

function newReportHeader(){ 
    var $formheader = $('<div/>').attr('id', 'reportHeading').addClass('form-group'); 
    for(var sectionSelector in servicesHeading) 
    { 
        var section = servicesHeading[sectionSelector];
        var $headerSection = $('<div/>').addClass('container'); 
        $headerSection.append($("<div/>").attr('id', section.id).append($("<strong/>").text(sectionSelector))); 

        for (var i = 0; i < section.inputs.length; i++) 
        { 
            $headerSection.append(
                $('<div>').addClass('row input-group')
                    .append($('<div/>').append(section.inputs[i].name).addClass('input-group-text col-sm'))
                    .append($('<div/>').addClass('col').append($("<input/>").attr("type", section.inputs[i].type).addClass('col form-control')))); 
        } 
            $formheader.append($headerSection); 
    }

    $('#content').prepend($formheader); 
    $('#addHeaderButton').remove(); 
}


function new_workstation_form(workstation_name)
{ 
    var $form = $('<div/>').addClass('form-group workstation-form').attr('workstation-Name', workstation_name); 
    var workstation = workstationTypes[workstation_name]; 

    if (!workstationTypes[workstation_name])
    { 
        alert('Invalid Workstation Selection'); 
        return; 
    }

    var $formTable = $('<table/>').addClass('table container').attr("id", "workstationFormTitle");


    $($formTable).append($('<div/>').text(workstation_name)); 
    
    var workstation = workstationTypes[workstation_name]; 

    for (var i = 0; i < workstation.verifications.length; i++)
    { 
        var verfication = workstation.verifications[i];  

        //defining the input field based on object "type" (See object def): 
        if (verfication.type == 'text')
        {
            var $input = $('<input/>').attr('type', verfication.type).attr('verfication-name', verfication.name).addClass('col form-control'); 
        } 

        else if (verfication.type == 'choice')
        {
            var $input = $('<select/>').addClass('form-control')
                    .append($('<option/>').text('Good').attr("value", "Good").attr('verfication-name', verfication.name))
                    .append($('<option/>').text('N/A').attr("value", "N/A").attr('verfication-name', verfication.name))
                    .append($('<option/>').text('Bad').attr("value", "Bad").attr('verfication-name', verfication.name))
        }
        


        //defing what to append basec on object name, either a seciton title or input row
        if (verfication['title']) 
        { 
            $formTable.append(
                $('<div/>').text(verfication['title']).attr("id", 'workstationFormSectionHeader')
            ); 

        }
        
        else if(!verfication['title'])
        {
            $formTable.append(
                $('<div/>').addClass('row input-group').append($('<div/>').addClass('input-group-text col-sm-3').text(verfication.name))
                    .append($('<div/>').append($input).addClass('col'))); 
        }
    }

    $form.append($formTable); 
    $form.append('<hr>')

    return $form; 
}

function new_ctrl_form(controller_name) 
{ 
    var $form = $('<div/>').addClass('form-group').text(controller_name); 
    
    if (!controllerTypes[controller_name]) 
    {
        alert('Invalid controller type!');
        return;
    }

    var $formTable = $('<div/>').addClass('table'); 
    var controller = controllerTypes[controller_name];

    $container = $('<div>').addClass('test')


    for (var i = 0; i < controller.verifications.length; i++)
    { 
        var verfication = controller.verifications[i]
        var $input = $('<input/>').attr('type', verfication.type).attr('verfication-name', verfication.name).addClass('col form-control'); 


        if (verfication['title']) 
        {
            $formTable.append(
                $('<div/>').text(verfication['title']).attr("id", "controllerFormSectionHeader")
            )
        }

        else if (!verfication['title'])
        {
            $formTable.append(
                $('<div/>').addClass('row input-group')
                    .append($('<div/>').addClass('input-group-text col-sm-4').text(verfication.name))
                    .append($('<div/>').append($input).addClass(''))); 
        }
        
    }

    $form.append($formTable); 
    $form.append('<hr>')
    return $form; 
}

// ninjaed from: https://stackoverflow.com/a/901144
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function load_form_data(data) {
    for (var i = 0; i < data.workstation.length; i++) {
        var workstation =  data.workstation[i];
        var $form = new_workstation_form(workstation.name);
        $('#content').append($form);

    }
}

function get_form_data() 
{ 
    var data = {workstation: []}; 

    $('.workstation-form').each(function (i,e) {
        var workstation = { 
            name: $(e).attr('workstation-name'), 
            input : {}, 
        }; 

        $(e).find('input').each(function(i,e2) { 
            
            //check for empty
            if ($(e2).val() == "") { 
                return; 
            }

            workstation.input[$(e2).attr('verfication-name')] = $(e2).val();

        }); 

        $(e).find('option:selected').each(function(i,e2){
            if ($(e2).val() == "") { 
                return; 
            }

            workstation.input[$(e2).attr('verfication-name')] = $(e2).val();
        })
            
        
        

        data.workstation.push(workstation); 
        //data.controllers.push(controller); 

    }); 

    return data; 
}


$(document).ready(function() { 

    $('#saveButton').click(function() {
        var data = JSON.stringify(get_form_data());
        console.log(get_form_data());
        var serviceURL = "/submit"

        $.ajax({
            url: serviceURL,
            type: "POST",
            dataType: "json",
            data: data,
            contentType: "application/json"
        });

    })

    $('#headerButton').click(newReportHeader); 

    //-- workstations -------------------
        for (var wt in workstationTypes) {
            $('#add-workstation-options').append(
                $("<option/>").attr("value", wt).text(wt));
        }
        $('#add-workstation-options').change(function() {
            var value = $(this).find(":selected").attr("value");
            var $form = new_workstation_form(value);
            $('#content').append($form);
            $(this).val('');
        });
    //-- controllers --------------------
        for (var ct in controllerTypes) { 
            $("#add-controller-options").append(
                $("<option/>").attr("value", ct).text(ct)); 
        }

        $("#add-controller-options").change(function() { 
            var value = $(this).find(":selected").attr("value"); 
            var $form = new_ctrl_form(value); 
            $('#content').append($form); 
            $(this).val(''); 
        }); 


//call to load form Data into form fields         
var id = getParameterByName('id');
if (id) {
$.ajax({
    url: '/viewdata',
    type: "GET",
    dataType: "json",
    data: {'id': id},
    contentType: "application/json",
    success: function(data) 
    {
        console.log(data);
        load_form_data(data);
    }
    });
}


}) 