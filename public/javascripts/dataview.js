

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
            for (var i= 0; i < data.length; i++) {
                var obj = data[i]._id
                $('#container').append($('<button/>').append((JSON.stringify(obj))).attr("id", obj).addClass("row mx-3 btn btn-secondary"));  
            }

        }
    });
    
    $('#container').on("click","button", function(event) {
        //var url = window.location.href; 
        var url = "pmreport.html"; 
        if (url.indexOf('?') > -1 ){
            url += '?id=' +  event.target.id
        } 
        else { 
            url +='?id=' +  event.target.id
        }
        window.location.href = url;
    })
});
