// testing
// alert("hello");

// wait until html loaded
$(document).ready(function(){
    // test whether button works
    // store each input as a var
    // HOMEWORK ADD AND DELETE
    
    $("#trackbutton").on("click", function(event) { // on is the new bind
        event.preventDefault();     

            let issueInput = $('#field-issue').val();
            let issueSeverity = $('#field-severity').val();
            let issueAssigned = $('#field-assigned').val();
        
            // add div, although i'm not sure it's needed as it's adding to a div
            // note #display-issues is a div already in the body of the html file
            $('#display-issues').append(`<div class="issues"></ul>`).css('background-color', 'yellow');
            
            // to div, append ul; each group of issue chars is a ul and is styled
            $('.issues:last').append(`<ul class="ul-issue">`).css('border', '2px solid #DAA520').css('border-radius', '2%');
            
            // to ul, append, as an li, an open/closed button
            $('.ul-issue:last').append("<li class='li-inline'>" + `<button class="btn btn-append btn-status" type="submit">open</button>` + "</li>");  
            
            // to form, append lis, one per issue char
            $('.ul-issue:last').append("<li>" + `Dog: ${issueInput}`+ "</li>");
            $('.ul-issue:last').append("<li>" + `Urgency: ${issueSeverity}`+ "</li>");
            $('.ul-issue:last').append("<li>" + `Petter: ${issueAssigned}`+ "</li>");
            
            // to ul, append, as lis, a close button and a delete button, and style them as inline-block
            $('.ul-issue:last').append("<li class='li-inline'>" + `<button class="btn btn-append btn-close" type="submit">Close</button>` + "</li>").css('display', 'inline-block');
            $('.ul-issue:last').append("<li class='li-inline'>" + `<button class="btn btn-append btn-delete" type="submit">Delete</button>` + "</li>").css('display', 'inline-block');
            
            // when done, restore default vals in input fields
            issueInput = $('#field-issue').val("");
            issueSeverity = $('#field-severity').val("Low");
            issueAssigned = $('#field-assigned').val("");
            
            // 1st, config delete button to delete uls with .issues
            // 2nd, config it to delete THE RIGHT ul with arrays...
            $('.btn-delete').on('click', function(){
                $(".issues").hide();
            });

            // _x_ when btn-submit pressed, all input fields should be restored to default input
            // __ when btn-delete pressed, issue should disappear
            // __ when btn-close  pressed, text of btn-status should be toggled from open to closed
            
    });
    
            if ($('button').hasClass("blue")) {
                $('button').attr("value", "closed");
            } else {
                $('button').attr("value", "open");
            } 
    
});