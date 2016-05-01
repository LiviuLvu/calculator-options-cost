$(document).ready(function() {
    // set initial value to 0 if no box is checked, on first page load
    $('.total').text('0');
    // calculate total cost each time a checkbox is clicked
    $('tr').on('click', function() {
        // if the type attribute of the target element is not "checkbox."
        if (event.target.type !== 'checkbox') {
            // find all checkboxes within the clicked table row and click them
            $(':checkbox', this).trigger('click');
        }
        var total = 0;
        // loop through each checked element and add to total
        $(':checkbox:checked.giftsRosesCheckBox').each(function() {
            total += +this.value;
        });
        $('.total').text(total);
    });

});
