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

$('#inputText').keypress(function(e){
    if(e.which===13){
        let text=$(this).val();
        $('.listContainer ul').append(`<li><span class="delete">X</span> <span class="todo text-capitalize">${text}</span> </li>`);
        $(this).val('');
    }
})

