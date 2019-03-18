
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}




$(document).ready(function() { 

    //var data = [];

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
                
                $('#data-content').append($('<pre/>').append(JSON.stringify(data,null,3))); 
            }
        });
    }
}) 






