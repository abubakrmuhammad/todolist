// Check off todos by clicking
$('ul').on('click', 'li', function() {
  // Toggle this CSS class
  $(this).toggleClass('checked');
});

// Click on X to remove the Todo
$('ul').on('click', 'span', function(event) {
  // Select the parent li and fade it out
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });

  // Stop the event bubbling
  event.stopPropagation();
});

// Press Enter to add new Todo
$('input[type="text"').keypress(function(event) {
  // Check if the pressed key is Enter
  if (event.which === 13) {
    // Get the input value
    const todoText = $(this).val();

    // Clear the input field
    $(this).val('');

    // Create a new li and add to ul
    $('ul').append(`<li><span><i class='fa fa-trash'></i></span> ${todoText}</li>`);
  }
});

// Toggle the input by clicking the plus icon
$('.fa-plus').click(function() {
  $('input[type="text"').slideToggle(180);
});
