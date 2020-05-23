// adding sortable drag and drop functionality
$( function() {
    $( "#list" ).sortable();
    $( "#list" ).disableSelection();
  } );



// marking completed todos with linethrough and green color when clicked. and toggles on next click
$('.listContainer ul.demo').on('click','span.todo',function(e){
    $(this).toggleClass('completed');
});

// deleting todo when clicking on delete button
$('.listContainer ul.demo').on('click','span.delete',function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(1000,function(e){
        $(this).remove();
    })
});
// adding new <li> on enter keypress
$('#inputText').keypress(function(e){
    if(e.which===13){
        let text=$(this).val();
        $('.listContainer ul').append(`<li><span class="delete"><i class="fas fa-trash-alt"></i></span> <span class="todo text-capitalize">${text}</span> </li>`);
        $(this).val('');
    }
})

//toggle inputText on clicking pencil icon
$('.addButton').on('click',()=>{
    $('#inputText').fadeToggle(800);
})

//toggle todoList title to input for changing when click on it 
$(function () {
    $(document).on('click', 'span#todoTitle', function () {
        var input = $('<input />', {
            'type': 'text',
                'name': 'unique',
                'id':'todoTitleInput',
                'value': $(this).html()
        });
        $(this).parent().append(input);
        $(this).remove();
        input.focus();
    });

    $(document).on('blur', 'input#todoTitleInput', function () {
        $(this).parent().append($('<span />').attr('id','todoTitle').html($(this).val()));
        $(this).remove();
    });
});