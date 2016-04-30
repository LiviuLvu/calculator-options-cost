$(document).ready(function() {
    // set initial value to 0 if no box is checked, on first page load
    $('.total').text('0');
    // calculate total cost each time a checkbox is clicked
    $('.clickarea').on('click', function() {
        var clickable = $(this).find('.clickarea').attr("href");
        if (clickable) {
            window.location = href;
        }
        var total = 0;
        // loop through each checked element and add to total
        $(':checkbox:checked.giftsRosesCheckBox').each(function() {
            total += +this.value;
        });
        $('.total').text(total);
    });

});
