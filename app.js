// testing
// alert("hello");

// wait until html loaded
$(document).ready(function(){
    // test whether button works
    // store each input as a var
    // HOMEWORK ADD AND DELETE
    
    $("#trackbutton").on("click", function(event) {
        event.preventDefault();     

            let issueInput = $('#field-issue').val();
            let issueSeverity = $('#field-severity').val();
            let issueAssigned = $('#field-assigned').val()  ;
        
            $('#display-issues').append(`<ul class="issue"></ul>`);
        
            $('.issue:last').append(`<form class="form-issue">`).css('border', '2px solid red').css('border-radius', '2%');
        
            $('.form-issue:last').append(`<button class="btn" type="submit">open</button>`);
            $('.form-issue:last').append(`<button class="btn" type="submit">Close</button>`);
            $('.form-issue:last').append(`<button class="btn" type="submit">Delete</button>`);  
            
            $('.issue:last').append("<li>" + `Issue: ${issueInput}`+ "</li>")
            $('.issue:last').append("<li>" + `Severity: ${issueSeverity}`+ "</li>")
            $('.issue:last').append("<li>" + `Assigned to: ${issueAssigned}`+ "</li>")
            
            // __ fix default input, and clear input following submission        
            // __ need to use a different identifier each time - [0]?
            // is it possible to have an array of uls?
            // jquery each?
            
    });
    
    
});
