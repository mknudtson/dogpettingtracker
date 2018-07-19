// alert("hello"); // testing

$(document).ready(function(){ // wait until html loaded
    
    $("#trackbutton").on("click", function(event) { // on is the new bind
        
        event.preventDefault();     

            let issueInput = $('#field-issue').val();
            let issueSeverity = $('#field-severity').val();
            let issueAssigned = $('#field-assigned').val();
            let issueID = Date.now();

            if (issueInput === "" || issueAssigned === "") {
                if (issueInput === "" && issueAssigned === "") {
                    alert("Did you even try?");
                } else if (issueInput === "") {
                    alert("Oops, you forgot the dog! The petter will be so sad.");
                } else {
                    alert("Oops, you forgot the petter! The dog will be so sad.");
                }
            } else {

            // add div, although i'm not sure it's needed as it's adding to a div
            // note #display-issues is a div already in the body of the html file
            $('#display-issues').append(`<div class="issues"></ul>`); // .css('background-color', 'yellow') // testing
                        
            // to div, append ul; each group of issue chars is a ul and is styled
            $('.issues:last').append(`<ul class="ul-issue">`).css('border', '1px solid red').css('border-radius', '1%');
            
            // to ul, append, as an li, an issue number
            $('.ul-issue:last').append("<li>" + `Issue ID: ${issueID}`+ "</li>");  

            // to ul, append, as an li, an open/closed button
            $('.ul-issue:last').append("<li class='li-inline'>" + `<button class="btn btn-append btn-status" type="submit">open</button>` + "</li>");  
            
            // to form, append lis, one per issue char
            $('.ul-issue:last').append("<li class='li-dog'>" + `Dog: ${issueInput}`+ "</li>");
            $('.ul-issue:last').append("<li class='li-urg'>" + `Urgency: ${issueSeverity}`+ "</li>");
            $('.ul-issue:last').append("<li class='li-pet'>" + `Petter: ${issueAssigned}`+ "</li>");
            
            // to ul, append, as lis, a close button and a delete button, and style them as inline-block
            $('.ul-issue:last').append("<li class='li-inline'>" + `<button class="btn btn-append btn-close" type="submit">Close</button>` + "</li>").css('display', 'inline-block');
            $('.ul-issue:last').append("<li class='li-inline'>" + `<button class="btn btn-append btn-delete" type="submit">Delete</button>` + "</li>").css('display', 'inline-block');
            
            // when done, restore default vals in input fields
            issueInput = $('#field-issue').val("");
            issueSeverity = $('#field-severity').val("Low");
            issueAssigned = $('#field-assigned').val("");
            
            // uniquely id a ul and when its corr delete button is clicked delete only that ul
            $('.btn-delete').on("click", function(event) {
                event.preventDefault(); 
                let uniqueUL = $(this).parentsUntil('#display-issues');
                uniqueUL.remove();
            });

            // make close button work
            $('.btn-close').bind('click', function(){
                $(this).toggleClass('tog');
                if ($(this).hasClass("tog")) {
                    // does not work on 2nd issue when there are 3 or more ! why not ?
                    $(this).parent().parent().children(":nth-child(2)").html(`<button class="btn btn-append btn-status" type="submit">closed</button>`);
                } // else {
                    // $(this).parent().parent().children(":first-child").html(`<button class="btn btn-append btn-status" type="submit">open</button>`);
                // }
            });
        } // end else statement
        }); // is this necessary?

});

////////

// INSTRUCTIONS

// test whether button works // store each input as a var // HOMEWORK - ADD AND DELETE

////////

// REQUIREMENTS

// _x_ when btn-submit pressed, all input fields should be restored to default input
// _x_ when btn-delete pressed, issues should disappear
// _x_ when any given btn-delete, ONLY its corresponding issue should disappears, where an "issue" is a ul with the class .issues
// _x_ when button .btn-close pressed, text of button .btn-status should change to closed (it should not toggle)
// _x_ when issue (ul) created, random issue number should be generated
// __ styles
    // _x_ remove list-item-marker from all lis
    // _x_ add imgs as list item markers for dog, urg and pet
    // _x_ improve appearance of form
    // _x_ add imgs to drop down menus
    // _x_ remove blue rim around all button colours - waht property is this?
    // _x_ add alert msgs if form not filled in properly
    // _x_ adjust margins and padding