

$(document).ready(function() { 

$('#pageHeading').append($('<h1/>').text("Viewing Data"))

var data = []; 
$.ajax({
    url: '/viewcollections',
    type: "GET",
    dataType: "json",
    data: data,
    contentType: "application/json",
    success: function(data) 
    {
        console.log(JSON.stringify(data));  
        $('#container').append(JSON.stringify(data));   
    }
});


}); 


