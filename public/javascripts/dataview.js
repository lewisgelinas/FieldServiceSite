
$(document).ready(function() { 

    var data = [];
    
    var buttonObj = $('<div/>').addClass("dropdown-menu")
            .append($('<a>').text("Report Editor").addClass('dropdown-item'))
            .append($('<a>').text("View JSON").addClass('dropdown-item'))


    $.ajax({
        url: '/viewcollections',
        type: "GET",
        dataType: "json",
        data: data,
        contentType: "application/json",
        success: function(data) 
        {       
            for (var i= 0; i < data.length; i++) {
                
                if (data[i].reportheading[0] == null) {
                    var obj = " "
                }

                else {
                    var obj = data[i].reportheading[0].input["Company Name"]; 
                }

                var objDate = data[i].date; 
                //$('#data-content').append($(buttonObj).append((JSON.stringify(obj + " Submitted on - " + objDate))).attr("id", data[i]._id).addClass("row mx-3 btn btn-secondary"));  
                $('#data-content')
                    .append($('<div/>').addClass('dropdown')
                        .append($('<button/>')
                            .append((JSON.stringify(obj + " Submitted on - " + objDate))).addClass("row mx-3 btn btn-info dropdown-toggle")
                                .attr("id", data[i]._id)
                                .attr("data-toggle", "dropdown")
                                .attr("type", "button")
                                .attr("aria-haspopup","true")
                                .attr("aria-expanded", "false")));  
            }

        }
    });
    
    $('#data-content').on("click",".dropdown", function(event) {

        $(this).append(buttonObj)
        ID = $(this).find('button').attr('id')

        $(buttonObj).on('click', '.dropdown-item', function(event){
            
            if(this.text == "Report Editor") { 
                var url = "pmreport.html"; 
                
                if (url.indexOf('?') > -1 ){
                    url += '?id=' +  ID
                } 
                else {
                    url +='?id=' +  ID
                }

                window.location.href = url;
            }  

            else if (this.text == "View JSON" ){ 
                var url = "viewJSON.html"; 
                
                if (url.indexOf('?') > -1 ){
                    url += '?id=' +  ID
                } 
                else {
                    url +='?id=' +  ID
                }
                window.location.href = url;

            }
        }); 


    });


})