
$(document).ready(function() { 

    var data = []; 
    $.ajax({
        url: '/viewcollections',
        type: "GET",
        dataType: "json",
        data: data,
        contentType: "application/json",
        success: function(data) 
        {       
            for (var i= 0; i < data.length; i++) {
                var obj = data[i].reportheading[0].input["Company Name"]; 
                var objDate = data[i].date; 
                $('#data-content').append($('<button/>').append((JSON.stringify(obj + " Submitted on - " + objDate))).attr("id", data[i]._id).addClass("row mx-3 btn btn-secondary"));  
            }

        }
    });
    
    $('#data-content').on("click","button", function(event) {
        var url = "pmreport.html"; 
        if (url.indexOf('?') > -1 ){
            //console.log(event.target.id)
            url += '?id=' +  event.target.id
        } 
        else {
            //console.log(event.target.id) 
            url +='?id=' +  event.target.id
        }
        window.location.href = url;
    })
});
