
// OBJECT DEFINITION FOR REPORT HEADER  - SYSTEM INFORMATION
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

//OBJECT INFORMATION FOR WORKSTATIONS 
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
    {name: "CPU Loading (%)", type: 'text'},
    {name: "Memory Loading (%)", type: 'text'}, 
    {name: "C Drive Free Space", type: "text"},
    {name: "D Drive Free Space", type:"text"}, 
    {name: 'Network Binding Order', type: 'choice'},
    {name: "Application Logs", type: "textarea"},
    {name: "System Logs", type: "textarea"}, 
]
var DeltaVDiagnostics = [ 
    {title:"DeltaV Diagnostics", type:'text'}, 
    {name:"Diagnostics Errors", type:"choice"}, 
    {name:"TimeInSync = True", type:"choice"}, 
    {name:"Network Communication Integrity", type:"choice"}, 
    {name:"Auto-Update Service", type:"choice"}, 
]

var allDiagnostics = []
    .concat(workstationInformation)
    .concat(WindowsDiagnostics)
    .concat(DeltaVDiagnostics);


//WORKSTATION TYPES
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

//OBJECT INFORMATION FOR CONTROLLERS 
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
var controllerAll = []
    .concat(controllerInformation)
    .concat(controllerDiagnostics)
    .concat(controllerFirmware)
    .concat(controllerActivities);


//CONTROLLER TYPES
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




//GENERATES THE DOM FOR GENERAL SYSTEM INFORMATION
function newReportHeader(){ 
    var $formheader = $('<div/>').attr('id', 'reportHeading').addClass('form-group reportHeading'); 
    for(var object in servicesHeading) 
    { 
        var $headerSection = $('<div/>').addClass('container'); 

        //Adding Service Heading Section Title (OBJECT)
        $headerSection.append($("<div/>").addClass('panel panel-default').attr('id', servicesHeading[object].id).text(object)); 

        //Appending the Object information
        for (var i = 0; i < servicesHeading[object].inputs.length; i++) { 
            $headerSection.append($('<div>').addClass('panel-body')
                .append($('<div/>').append($("<input/>")
                .attr("type", servicesHeading[object].inputs[i].type)
                .attr("placeholder",servicesHeading[object].inputs[i].name)
                .addClass("form-control"))))
        }

        $formheader.append($headerSection); 
    }

    $formheader.append('<hr>')
    $('#content').prepend($formheader); 
    $('#addHeaderButton').remove(); 
}



//CREATES THE DYNAMIC FORM FOR THE WORKSTATION TYPES
function new_workstation_form(workstation_name)
{ 
    var workstation = workstationTypes[workstation_name]; 
    var $form = $('<div/>').addClass('form-group workstation-form').attr('workstation-Name', workstation_name); 

    if (!workstationTypes[workstation_name]) { 
        alert('Invalid Workstation Selection'); 
        return; 
    }

    //Appending workstation title for current form
    $form.append($('<div/>').text(workstation_name).attr('id', "workstation-form-title"))

    var $formSection = $('<div/>').addClass('panel panel-default container')

    for (var i = 0; i < workstation.verifications.length; i++)
    { 
        var verfication = workstation.verifications[i];  

        //HOW TO APPEND BASED ON THE INPUT TYPE
        if (verfication.type == 'text')
        {
            var $input = $('<input/>').attr('type', verfication.type).attr('placeholder', verfication.name).attr("verfication-name", verfication.name).addClass('form-control mb-1'); 
        } 

        else if (verfication.type == 'choice')
        {
            var $input = $('<div/>').addClass('row mr-1')
                .append($('<div/>').addClass('col-md-3').text(verfication.name))
                .append($('<select/>').addClass('form-control mb-1 col ml-1')
                    .append($('<option/>').text('Good').attr("value", "Good").attr('verfication-name', verfication.name))
                    .append($('<option/>').text('N/A').attr("value", "N/A").attr('verfication-name', verfication.name))
                    .append($('<option/>').text('Bad').attr("value", "Bad").attr('verfication-name', verfication.name)))
        }

        else if (verfication.type == 'textarea')
        {
            var $input = $('<div/>').addClass('row mr-1')
                .append($('<label/>').attr("for", verfication.name + "id").text(verfication.name))
                .append($('<textarea/>').addClass('form-control').attr("id", verfication.name + "id"))
        }
        
        //defing what to append basec on object name, either a seciton title or input row
        if (verfication['title']) 
        { 
            $formSection.append(
                $('<div/>').addClass('mb-1').text(verfication['title']).attr("id", 'workstationFormSectionHeader')
            ); 

        }
        
        else if(!verfication['title'])
        {
            $formSection.append(
                $('<div/>')
                .addClass('panen-body')
                //.append($('<div/>')
                .append($input)); 
        }
    }

    $form.append($formSection); 
    $form.append('<hr>')

    return $form; 
}



//CREATES THE DYNAMIC FORM FOR EACH CONTROLLER TYPE SELECTED
function new_ctrl_form(controller_name) 
{ 
    var controller = controllerTypes[controller_name]; 
    var $form = $('<div/>').addClass('form-group controller-form').attr("controller-Name", controller_name);  
    
    if (!controllerTypes[controller_name]) 
    {
        alert('Invalid controller type!');
        return;
    }

    $form.append($('<div/>').text(controller_name).attr("id", "controller-form-title")); 
    var $formSection = $('<div/>').addClass("panel panel-default container"); 


    for (var i = 0; i < controller.verifications.length; i++){ 

        var verfication = controller.verifications[i]
 
        if (verfication.type == 'text')
        {
            var $input = $('<input/>').attr('type', verfication.type).attr('placeholder', verfication.name).attr("verfication-name", verfication.name).addClass('form-control mb-1'); 
        } 

        else if (verfication.type == 'choice')
        {
            var $input = $('<div/>').addClass('row mr-1')
                .append($('<div/>').addClass('col-md-2').text(verfication.name))
                .append($('<select/>').addClass('form-control mb-1 col ml-1')
                    .append($('<option/>').text('Good').attr("value", "Good").attr('verfication-name', verfication.name))
                    .append($('<option/>').text('N/A').attr("value", "N/A").attr('verfication-name', verfication.name))
                    .append($('<option/>').text('Bad').attr("value", "Bad").attr('verfication-name', verfication.name)))
        }
        
        if (verfication['title']) 
        { 
            $formSection.append(
                $('<div/>').addClass('mb-1').text(verfication['title']).attr("id", 'controllerFormSectionHeader')
            ); 

        }
        
        else if(!verfication['title'])
        {
            $formSection.append(
                $('<div/>')
                .addClass('panen-body')
                //.append($('<div/>')
                .append($input)); 
        }
    }

    $form.append($formSection); 
    $form.append('<hr>')

    return $form; 
}; 

//REGEX FOR VARAIABLE ASSIGNEMENT FOR LOADING THE ID OF THE DATABASE OBJECT -- ninjaed from: https://stackoverflow.com/a/901144
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}




// FOR FILLING OUT THE FORM FIELDS WHEN PAGE LOADS WIHT DATABASE DOCUMENT ID IS ADDED TO THE URL
function load_form_data(data) {

    //LOAD THE CUSTOMER INFORMATION FORM
    for (var i = 0; i < data.reportheading.length; i++) {
        var heading =  data.reportheading[i];
        var $form = newReportHeader();

        var inputSelector = heading.input; 
        $('#content').append($form); 

        for (var key in inputSelector){ 
            if (inputSelector.hasOwnProperty(key)) { 
                //console.log(key +  "-> " + inputSelector[key])
            }

            $('.reportHeading').each(function (i,e){   
                    $(e).find('input').each(function(i,e2) {                       
                        if ($(e2).attr("placeholder") == key){
                            //console.log(e2); 
                            $(e2).attr('value', inputSelector[key])
                        }  
                    })
            }) 
        }

    }



    //LOAD THE WORKSTATION INFORMATION FORMS
    for (var i = 0; i < data.workstations.length; i++) {
        var workstation =  data.workstations[i];
        var $form = new_workstation_form(workstation.name);

        var inputSelector = workstation.input; 
        $('#content').append($form); 
    
        for (var key in inputSelector){ 
            if (inputSelector.hasOwnProperty(key)) { 
                console.log(key +  "-> " + inputSelector[key])
            }

            $form.each(function (i,e){  
                console.log(e);  
                    $(e).find('input').each(function(i,e2) {                       
                        if ($(e2).attr("placeholder") == key){
                            console.log(inputSelector[key]); 
                            console.log($(e2).attr('value', inputSelector[key]))

                        }  
                    })
            }) 
        }
    }



    // LOAD THE CONTROLLER WORKSTATION FORMS
    for (var i = 0; i < data.controllers.length; i++) {
        var controller =  data.controllers[i];
        var $form = new_ctrl_form(controller.name);

        var inputSelector = controller.input; 
        $('#content').append($form); 
    
        for (var key in inputSelector){ 
            if (inputSelector.hasOwnProperty(key)) { 
                console.log(key +  "-> " + inputSelector[key])
            }

            $form.each(function (i,e){  
                console.log(e);  
                    $(e).find('input').each(function(i,e2) {                       
                        if ($(e2).attr("placeholder") == key){
                            console.log(inputSelector[key]); 
                            console.log($(e2).attr('value', inputSelector[key]))

                        }  
                    })
            }) 
        }
    }

}


// CLEARING FORM FIEDS AFTER THE SUBMIT BUTTON IS PRESSED
function clearformfields(){ 
    $('.workstation-form').each(function(i,e){ 
        $(e).find('input').each(function(i,e2){
            $(e2).attr('value', "")
        })
    })
}


// SCRAPPING THE DATA FROM THE PAGE WHEN SUBMIT BUTTON IS PRESSED
function get_form_data() 
{ 
    var data = {
        date: "",  
        reportheading: [],
        workstations: [], 
        controllers: []
    }; 


//GET SUBMITTED REPORT DATE
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) { dd = '0' + dd;}
        if (mm < 10) { mm = '0' + mm;}
        today = mm + '/' + dd + '/' + yyyy;
        data.date = today;

//GET REPORT HEADING INFORMATION
    $('.reportHeading').each(function(i,e){ 
        
        var headingInformation = { 
            name: 'Customer Information', 
            input : {}, 
        }; 
    
        $(e).find('input').each(function(i,e2){

            if ($(e2).val == "") { 
                return; 
            }

            headingInformation.input[$(e2).attr('placeholder')] = $(e2).val(); 
            console.log($(e2).val()); 
        })

        data.reportheading.push(headingInformation);    
    }); 



//GET WORKSTATION INFORMATION
    $('.workstation-form').each(function (i,e) {
        var workstation = { 
            name: $(e).attr('workstation-name'), 
            input : {}, 
        }; 

        $(e).find('input').each(function(i,e2) { 
            
           
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
        
    
        data.workstations.push(workstation); 

    }); 


//GET CONTROLLERS INFORMATION
    $('.controller-form').each(function (i,e) {
        var controller = { 
            name: $(e).attr('controller-name'), 
            input : {}, 
        }; 

        $(e).find('input').each(function(i,e2) { 
            
            //check for empty
            if ($(e2).val() == "") { 
                return; 
            }

            controller.input[$(e2).attr('verfication-name')] = $(e2).val();

        }); 

        $(e).find('option:selected').each(function(i,e2){
            if ($(e2).val() == "") { 
                return; 
            }

            controller.input[$(e2).attr('verfication-name')] = $(e2).val();
        })           
        
    
        data.controllers.push(controller); 

    }); 


    return data; 
}




//ON READ LOAD ITEMS 
$(document).ready(function() { 

    //EVENT LISTNERS
    $('#headerButton').click(newReportHeader); 

    $('#saveButton').click(function() {
        var data = JSON.stringify(get_form_data());
        var serviceURL = "/submit"
        $.ajax({
            url: serviceURL,
            type: "POST",
            dataType: "json",
            data: data,
            contentType: "application/json", 
            success: function() 
            { 
                console.log(data); 
                alert("Document Submitted"); 
                clearformfields(); 
                window.location.href = '../index.html'
            }
        });
    })

    //LOADS THE WORKSTATION TYPES INTO THE DROPDOWN MENU
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
    //LOADS THE CONTROLLER TYPES INTO THE DROP DOWN MENU
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


    //AJAX TO GET THE ID IN THE URL, THEN PASS THE PARAM TO THE LOAD FORM DATA FOR PAGE RENDERING EXSISITNG DATABASE ENTRIES       
    var id = getParameterByName('id');
    if (id){
        $.ajax({
            url: '/viewdata',
            type: "GET",
            dataType: "json",
            data: {'id': id},
            contentType: "application/json",
            success: function(data) 
            {   
            load_form_data(data);
            }
        });
    }
}) 